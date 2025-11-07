import { DocItem } from '../data/docsData'
import '../components/DocPage.css'

export interface RouteConfig {
  path: string
  element: JSX.Element
  l1: string
  l2: string
  l3: string
}

export function createRoutesFromDocs(docs: DocItem[]): RouteConfig[] {
  return docs.map((doc) => {
    const path = `/${doc.l1.toLowerCase().replace(/\s+/g, '-')}/${doc.l2.toLowerCase().replace(/\s+/g, '-')}/${doc.l3.toLowerCase().replace(/\s+/g, '-')}`
    
    return {
      path,
      element: <DocPage doc={doc} />,
      l1: doc.l1,
      l2: doc.l2,
      l3: doc.l3
    }
  })
}

function DocPage({ doc }: { doc: DocItem }) {
  return (
    <div className="doc-page">
      <h1 className="doc-title">{doc.l3}</h1>
      <div className="doc-content">
        {formatContent(doc.content)}
      </div>
    </div>
  )
}

function formatContent(content: string): JSX.Element {
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let codeBlock = ''
  let inCodeBlock = false

  lines.forEach((line, index) => {
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // 코드 블록 종료
        elements.push(
          <pre key={`code-${index}`} className="code-block">
            <code>{codeBlock.trim()}</code>
          </pre>
        )
        codeBlock = ''
        inCodeBlock = false
      } else {
        // 코드 블록 시작
        inCodeBlock = true
      }
      return
    }

    if (inCodeBlock) {
      codeBlock += line + '\n'
      return
    }

    if (line.trim() === '') {
      elements.push(<br key={`br-${index}`} />)
      return
    }

    if (line.startsWith('**') && line.endsWith('**')) {
      const text = line.replace(/\*\*/g, '')
      elements.push(<strong key={`strong-${index}`}>{text}</strong>)
      return
    }

    if (line.match(/^\d+\./)) {
      elements.push(
        <li key={`li-${index}`} className="list-item">
          {line.replace(/^\d+\.\s*/, '')}
        </li>
      )
      return
    }

    // 인라인 코드 처리
    const parts = line.split(/(`[^`]+`)/g)
    if (parts.length > 1) {
      elements.push(
        <p key={`p-${index}`} className="doc-paragraph">
          {parts.map((part, partIndex) => {
            if (part.startsWith('`') && part.endsWith('`')) {
              return <code key={`inline-code-${partIndex}`} className="inline-code">{part.slice(1, -1)}</code>
            }
            return <span key={`span-${partIndex}`}>{part}</span>
          })}
        </p>
      )
      return
    }

    elements.push(
      <p key={`p-${index}`} className="doc-paragraph">
        {line}
      </p>
    )
  })

  if (inCodeBlock && codeBlock) {
    elements.push(
      <pre key="code-final" className="code-block">
        <code>{codeBlock.trim()}</code>
      </pre>
    )
  }

  return <>{elements}</>
}


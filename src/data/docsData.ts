export interface DocItem {
  l1: string
  l2: string
  l3: string
  content: string
}

export const docsData: DocItem[] = [
  {
    l1: 'Introduction',
    l2: 'Overview',
    l3: 'What is Orakle?',
    content: `Orakle is an AI-powered data oracle that leverages the x402 protocol for instant, real-time micropayments. It provides divine data, predictive analytics, and event triggers, all paid for on-demand.

Orakle speaks truth – Divine data, instant wealth.`
  },
  {
    l1: 'Introduction',
    l2: 'Core Concepts',
    l3: 'The Orakle Ecosystem',
    content: `1. AI-Powered Queries: Go beyond simple data. Ask predictive, complex questions and receive AI-generated insights.

2. x402 Micropayments: Every query is a simple x402 transaction. No subscriptions, just pay-per-query for the exact data you need, when you need it.

3. Real-time Feeds: Subscribe to high-speed data feeds for trading, betting, or automated processes.`
  },
  {
    l1: 'Introduction',
    l2: 'Getting Access',
    l3: 'Accessing the Orakle API',
    content: `Access to the Orakle API is managed via the Orakle Dashboard. Sign up to generate your API keys and pre-fund your account with x402 to begin querying.`
  },
  {
    l1: 'User Guide',
    l2: 'The Orakle Bot',
    l3: 'Interacting with Orakle',
    content: `For end-users and traders, the simplest way to query Orakle is via our official Telegram and Discord bots. Simply send a query, approve the x402 payment, and receive your data instantly in the chat.`
  },
  {
    l1: 'User Guide',
    l2: 'Use Cases',
    l3: 'On-Chain Betting & Events',
    content: `Orakle powers a new generation of on-chain event derivatives. Platforms (like Pump.fun integrations) can use Orakle to verify real-world outcomes, allowing users to bet on anything from market movements to sports results, with payouts settled instantly.`
  },
  {
    l1: 'User Guide',
    l2: 'Use Cases',
    l3: 'AI-Assisted Trading',
    content: `A trader can query Orakle for predictive market sentiment on a specific token just before executing a trade. The AI analyzes real-time data and returns a confidence score, all paid for with a single micropayment.`
  },
  {
    l1: 'Developer Guide',
    l2: 'Authentication',
    l3: 'Authenticating API Requests',
    content: `All API requests must be authenticated using a Secret Key. Pass your key in the Authorization header as a Bearer token.

\`\`\`
Authorization: Bearer sk_live_YOUR_SECRET_KEY
\`\`\`

Your API key is linked to your pre-funded x402 account, which is debited for each query.`
  },
  {
    l1: 'Developer Guide',
    l2: 'Core Logic',
    l3: 'Synchronous vs. Asynchronous Queries',
    content: `Orakle supports two query types.

**Synchronous queries** (e.g., "What is the price of $SOL?") return data immediately in the same API call.

**Asynchronous queries** (e.g., "Predict sentiment for $XYZ in 1h") may take longer and will return a queryId. The result must be retrieved via a webhook or by polling the status endpoint.`
  },
  {
    l1: 'Developer Guide',
    l2: 'Webhooks',
    l3: 'Handling Webhook Events',
    content: `To receive results from asynchronous queries or real-time event triggers, you must configure a webhook endpoint in your Orakle Dashboard. Our server will send a POST request to your URL when an event occurs.`
  },
  {
    l1: 'Developer Guide',
    l2: 'Webhooks',
    l3: 'Securing Your Webhook Endpoint',
    content: `It is critical to verify that incoming webhooks are from Orakle. Every request includes an X-Orakle-Signature header. You must verify this signature using your Webhook Signing Secret to prevent spoofing.`
  },
  {
    l1: 'API Reference',
    l2: 'Queries API',
    l3: 'Submit query',
    content: `**POST** /v1/query

Submits a query to the Orakle network. The cost of the query is automatically debited from your pre-funded account.

**Body:**
- \`query\` (string, required): The natural language query (e.g., "What is the 1-hour sentiment for $PING?").
- \`type\` (string, optional): "data" (fast) or "predictive" (AI-powered). Default: "data".
- \`webhookUrl\` (string, optional): Provide this URL to receive an asynchronous response for "predictive" queries.

**Sync Response (200 OK):**
\`\`\`json
{
  "queryId": "q_123",
  "status": "completed",
  "result": {
    "data": 8.45,
    "unit": "USD"
  }
}
\`\`\`

**Async Response (202 Accepted):**
\`\`\`json
{
  "queryId": "q_456",
  "status": "processing",
  "message": "Query accepted. Awaiting result via webhook."
}
\`\`\``
  },
  {
    l1: 'API Reference',
    l2: 'Queries API',
    l3: 'Get query status',
    content: `**GET** /v1/query/{queryId}

Retrieves the current status and result of a specific query.

**Path Parameters:**
- \`queryId\` (string, required): The ID of the query.

**Response (200 OK):**
\`\`\`json
{
  "queryId": "q_456",
  "status": "completed",
  "query": "...",
  "result": {
    "data": "positive",
    "confidence": 0.88
  }
}
\`\`\``
  },
  {
    l1: 'API Reference',
    l2: 'Feeds API',
    l3: 'List available feeds',
    content: `**GET** /v1/feeds

Returns a list of all available real-time data feeds you can subscribe to.

**Response (200 OK):**
\`\`\`json
{
  "data": [
    {
      "feedId": "sol-usd",
      "name": "SOL/USD Price",
      "updateInterval": 1000
    },
    ...
  ],
  "pagination": {
    ...
  }
}
\`\`\``
  },
  {
    l1: 'API Reference',
    l2: 'Feeds API',
    l3: 'Get latest feed data',
    content: `**GET** /v1/feeds/{feedId}

Get the latest data point from a specific real-time feed.

**Path Parameters:**
- \`feedId\` (string, required): The ID of the feed (e.g., "sol-usd").

**Response (200 OK):**
\`\`\`json
{
  "feedId": "sol-usd",
  "value": 150.22,
  "timestamp": 1678886400
}
\`\`\``
  },
  {
    l1: 'API Reference',
    l2: 'Webhook Events',
    l3: 'Event: query.fulfilled',
    content: `Sent when an asynchronous query has been successfully processed.

**Payload:**
\`\`\`json
{
  "event": "query.fulfilled",
  "data": {
    "queryId": "q_456",
    "status": "completed",
    "result": {
      "data": "positive",
      "confidence": 0.88
    }
  }
}
\`\`\``
  },
  {
    l1: 'API Reference',
    l2: 'Webhook Events',
    l3: 'Event: feed.triggered',
    content: `Sent when a monitored event or feed subscription alert is triggered.

**Payload:**
\`\`\`json
{
  "event": "feed.triggered",
  "data": {
    "feedId": "sol-usd",
    "triggerCondition": "price > 150",
    "currentValue": 150.22
  }
}
\`\`\``
  },
  {
    l1: 'API Reference',
    l2: 'Errors',
    l3: 'Error Codes',
    content: `Lists all possible API error codes and their meanings.

- **400 Bad Request**: The request body is malformed.
- **401 Unauthorized**: Invalid or missing API key.
- **402 Payment Required**: Your pre-funded account balance is too low to cover the query cost.
- **404 Not Found**: The requested resource does not exist.
- **429 Too Many Requests**: You have exceeded the rate limit.`
  }
]



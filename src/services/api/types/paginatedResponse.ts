export interface ResultContent {
  name: string
}

interface PaginatedResponse {
  count: number
  next: string
  previous: string
  results: ResultContent[]
}

export default PaginatedResponse

export class HttpAdapter {
  static async get<T>(url: string): Promise<{ data: T; statusCode: number }> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Error fetching data')
    }
    const statusCode = response.status
    return {
      data: await response.json(),
      statusCode,
    }
  }
}

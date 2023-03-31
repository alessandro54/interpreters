export default class HttpClient {
  public static async post(url: string, body: any = {}) : Promise<any> {
    return await $fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: body
    })
  }
  public static async get(url: string) : Promise<any> {
    return await $fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
  }
}

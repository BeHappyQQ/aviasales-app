export class ApiAviasales {
  baseUrl = 'https://aviasales-test-api.kata.academy/';
  getSearchId = async () => {
    const url = new URL(`${this.baseUrl}search`);
    const response = await fetch(url);
    const json = await response.json();
    return json;
  };
  getTickets = async (searchId) => {
    const url = new URL(`${this.baseUrl}tickets`);
    url.searchParams.append('searchId', searchId);
    const response = await fetch(url.href, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    });
    const json = await response.json();

    return json;
  };
}

export default function fetcher(url: string) {
  return fetch(url).then((response) => response.json());
}

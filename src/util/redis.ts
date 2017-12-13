import qs from 'querystring';

export default function call(cm: string, ...args: string[]): Promise<any> {
  const host = 'http://localhost:3132';
  return fetch(`${host}?${qs.stringify({ cm, args})}`).then(res => {
    try {
      return res.json();
    } catch (e) {
      return res.text();
    }
  }).catch(err => err);
}
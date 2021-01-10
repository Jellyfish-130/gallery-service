import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 500,
  duration: '30s',
};

export default function () {
  http.get(`http://34.221.85.17/listings/${Math.floor(Math.random() * 120010)}`);
  sleep(1);
}
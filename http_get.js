import http from 'k6/http';
import { sleep } from 'k6';
export default function () {
  http.get(`http://localhost:3002/listings/${Math.floor(Math.random() * 120010)}`);
  sleep(1);
}
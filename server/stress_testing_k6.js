import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '10s',
      preAllocatedVUs: 500,
      maxVUs: 5000,
      stages: [
        { target: 500, duration: '60s' },
        { target: 500, duration: '10m' },
        { target: 1000, duration: '60s' },
        { target: 1000, duration: '10m' },
        { target: 1500, duration: '60s' },
        { target: 1500, duration: '10m' },
        { target: 2000, duration: '60s' },
        { target: 2000, duration: '10m' },
        { target: 2500, duration: '60s' },
        { target: 2500, duration: '10m' },
        { target: 3000, duration: '60s' },
        { target: 3000, duration: '10m' },
        { target: 3500, duration: '60s' },
        { target: 3500, duration: '10m' },
        { target: 4000, duration: '60s' },
        { target: 4000, duration: '10m' },
        { target: 4500, duration: '60s' },
        { target: 4500, duration: '10m' },
        { target: 5000, duration: '60s' },
        { target: 5000, duration: '10m' },
        { target: 0, duration: '60s' },
      ],
    },
  },
};

// Get Request
export default function () {
  const product = Math.floor(Math.random() * 1000000) + 9000000;
  const res = http.get(`http://127.0.0.1:5000/itemDetails/${product}`);
  const result = check(res, {
    'status is 200': (r) => r.status === 200,
  });
  errorRate.add(!result);
}

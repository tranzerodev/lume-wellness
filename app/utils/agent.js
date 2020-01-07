import axios from 'axios';
import { CMS_API_URL, CMS_API_TOKEN, LAMBDA_API } from '../configs';

const agent = axios.create({
  baseURL: CMS_API_URL,
});

agent.interceptors.request.use(config => {
  if (process.browser) {
    config = {
      ...config,
      headers: { ...config.headers, Authorization: `Bearer ${CMS_API_TOKEN}` },
    };
  }
  return config;
});

const lambda = axios.create({
  baseURL: LAMBDA_API,
});

lambda.interceptors.request.use(config => {
  if (process.browser) {
    config = {
      ...config,
      headers: { ...config.headers },
    };
  }
  return config;
});

export { agent, lambda };

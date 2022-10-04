const DEV_URl = 'http://127.0.0.1:8090';
const PROD_URL = 'https://kestrel.fly.dev';

export const BASE_URl =
  process.env.NODE_ENV === 'development' ? DEV_URl : PROD_URL;

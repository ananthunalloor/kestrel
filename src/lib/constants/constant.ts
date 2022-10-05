const DEV_URl = 'http://127.0.0.1:8090';
const PROD_URL = 'https://kestrel.fly.dev';

export const BASE_URl =
  process.env.NODE_ENV === 'development' ? DEV_URl : PROD_URL;

export const WEATHER_API_KEY = 'e32f8387dbb1dbaddc7e883a60b15608';
export const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const WEATHER_UNITS = 'metric';

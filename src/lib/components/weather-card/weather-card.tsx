import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'preact/hooks';
import {
  WEATHER_API_KEY,
  WEATHER_UNITS,
  WEATHER_URL
} from '../../constants/constant';
import { Weather } from '../../types/weather';
import { alert, dateString, isDay } from '../../utils/utils';

export interface WeatherCardProps {
  className?: string;
}

const getBackground = (isDay: Boolean) => {
  return clsx('h-60 w-60 bg-base-100 p-4 rounded-2xl bg-no-repeat bg-cover', {
    'bg-lakeside-sunrise': isDay,
    'bg-lakeside-sunset': !isDay
  });
};

export function WeatherCard({ className }: WeatherCardProps) {
  const [weatherDetails, setWeatherDetails] = useState<Weather>();

  var options = {
    method: 'GET',
    url: WEATHER_URL,
    params: {
      lat: '9.4002',
      lon: '76.6138',
      units: WEATHER_UNITS,
      appid: WEATHER_API_KEY
    }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(response => {
        setWeatherDetails(response.data);
      })
      .catch(error => alert('error', 'Something went wrong'));
  }, []);

  console.log(weatherDetails);

  return (
    <div
      className={clsx(
        'drop-shadow-sm h-60 flex items-center bg-base-100 rounded-2xl',
        className
      )}
    >
      <div className={getBackground(isDay())}>
        <div className='flex w-auto'>
          <div className='flex-grow text-base-100 font-bold'>
            <p className='text-5xl'>
              {weatherDetails?.main.temp?.toFixed(1)}°C
            </p>
            <p className='text-base'>{weatherDetails?.weather[0].main}</p>
          </div>
          <span class='material-symbols-outlined w-16 h-16 !text-6xl text-base-100 m-auto'>
            rainy
          </span>
        </div>
        <div class='text-base-100 flex flex-col mt-14'>
          <p className='text-base font-bold'>
            {dateString({
              weekday: 'long'
            })}
          </p>
          <div className='font-light text-sm'>
            {dateString({
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            })}
            <div className='flex'>
              <span class='material-symbols-outlined !font-light !text-sm'>
                location_on
              </span>{' '}
              {weatherDetails?.name}
            </div>
          </div>
        </div>
      </div>
      <div className='w-64 max-w-xs bg-base-100 p-4 flex'>
        <div className='flex-grow'>
          <ul className='flex flex-col font-bold text-sm gap-2'>
            <li>Wind Speed</li>
            <li>Cloudiness</li>
            <li>Visibility</li>
            <li>Pressure</li>
            <li>Humidity</li>
            {weatherDetails?.rain && <li>Rain</li>}
          </ul>
        </div>
        <div className='w-auto text-right pr-2'>
          <ul className='flex flex-col font-normal text-sm gap-2'>
            <li>{weatherDetails?.wind.speed} km/h</li>
            <li>{weatherDetails?.clouds.all} %</li>
            <li>{weatherDetails?.visibility} km</li>
            <li>{weatherDetails?.main.pressure} hpa</li>
            <li>{weatherDetails?.main.humidity} %</li>
            {weatherDetails?.rain && <li>{weatherDetails?.rain?.['1h']} mm</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

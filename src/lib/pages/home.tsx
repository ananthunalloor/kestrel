import { Bar } from 'react-chartjs-2';
import { WeatherCard } from '../components/weather-card/weather-card';
import { ChartContainer } from '../ui-components/chart-container/chart-container';
import { InfoTile } from '../ui-components/info-tile/info-tile';
import { RequireAuth } from '../ui-components/require-auth/require-auth';

export interface HomeProps {}

export function Home({}: HomeProps) {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  };

  return (
    <RequireAuth>
      <div className='w-full h-auto flex'>
        <div className='w-80'></div>
        <div className='flex-grow'>
          <h1 class='text-2xl font-bold'>Polyhouse</h1>
          <div className='flex gap-4 m-4 flex-wrap'>
            <InfoTile
              title='Temperature'
              value='27.2°C'
              subText='21% more than last month'
              icon='thermometer'
            />
            <InfoTile
              title='Humidity'
              value='80%'
              subText='21% more than last month'
              icon='humidity_low'
            />
            <InfoTile
              title='Ph Level'
              value='5.6'
              subText='21% more than last month'
              icon='water'
            />
            <InfoTile
              title='Water EC'
              value='1.8'
              subText='21% more than last month'
              icon='bolt'
            />
          </div>
          <h1 class='text-2xl font-bold'>Weather</h1>
          <div className='flex gap-4 flex-wrap p-4'>
            <WeatherCard />
            <ChartContainer className='w-[40vw] h-[40vh] bg-base-100'>
              <Bar options={options} data={data} />
            </ChartContainer>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}

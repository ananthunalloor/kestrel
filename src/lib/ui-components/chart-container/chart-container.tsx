import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import clsx from 'clsx';

export function ChartContainer(props: {
  children: JSX.Element;
  className?: string;
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  return (
    <div className={clsx('p-4 rounded-2xl drop-shadow-sm', props.className)}>
      {props.children}
    </div>
  );
}

import toast from 'react-hot-toast';

export const alert = (
  type: 'success' | 'warning' | 'error' | 'info',
  message?: string
) => {
  switch (type) {
    case 'success':
      return toast.success(message || 'Success');
    case 'warning':
      return toast(message || 'Success', {
        icon: '⚠️'
      });
    case 'error':
      return toast.error(message || 'Error');
    case 'info':
      return toast(message || 'Info', {
        icon: null
      });
    default:
      return toast(message || 'Message', {
        icon: null
      });
  }
};

export const dateString = (options?: Intl.DateTimeFormatOptions) =>
  new Date().toLocaleDateString(window.navigator.language, options);

export const isDay = (sunrise?: number, sunset?: number): boolean => {
  const currentHour = new Date().getHours();

  function convert(time: number): number {
    return new Date(time * 1000).getHours();
  }

  if (sunrise && sunset)
    return currentHour > convert(sunrise) && currentHour < convert(sunset);
  else return true;
};

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

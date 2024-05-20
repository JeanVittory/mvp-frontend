import { SERVER_ERROR_MESSAGE, UNAUTHORIZED_MESSAGE } from '@/constants';
import { toast } from 'sonner';

export const showUnauthorizedToast = () => {
  return toast.error(UNAUTHORIZED_MESSAGE, {
    classNames: {
      toast: 'dark:bg-light-100 bg-dark-100 text-light-100 dark:text-dark-100',
    },
  });
};

export const showServerErrorToast = () => {
  return toast.error(SERVER_ERROR_MESSAGE, {
    classNames: {
      toast: 'dark:bg-light-100 bg-dark-100 text-light-100 dark:text-dark-100',
    },
  });
};

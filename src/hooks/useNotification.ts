import { Store } from 'react-notifications-component';

export default function () {
  return {
    warning: (title: string, message: string) => {
      Store.addNotification({
        title: title,
        message: message,
        type: 'warning',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    },
    success: (title: string, message: string) => {
      Store.addNotification({
        title: title,
        message: message,
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    },
    danger: (title: string, message: string) => {
      Store.addNotification({
        title: title,
        message: message,
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  };
}

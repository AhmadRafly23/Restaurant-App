import { Toaster, toast } from 'react-hot-toast';
import { UseAlert } from '../contexts/AlertContext';
import { useEffect } from 'react';

function Alert() {
  const { show, message, type, hideAlert } = UseAlert();

  useEffect(() => {
    if (show && type === 'error') {
      toast.error(message);
    } else if (show && type === 'success') {
      toast.success(message);
    }

    setTimeout(() => {
      hideAlert();
    }, 3000);
  }, [show]);

  return <Toaster />;
}

export default Alert;

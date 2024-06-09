import { ToastPosition, toast } from "react-toastify";

const tosterInitProps = {
  position: "top-right" as ToastPosition,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const toster = (type: string, message: string) => {
  switch (type) {
    case "success":
      toast.success(message, tosterInitProps);
      break;
    case "warn":
      toast.warn(message, tosterInitProps);
      break;
    case "danger":
      toast.error(message, tosterInitProps);
      break;
    case "info":
      toast.info(message, tosterInitProps);
      break;
    default:
      return "";
      break;
  }
};

export default toster;

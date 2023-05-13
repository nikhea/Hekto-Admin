import { toast } from "react-toastify";

enum NotificationType {
  Success = "success",
  Info = "info",
  Error = "error",
}

interface INotify {
  message: string;
  type: NotificationType;
}

function notify({ message, type }: any) {
  switch (type) {
    case NotificationType.Success:
      toast.success(message);
      break;
    case NotificationType.Info:
      toast.info(message);
      break;
    case NotificationType.Error:
      toast.error(message);
      break;
    default:
      toast.success(message);
      break;
  }
}

export { notify };

// import { toast } from "react-toastify";
// export type Inotify = {
//   status?: number;
//   message: string;
//   type: string;
// };
// export const notify: Inotify = (status, message, type) => {
//   if (type === "success") {
//     toast.success(message);
//   } else if (type === "info") {
//     toast.success(message);
//   } else if (type === "error") {
//     toast.error(message);
//   } else {
//     toast.success(message);
//   }
// };

// if (status === 200) {
//   toast.success(message);
// } else if (status === 201) {
//   toast.success(message);
// } else if (status === 400) {
//   toast.error(message);
// } else {
//   toast.error(message);
// }

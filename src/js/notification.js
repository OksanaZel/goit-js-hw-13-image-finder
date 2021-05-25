import { info, defaults } from "@pnotify/core";
import '@pnotify/core/dist/Material.css';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

defaults.styling = 'material';
defaults.icons = 'material';

const onShowNotification = () => {
     info ({
    title: 'Invalid request',
    text: `Please enter the right query!`,
    delay: 2000,
  });
}

export { onShowNotification };
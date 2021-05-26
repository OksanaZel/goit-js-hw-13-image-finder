import { info, notice, error, defaults } from "@pnotify/core";
import '@pnotify/core/dist/Material.css';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

defaults.styling = 'material';
defaults.icons = 'material';

const onShowInfoNotification = () => {
     info ({
    title: 'Invalid request',
    text: `The search field is empty!`,
    delay: 2000,
     });
}

const onShowErrorNotification = () => {
     error ({
    title: 'Invalid request',
    text: `Please enter the right query!`,
    delay: 2000,
     });
}

const onShowNoticeNotification = () => {
   notice ({
    title: 'End of search',
    text: `Please enter the new query!`,
    delay: 2000,
     });
}

export { onShowInfoNotification, onShowErrorNotification, onShowNoticeNotification };
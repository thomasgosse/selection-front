import UIkit from 'uikit';

export default function sendNotification(message, icon, status, position = 'bottom-center') {
  UIkit.notification({
    message: `<span uk-icon='icon: ${icon}'></span> ${message}`,
    pos: position,
    status,
  });
}

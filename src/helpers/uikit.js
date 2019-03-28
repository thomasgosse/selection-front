import UIkit from 'uikit';

export function hideOffCanvas() {
  if (UIkit.offcanvas('#offcanvas-push')) UIkit.offcanvas('#offcanvas-push').hide();
}

export function toggleOffCanvas() {
  UIkit.offcanvas('#offcanvas-push').toggle();
}

export function sendNotification(message, icon, status, position = 'bottom-center') {
  UIkit.notification({
    message: `<span uk-icon='icon: ${icon}'></span> ${message}`,
    pos: position,
    status,
  });
}

import { App } from 'circle-ihk';

export default function (app: App) {
  return () => {
    app.tabs('create', { url: app.path('feedback') });
  };
}

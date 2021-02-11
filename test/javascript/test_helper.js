import { Application } from "stimulus";
export const startApplication = () => Application.start();
export const getControllerByName = (app, name) => {
  const element = document.querySelector(`[data-controller="${name}"]`);
  return app.getControllerForElementAndIdentifier(element, name);
};

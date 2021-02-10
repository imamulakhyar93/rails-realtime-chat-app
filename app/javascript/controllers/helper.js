export const getControllerByName = (ctx, name) => {
  const element = document.querySelector(`[data-controller="${name}"]`);
  return ctx.application.getControllerForElementAndIdentifier(element, name);
};

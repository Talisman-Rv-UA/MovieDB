export const setPageTitle = (pageName, appName) => {
  document.querySelector(
    "title"
  ).textContent = `${appName} | ${pageName.toUpperCase()}`;
};

export const setUrlAnimal = (url) => {
  if (url?.startsWith("/uploads/")) {
    // return `https://paw-connect-back.onrender.com${url}`;
    return `http://localhost:3000${url}`;
  }
  return url;
};

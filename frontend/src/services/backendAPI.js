export const getItems = () => {
  return fetch("http://localhost:5000/api/items")
    .then((res) => res.json())
    .catch(console.log);
};

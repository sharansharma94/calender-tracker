import { Item } from "../shared/types";

export const getItems = () => {
  return fetch("http://localhost:5000/api/items")
    .then((res) => res.json())
    .catch(console.log);
};

interface itemPayload {
  item: Item;
}

export const postItems = (data: itemPayload) => {
  return fetch("http://localhost:5000/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch(console.log);
};

export default function getImageURL(name) {
  return new URL(`../assets/${name}.jpg`, import.meta.url).href;
}

//functio to dynamically load iages based on imageURL fetched from firebase

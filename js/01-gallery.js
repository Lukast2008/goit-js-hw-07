import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryAllPhotoPreview = document.querySelector(".gallery");
let mass = [];

for (let i = 0; i < galleryItems.length; i += 1) {
  const newImg = document.createElement("img");
  const { preview } = galleryItems[i];
  console.log(preview);
  newImg.src = preview;
  newImg.style.width = "270px";
  newImg.classList.add = "gallery__image";
  //   newImg = ;

  mass.push(newImg);
}

galleryAllPhotoPreview.append(...mass);

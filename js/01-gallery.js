import { galleryItems } from "./gallery-items.js";

const galleryAllPhotoPreview = document.querySelector(".gallery");

const gelImg = galleryItems
  .map(
    (el) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
        <img
          class="gallery__image"
          src=${el.preview}
          data-source=${el.original}
          alt=${el.description}
        />
      </a>
    </div>`
  )
  .join("");

galleryAllPhotoPreview.innerHTML = gelImg;

galleryAllPhotoPreview.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img  src=${event.target.dataset.source}  width ="800" />`
  );

  instance.show();

  document.addEventListener("keydown", keyEsc);
  function keyEsc(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

//%%%%%%%%%%%%%%%%%%

// Change code below this line

// console.log(galleryItems);

// const galleryAllPhotoPreview = document.querySelector(".gallery");

// const currentImgPaste = document.querySelector(".gallery__item");
// const currentImg = document.querySelector(".gallery__image");
// const imgLink = document.querySelector(".gallery__link");

// const instance = basicLightbox.create(`
//     <div class="modal">

//           <div class="gallery__item">
//             <a class="gallery__link" href="large-image.jpg">
//               <img class="gallery__image" src="small-image.jpg" data-source="large-image.jpg" alt="Image description" />
//             </a>
//           </div>

//     </div>
// `);

// let mass = [];

// let clickerImage;

// for (let i = 0; i < galleryItems.length; i += 1) {
//   const newImg = document.createElement("img");
//   const { preview, original, description } = galleryItems[i];
//   newImg.src = preview;
//   newImg.setAttribute("alt", description);
//   newImg.setAttribute("data-source", original);
//   newImg.style.width = "370px";
//   newImg.classList.add = "gallery__image";
//   mass.push(newImg);
// }
// galleryAllPhotoPreview.append(...mass);

// galleryAllPhotoPreview.addEventListener("click", handlerImg);

// function handlerImg(event) {
//   event.preventDefault();

//   instance.show();
//   currentImg.src = event.target.getAttribute(["data-source"]);
// }

// document.addEventListener("keydown", keyEsc);
// function keyEsc(event) {
//   event.preventDefault();

//   if (event.key === "Escape") {
//     instance.close();
//   }
// }

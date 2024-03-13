/*** Aqui van hacer las importaciones ****/
import fileGalery from "./galery-img.js";
import {
  interfaceForFileGalery,
  interfaceForCarousel,
} from "./warehouse-declarations.js";
import carousel from "./carousel.js";

/*********************************************************** decalraciones */

//////////// carousel

//////////// cards
const fileGaleryData: interfaceForFileGalery = {
  templateCards: {
    article: "galery-card",
    idTemplate: "template-galeryCard",
    h2Template: "title-card",
    imgTemplate: "img-card",
  },
  containerCard: "cardContainer",
};

const interfaceCarousel: interfaceForCarousel = {
  elementFather:"element-father",
  cardContainer: "cardContainer",
  carousel: "carouserComponent",
  urlCarousel: "./Galery-carousel.html",
  cardsClass: fileGaleryData.templateCards.article,
  carouselContainerItem: "carousel",
  guideContainerItem: "guide",
  btnCarousel: {
    btnClose: "close-carousel",
    left: "bi-chevron-double-left",
    right: "bi-chevron-double-right",
  },
};


document.addEventListener("DOMContentLoaded", () => {
  /* 
  los paramertos tiene que mandarse de forma de objeto como se decalro en la interface, tenemos que mandar las ide de los elementos para pode extraerlo en la funcion 
  */
  fileGalery(fileGaleryData);
  carousel(interfaceCarousel);
});

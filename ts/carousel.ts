import {
  interfaceForCarousel,
  files,
  insertElementGuide,
} from "./warehouse-declarations.js";
import { guideCarousel, focusElement } from "./guideCarousel.js";

const d = document;

interface btnCarousel {
  btnClose: string;
  left: string;
  right: string;
}

// funcion de lo que se hara cuando se cargue los elemento  de carousel

function whenCarouselLoad(
  carousel: string,
  carouselContainerItem: string,
  file: string[] | undefined,
  nameFile: string | undefined,
  btnCarousel: btnCarousel,
  guideContainerItem: string
) {
  const { btnClose, left, right } = btnCarousel;

  // verificacion de los elementos
  if (
    carousel &&
    carouselContainerItem &&
    file &&
    nameFile &&
    guideContainerItem
  ) {
    const $carousel = d.getElementById(carousel);
    const containerItems = d.getElementById(carouselContainerItem);
    let imgSRCposition = 0;

    // para activar el btn de cerral el carousel
    d.getElementById(btnClose)?.addEventListener("click", () => {
      $carousel?.remove();
    });

    // actualizando el imgSRCposition segun a que le dimos click a los items de la guia del carousel de imagen

    const $guide = d.getElementById(guideContainerItem);
    $guide?.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).matches(".img-item-guide")) {
        let idElement = (e.target as HTMLElement).parentElement?.id;

        // past: guardamos el valor del imgSRCposition antes de modificarlo para quitarle el foco al elemento anterior
        let past = imgSRCposition;

        if (idElement)
          imgSRCposition = parseInt(idElement[idElement?.length - 1]);

        // funcion para quitar los componentess
        const removeImage = () => {
          while (containerItems?.firstElementChild) {
            containerItems.firstElementChild.remove();
          }
        };

        // insertando elementos
        if (imgSRCposition > past) {
          removeImage();
          createImage(imgSRCposition, "right");
          createImage(past, "left");
        }
        if (imgSRCposition < past) {
          removeImage();
          createImage(imgSRCposition, "left-reverse");
          createImage(past, "right-reverse");
        }

        // actualisamos el focus de los elementos de la guia del carousel
        focusElement(imgSRCposition, past);
      }
    });

    //
    d.querySelector(`.${left}`)?.classList.add("none");
    if (file.length === 1) d.querySelector(`.${right}`)?.classList.add("none");

    // funcion para insertar elemento al DOM
    const createImage = (
      SRCposition: number,
      direction: "right" | "left" | "right-reverse" | "left-reverse"
    ) => {
      const ARTICLE = d.createElement("ARTICLE");
      ARTICLE.classList.add("carousel-item");
      ARTICLE.setAttribute("id", `img-${SRCposition}`);
      ARTICLE.classList.add(direction);

      const IMG = d.createElement("IMG");
      IMG.classList.add("galery-img");
      IMG.setAttribute("alt", `imagen de ${nameFile}`);
      if (file[SRCposition]) IMG.setAttribute("src", file[SRCposition]);

      ARTICLE.append(IMG);
      containerItems?.append(ARTICLE);
    };

    createImage(imgSRCposition, "right");

    // botones
    $carousel?.addEventListener("click", (e) => {
      // btn left

      if ((e.target as Element).matches(`.${left}`)) {
        // borrando los elementos  del carousel por cada click en los botones
        while (containerItems?.firstElementChild) {
          containerItems.firstElementChild.remove();
        }
        // elegimos el boton y dependiendo si el siguiente elemento existe lo quitamos o lo removemos
        if (!file[imgSRCposition - 2])
          (e.target as Element).classList.add("none");
        d.querySelector(`.${right}`)?.classList.remove("none");

        let past = imgSRCposition;
        // pasando al siguiente elemento
        imgSRCposition = imgSRCposition - 1;
        createImage(imgSRCposition, "left-reverse");
        createImage(imgSRCposition + 1, "right-reverse");

        // exportado desde guidecarousel
        focusElement(imgSRCposition, past);
      }
      // btn right
      if ((e.target as Element).matches(`.${right}`)) {
        while (containerItems?.firstElementChild) {
          containerItems.firstElementChild.remove();
        }

        if (!file[imgSRCposition + 2])
          (e.target as Element).classList.add("none");
        d.querySelector(`.${left}`)?.classList.remove("none");

        let past = imgSRCposition;
        imgSRCposition = imgSRCposition + 1;
        createImage(imgSRCposition, "right");
        createImage(imgSRCposition - 1, "left");

        focusElement(imgSRCposition, past);
      }
    });

    // llamamos a guide cpmponent para que se ejecute en la carga del componente carousel
    const guideTemplate: insertElementGuide = {
      file: file,
      fileName: nameFile,
      scrollGuideElement: "scroll-container-guide",
      containerGuide: "guide",
      btnGuide: {
        left: "left-guide",
        right: "right-guide",
      },
      guideTemplate: {
        templateName: "template-guideItem",
        articleGuide: "guide-item",
        imgGuide: "img-item-guide",
      },
    };
    guideCarousel(guideTemplate);
  }
}

////////////////////////////////////////////////////////////////////////////////
//-----------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////
export default function carousel({
  elementFather,
  cardContainer,
  carousel,
  urlCarousel,
  carouselContainerItem,
  cardsClass,
  btnCarousel,
  guideContainerItem,
}: interfaceForCarousel) {
  // referencia para eliminar el click del elemento
  const handlerClick = (e: Event) => {
    e.stopPropagation();
    insertCarousel(e);
  };

  // funcion para insertar el carousel al DOM y acceder a la carpeta de las imagenes
  const insertCarousel = (e: Event) => {
    const Target = e.currentTarget as HTMLElement;

    // sacamos la carpeta que pertenese las imagenes
    let file = files.find((el) => Target.dataset.name === el.nameFile)?.file;

    const callCarousel = async (url: string) => {
      try {
        const res = await fetch(url);
        if (res.ok) {
          if (d.getElementById(elementFather)?.children.length === 1) {
            d.getElementById(elementFather)?.insertAdjacentHTML(
              "beforeend",
              await res.text()
            );

            whenCarouselLoad(
              carousel,
              carouselContainerItem,
              file,
              Target.dataset.name,
              btnCarousel,
              guideContainerItem
            );
          }

          // ejecutando la funcion cuando cargue los elementos
        } else {
          // en caso  de que haiga un error en encontrla la carpeta carousel
          d.querySelector(".errorFetch-carousel")?.remove();

          let p = d.createElement("P");
          p.textContent = "Error de abril el carousel";
          p.classList.add("errorFetch-carousel");
          d.querySelector("body")?.append(p);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callCarousel(urlCarousel);
  };

  // aqui esta el fetch que llama a carousel
  if (cardContainer) {
    // guardamos la targeta en un arreglo
    let $cards = Array.from(
      (d.getElementById(cardContainer) as HTMLElement).children
    );

    // comparamos si el elemento tiene que ser de la id especifica
    $cards = $cards.filter((el) => el.classList.contains(cardsClass));

    // exploramos las targetas para añadirle un evento a cada uno y activar el carousel
    if ($cards.length !== 0) {
      $cards.forEach((el) => {
        el.addEventListener("click", (e) => handlerClick(e));
      });
    } else {
      console.log("no hay elementos que mostral");
    }
  }
}

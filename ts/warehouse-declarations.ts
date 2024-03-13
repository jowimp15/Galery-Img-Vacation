//////////////////////////////////////////////////////////// Carpeta de las imageenss

class Files {
  nameFile: string;
  file: string[];
  constructor(nameFile: string, file: string[]) {
    this.nameFile = nameFile;
    this.file = file;
  }
}

export const files: Files[] = [
  new Files("Argentina", [
    "./assets/img/argentina-img-1.jpg",
    "./assets/img/argentina-img-2.jpg",
    "./assets/img/argentina-img-3.jpg",
    "./assets/img/argentina-img-4.jpg",
    "./assets/img/argentina-img-5.jpg",
  ]),
  new Files("Brazil", [
    "./assets/img/brazil-img-1.jpg",
    "./assets/img/brazil-img-2.jpg",
    "./assets/img/brazil-img-3.jpg",
    "./assets/img/brazil-img-4.jpg",
    "./assets/img/brazil-img-5.jpg",
  ]),
  new Files("Chile", [
    "./assets/img/chile-img-1.jpg",
    "./assets/img/chile-img-2.jpg",
    "./assets/img/chile-img-3.jpg",
    "./assets/img/chile-img-4.jpg",
    "./assets/img/chile-img-5.jpg",
    "./assets/img/chile-img-6.jpg",
    "./assets/img/chile-img-7.jpg",
    "./assets/img/chile-img-8.jpg",
    "./assets/img/chile-img-9.jpg",
  ]),
  new Files("Colombia", [
    "./assets/img/colombia-img-1.jpg",
    "./assets/img/colombia-img-2.jpg",
    "./assets/img/colombia-img-3.jpg",
    "./assets/img/colombia-img-4.jpg",
    "./assets/img/colombia-img-5.jpg",
    "./assets/img/colombia-img-6.jpg",
  ]),
  new Files("Mexico", [
    "./assets/img/mexico-img-1.jpg",
    "./assets/img/mexico-img-2.jpg",
    "./assets/img/mexico-img-3.jpg",
    "./assets/img/mexico-img-4.jpg",
    "./assets/img/mexico-img-5.jpg",
    "./assets/img/mexico-img-6.jpg",
  ]),
  new Files("peru", [
    "./assets/img/peru-img-1.jpg",
    "./assets/img/peru-img-2.jpg",
    "./assets/img/peru-img-3.jpg",
    "./assets/img/peru-img-4.jpg",
    "./assets/img/peru-img-5.jpg",
  ]),
];

/////////////////////////////////////////////////// querys

export function checkScreenSize() {
  let query: boolean;
  const queryDesktop = window.matchMedia("screen and (min-width: 500px)");

  if (window.innerWidth > 500) query = true;
  else query = false;

  queryDesktop.addEventListener("change", (e) => {
    if (e.matches) {
      query = true; /*excritorio */
    } else {
      query = false /*movile*/;
    }
  });
  console.log(query);
}
checkScreenSize();

/////////////////////////////////////////////////// declarations here

/** llamada para galery-img para la funciion exportada fileGalery(template, containerCard) */

/*
Lo que vamos a hacer aqui es exportal una interface qeu tenga el mismo tipo de estructura que recivira como valor la funcion en un objeto, si queremos añadir mas valores nesesitamos modificarlo aqui, se crea lo que se nesesita
*/

export interface interfaceForFileGalery {
  templateCards: {
    article: string;
    idTemplate: string;
    h2Template: string;
    imgTemplate: string;
  };
  containerCard: string;
}

/** llamada para carousel para la funciion exportada carousel() */

export interface interfaceForCarousel {
  elementFather: string;
  cardContainer: string;
  carousel: string;
  urlCarousel: string;
  cardsClass: string;

  carouselContainerItem: string;
  guideContainerItem: string;
  btnCarousel: {
    btnClose: string;
    left: string;
    right: string;
  };
}

/*  
se llamara varios componentes la la cual cada uno se dividira en el componente carousel en eventos dependiendo de sus funcones
*/

/**** llamada para las fucioens del carousel y sus funciones */
export interface insertElementGuide {
  file: string[];
  fileName: string;
  scrollGuideElement: string;
  containerGuide: string;
  btnGuide: {
    left: string;
    right: string;
  };
  guideTemplate: {
    templateName: string;
    articleGuide: string;
    imgGuide: string;
  };
}

/** */
// exportando variable comunicadoras

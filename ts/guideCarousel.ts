import { insertElementGuide } from "./warehouse-declarations.js";

const d = document;

export function guideCarousel({
  file,
  fileName,
  scrollGuideElement,
  btnGuide,
  containerGuide,
  guideTemplate,
}: insertElementGuide) {
  const { templateName, articleGuide, imgGuide } = guideTemplate;
  const { left, right } = btnGuide;

  const template = (d.getElementById(templateName) as HTMLTemplateElement)
    .content;
  const fragment = d.createDocumentFragment();

  // añadiendo los elementos al DOM
  const $guide = d.getElementById(containerGuide);
  file.forEach((el, index) => {
    template
      .querySelector(`.${imgGuide}`)
      ?.setAttribute("alt", `imagen numero ${index} de ${fileName} `);
    template.querySelector(`.${imgGuide}`)?.setAttribute("src", el);
    template
      .querySelector(`.${articleGuide}`)
      ?.setAttribute("id", `img-guide-${index}`);

    const clone = template.cloneNode(true);
    fragment.append(clone);
  });
  $guide?.append(fragment);
  $guide?.firstElementChild?.classList.add("guidde-active");

  // añadiendo funciones a los botones dle scroll

  const $guideScroll = d.getElementById(scrollGuideElement);

  if ($guideScroll) {
    d.getElementById(left)?.addEventListener("click", () => {
      $guideScroll.scrollLeft -= 500;
    });
    d.getElementById(right)?.addEventListener("click", () => {
      $guideScroll.scrollLeft += 500;
    });
  }
}

// esta funcion se  importara en carousel en la parte del evento de los botones left y right
export function focusElement(positionElement: number, pastPosition: number) {
  const pastElment = d.getElementById(`img-guide-${pastPosition}`);
  const nowElement = d.getElementById(`img-guide-${positionElement}`);

  pastElment?.classList.remove("guidde-active");
  nowElement?.classList.add("guidde-active");
}

// eligiendo imagen en el contenedor de la guia de imagenes


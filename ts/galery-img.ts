import { interfaceForFileGalery, files } from "./warehouse-declarations.js";

const d = document;
const fragment = d.createDocumentFragment();

export default function fileGalery({
  templateCards,
  containerCard,
}: interfaceForFileGalery) {
  const { idTemplate, h2Template, imgTemplate, article } = templateCards;

  // validando qeu exsita y asignando a las variables
  if (idTemplate && h2Template && imgTemplate && containerCard) {
    const $template = d.getElementById(idTemplate) as HTMLTemplateElement;
    const $container = $template.content.querySelector(
      `.${article}`
    ) as HTMLElement;
    const $title = $template.content.querySelector(
      `.${h2Template}`
    ) as HTMLElement;
    const $img = $template.content.querySelector(
      `.${imgTemplate}`
    ) as HTMLImageElement;
    const $cardContainer = d.getElementById(containerCard) as HTMLElement;

    //  recorriendo los archivos y asignandoles sus valores a los elementos , clonando el template y insertando al contenedor de las cartas
    for (const el of files) {
      $title.textContent = el.nameFile;
      $img.setAttribute("src", el.file[0]);
      $container.setAttribute("data-name", el.nameFile);

      const cloneTemplate = $template.content.cloneNode(true);
      fragment.append(cloneTemplate);
    }

    $cardContainer.appendChild(fragment);
  }
}

import { files } from "./warehouse-declarations.js";
var d = document;
var fragment = d.createDocumentFragment();
export default function fileGalery(_a) {
    var templateCards = _a.templateCards, containerCard = _a.containerCard;
    var idTemplate = templateCards.idTemplate, h2Template = templateCards.h2Template, imgTemplate = templateCards.imgTemplate, article = templateCards.article;
    // validando qeu exsita y asignando a las variables
    if (idTemplate && h2Template && imgTemplate && containerCard) {
        var $template = d.getElementById(idTemplate);
        var $container = $template.content.querySelector(".".concat(article));
        var $title = $template.content.querySelector(".".concat(h2Template));
        var $img = $template.content.querySelector(".".concat(imgTemplate));
        var $cardContainer = d.getElementById(containerCard);
        //  recorriendo los archivos y asignandoles sus valores a los elementos , clonando el template y insertando al contenedor de las cartas
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var el = files_1[_i];
            $title.textContent = el.nameFile;
            $img.setAttribute("src", el.file[0]);
            $container.setAttribute("data-name", el.nameFile);
            var cloneTemplate = $template.content.cloneNode(true);
            fragment.append(cloneTemplate);
        }
        $cardContainer.appendChild(fragment);
    }
}

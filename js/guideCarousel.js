var d = document;
export function guideCarousel(_a) {
    var _b, _c, _d;
    var file = _a.file, fileName = _a.fileName, scrollGuideElement = _a.scrollGuideElement, btnGuide = _a.btnGuide, containerGuide = _a.containerGuide, guideTemplate = _a.guideTemplate;
    var templateName = guideTemplate.templateName, articleGuide = guideTemplate.articleGuide, imgGuide = guideTemplate.imgGuide;
    var left = btnGuide.left, right = btnGuide.right;
    var template = d.getElementById(templateName)
        .content;
    var fragment = d.createDocumentFragment();
    // añadiendo los elementos al DOM
    var $guide = d.getElementById(containerGuide);
    file.forEach(function (el, index) {
        var _a, _b, _c;
        (_a = template
            .querySelector(".".concat(imgGuide))) === null || _a === void 0 ? void 0 : _a.setAttribute("alt", "imagen numero ".concat(index, " de ").concat(fileName, " "));
        (_b = template.querySelector(".".concat(imgGuide))) === null || _b === void 0 ? void 0 : _b.setAttribute("src", el);
        (_c = template
            .querySelector(".".concat(articleGuide))) === null || _c === void 0 ? void 0 : _c.setAttribute("id", "img-guide-".concat(index));
        var clone = template.cloneNode(true);
        fragment.append(clone);
    });
    $guide === null || $guide === void 0 ? void 0 : $guide.append(fragment);
    (_b = $guide === null || $guide === void 0 ? void 0 : $guide.firstElementChild) === null || _b === void 0 ? void 0 : _b.classList.add("guidde-active");
    // añadiendo funciones a los botones dle scroll
    var $guideScroll = d.getElementById(scrollGuideElement);
    if ($guideScroll) {
        (_c = d.getElementById(left)) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
            $guideScroll.scrollLeft -= 500;
        });
        (_d = d.getElementById(right)) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
            $guideScroll.scrollLeft += 500;
        });
    }
}
// esta funcion se  importara en carousel en la parte del evento de los botones left y right
export function focusElement(positionElement, pastPosition) {
    var pastElment = d.getElementById("img-guide-".concat(pastPosition));
    var nowElement = d.getElementById("img-guide-".concat(positionElement));
    pastElment === null || pastElment === void 0 ? void 0 : pastElment.classList.remove("guidde-active");
    nowElement === null || nowElement === void 0 ? void 0 : nowElement.classList.add("guidde-active");
}
// eligiendo imagen en el contenedor de la guia de imagenes

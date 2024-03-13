var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { files, } from "./warehouse-declarations.js";
import { guideCarousel, focusElement } from "./guideCarousel.js";
var d = document;
// funcion de lo que se hara cuando se cargue los elemento  de carousel
function whenCarouselLoad(carousel, carouselContainerItem, file, nameFile, btnCarousel, guideContainerItem) {
    var _a, _b, _c;
    var btnClose = btnCarousel.btnClose, left = btnCarousel.left, right = btnCarousel.right;
    // verificacion de los elementos
    if (carousel &&
        carouselContainerItem &&
        file &&
        nameFile &&
        guideContainerItem) {
        var $carousel_1 = d.getElementById(carousel);
        var containerItems_1 = d.getElementById(carouselContainerItem);
        var imgSRCposition_1 = 0;
        // para activar el btn de cerral el carousel
        (_a = d.getElementById(btnClose)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            $carousel_1 === null || $carousel_1 === void 0 ? void 0 : $carousel_1.remove();
        });
        // actualizando el imgSRCposition segun a que le dimos click a los items de la guia del carousel de imagen
        var $guide = d.getElementById(guideContainerItem);
        $guide === null || $guide === void 0 ? void 0 : $guide.addEventListener("click", function (e) {
            var _a;
            if (e.target.matches(".img-item-guide")) {
                var idElement = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
                // past: guardamos el valor del imgSRCposition antes de modificarlo para quitarle el foco al elemento anterior
                var past = imgSRCposition_1;
                if (idElement)
                    imgSRCposition_1 = parseInt(idElement[(idElement === null || idElement === void 0 ? void 0 : idElement.length) - 1]);
                // funcion para quitar los componentess
                var removeImage = function () {
                    while (containerItems_1 === null || containerItems_1 === void 0 ? void 0 : containerItems_1.firstElementChild) {
                        containerItems_1.firstElementChild.remove();
                    }
                };
                // insertando elementos
                if (imgSRCposition_1 > past) {
                    removeImage();
                    createImage_1(imgSRCposition_1, "right");
                    createImage_1(past, "left");
                }
                if (imgSRCposition_1 < past) {
                    removeImage();
                    createImage_1(imgSRCposition_1, "left-reverse");
                    createImage_1(past, "right-reverse");
                }
                // actualisamos el focus de los elementos de la guia del carousel
                focusElement(imgSRCposition_1, past);
            }
        });
        //
        (_b = d.querySelector(".".concat(left))) === null || _b === void 0 ? void 0 : _b.classList.add("none");
        if (file.length === 1)
            (_c = d.querySelector(".".concat(right))) === null || _c === void 0 ? void 0 : _c.classList.add("none");
        // funcion para insertar elemento al DOM
        var createImage_1 = function (SRCposition, direction) {
            var ARTICLE = d.createElement("ARTICLE");
            ARTICLE.classList.add("carousel-item");
            ARTICLE.setAttribute("id", "img-".concat(SRCposition));
            ARTICLE.classList.add(direction);
            var IMG = d.createElement("IMG");
            IMG.classList.add("galery-img");
            IMG.setAttribute("alt", "imagen de ".concat(nameFile));
            if (file[SRCposition])
                IMG.setAttribute("src", file[SRCposition]);
            ARTICLE.append(IMG);
            containerItems_1 === null || containerItems_1 === void 0 ? void 0 : containerItems_1.append(ARTICLE);
        };
        createImage_1(imgSRCposition_1, "right");
        // botones
        $carousel_1 === null || $carousel_1 === void 0 ? void 0 : $carousel_1.addEventListener("click", function (e) {
            // btn left
            var _a, _b;
            if (e.target.matches(".".concat(left))) {
                // borrando los elementos  del carousel por cada click en los botones
                while (containerItems_1 === null || containerItems_1 === void 0 ? void 0 : containerItems_1.firstElementChild) {
                    containerItems_1.firstElementChild.remove();
                }
                // elegimos el boton y dependiendo si el siguiente elemento existe lo quitamos o lo removemos
                if (!file[imgSRCposition_1 - 2])
                    e.target.classList.add("none");
                (_a = d.querySelector(".".concat(right))) === null || _a === void 0 ? void 0 : _a.classList.remove("none");
                var past = imgSRCposition_1;
                // pasando al siguiente elemento
                imgSRCposition_1 = imgSRCposition_1 - 1;
                createImage_1(imgSRCposition_1, "left-reverse");
                createImage_1(imgSRCposition_1 + 1, "right-reverse");
                // exportado desde guidecarousel
                focusElement(imgSRCposition_1, past);
            }
            // btn right
            if (e.target.matches(".".concat(right))) {
                while (containerItems_1 === null || containerItems_1 === void 0 ? void 0 : containerItems_1.firstElementChild) {
                    containerItems_1.firstElementChild.remove();
                }
                if (!file[imgSRCposition_1 + 2])
                    e.target.classList.add("none");
                (_b = d.querySelector(".".concat(left))) === null || _b === void 0 ? void 0 : _b.classList.remove("none");
                var past = imgSRCposition_1;
                imgSRCposition_1 = imgSRCposition_1 + 1;
                createImage_1(imgSRCposition_1, "right");
                createImage_1(imgSRCposition_1 - 1, "left");
                focusElement(imgSRCposition_1, past);
            }
        });
        // llamamos a guide cpmponent para que se ejecute en la carga del componente carousel
        var guideTemplate = {
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
export default function carousel(_a) {
    var _this = this;
    var elementFather = _a.elementFather, cardContainer = _a.cardContainer, carousel = _a.carousel, urlCarousel = _a.urlCarousel, carouselContainerItem = _a.carouselContainerItem, cardsClass = _a.cardsClass, btnCarousel = _a.btnCarousel, guideContainerItem = _a.guideContainerItem;
    // referencia para eliminar el click del elemento
    var handlerClick = function (e) {
        e.stopPropagation();
        insertCarousel(e);
    };
    // funcion para insertar el carousel al DOM y acceder a la carpeta de las imagenes
    var insertCarousel = function (e) {
        var _a;
        var Target = e.currentTarget;
        // sacamos la carpeta que pertenese las imagenes
        var file = (_a = files.find(function (el) { return Target.dataset.name === el.nameFile; })) === null || _a === void 0 ? void 0 : _a.file;
        var callCarousel = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var res, _a, _b, _c, _d, p, error_1;
            var _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _j.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        res = _j.sent();
                        if (!res.ok) return [3 /*break*/, 6];
                        if (!(((_e = d.getElementById(elementFather)) === null || _e === void 0 ? void 0 : _e.children.length) === 1)) return [3 /*break*/, 5];
                        if (!((_f = d.getElementById(elementFather)) === null || _f === void 0)) return [3 /*break*/, 2];
                        _a = void 0;
                        return [3 /*break*/, 4];
                    case 2:
                        _c = (_b = _f).insertAdjacentHTML;
                        _d = ["beforeend"];
                        return [4 /*yield*/, res.text()];
                    case 3:
                        _a = _c.apply(_b, _d.concat([_j.sent()]));
                        _j.label = 4;
                    case 4:
                        _a;
                        whenCarouselLoad(carousel, carouselContainerItem, file, Target.dataset.name, btnCarousel, guideContainerItem);
                        _j.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        // en caso  de que haiga un error en encontrla la carpeta carousel
                        (_g = d.querySelector(".errorFetch-carousel")) === null || _g === void 0 ? void 0 : _g.remove();
                        p = d.createElement("P");
                        p.textContent = "Error de abril el carousel";
                        p.classList.add("errorFetch-carousel");
                        (_h = d.querySelector("body")) === null || _h === void 0 ? void 0 : _h.append(p);
                        _j.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _j.sent();
                        console.log(error_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        callCarousel(urlCarousel);
    };
    // aqui esta el fetch que llama a carousel
    if (cardContainer) {
        // guardamos la targeta en un arreglo
        var $cards = Array.from(d.getElementById(cardContainer).children);
        // comparamos si el elemento tiene que ser de la id especifica
        $cards = $cards.filter(function (el) { return el.classList.contains(cardsClass); });
        // exploramos las targetas para añadirle un evento a cada uno y activar el carousel
        if ($cards.length !== 0) {
            $cards.forEach(function (el) {
                el.addEventListener("click", function (e) { return handlerClick(e); });
            });
        }
        else {
            console.log("no hay elementos que mostral");
        }
    }
}

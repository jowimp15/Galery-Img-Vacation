//////////////////////////////////////////////////////////// Carpeta de las imageenss
var Files = /** @class */ (function () {
    function Files(nameFile, file) {
        this.nameFile = nameFile;
        this.file = file;
    }
    return Files;
}());
export var files = [
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
    var query;
    var queryDesktop = window.matchMedia("screen and (min-width: 500px)");
    if (window.innerWidth > 500)
        query = true;
    else
        query = false;
    queryDesktop.addEventListener("change", function (e) {
        if (e.matches) {
            query = true; /*excritorio */
        }
        else {
            query = false /*movile*/;
        }
    });
    console.log(query);
}
checkScreenSize();
/** */
// exportando variable comunicadoras

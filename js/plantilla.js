$("#menu").click((e) => {
    e.preventDefault();
    $("#lateral").toggle("ocultar-menu");

});

$("#nav > a").click((e) => {
    e.preventDefault();

    var navegador = $("nav > a");

    let x = 0;
    for (x = 0; x < navegador.length; x++) {

        if (navegador[x] != e.target) {
            var item = "#" + navegador[x].attributes["data-enlace"].value;
            if ($(item).hasClass("ocultar") == false) {
                $(item).addClass("ocultar");
            }
            if ($(navegador[x]).hasClass("color-white") == true) {
                $(navegador[x]).removeClass("color-white");
            }
        }
    }
    var enlace = e.target.attributes["data-enlace"].value;
    $("#" + enlace).toggleClass("ocultar");
    $(e.target).toggleClass("color-white");
    // console.log(e.target).toggle("color-white");
})

$("#nav .sub-item").click((e) => {
    e.preventDefault();

    var navegador = $("nav .sub-item");

    let x = 0;
    for (x = 0; x < navegador.length; x++) {

        if (navegador[x] != e.target) {
            var item = "#" + navegador[x].attributes["data-enlace"].value;
            if ($(item).hasClass("ocultar") == false) {
                $(item).addClass("ocultar");
            }
            if ($(navegador[x]).hasClass("color-white-sub-item ") == true) {
                $(navegador[x]).removeClass("color-white-sub-item ");
            }
        }
    }
    var enlace = e.target.attributes["data-enlace"].value;
    $("#" + enlace).toggleClass("ocultar");
    $(e.target).toggleClass("color-white-sub-item ");
});
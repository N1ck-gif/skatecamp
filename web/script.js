
$(document).ready(function () {
    $('.menu-itens-mobile').hide();
    $('.background-menu-itens').hide();
});
$(".icon-menu-mobile").click(function () {
    $('.menu-itens-mobile').slideToggle(300);
    $(".background-menu-itens").toggle();
});
$(".background-menu-itens").click(function () {
    $('.menu-itens-mobile').slideToggle(300);
    $(".background-menu-itens").toggle();
});
$(".link-mobile").click(function () {
    $('.menu-itens-mobile').slideToggle(300);
    $(".background-menu-itens").toggle();
});


// DOMContentLoaded - dispara o evento depois que o conteúdo está todo carregado na página
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflowY = 'hidden';
    let tl = new TimelineMax();

    tl.fromTo(
        ".bg-loader",
        1,
        { width: "100%" },
        { width: "0%", delay: 4, ease: Expo.easeinOut }
    );

    setTimeout(() => {
        document.body.style.overflowY = 'scroll';
    }, 4000)
});

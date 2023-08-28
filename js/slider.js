function slider() {
    $('.offers').slick({
        dots: true,
    });
}

if (document.documentElement.clientWidth < 769) {
    slider();
}
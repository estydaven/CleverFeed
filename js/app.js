// Hide/Show Login Popup
function showLoginPopup() {
    $('.popup_login').css('display', 'flex');
}
function closeLoginPopup() {
    $('.popup_login').css('display', 'none');
}

$('.hero__button').click(function () {
    showLoginPopup();
});
$('.popup__close_login').click(function () {
    closeLoginPopup();
});
$('.popup-form__link_registry').click(function () {
    showLoginPopup();
    closeRegistryPopup();
});

// Hide/Show Registry Popup
function showRegistryPopup() {
    $('.popup_registry').css('display', 'flex');
}
function closeRegistryPopup() {
    $('.popup_registry').css('display', 'none');
}

$('.popup-form__link_create').click(function () {
    showRegistryPopup();
    closeLoginPopup();
});
$('.popup__close_registry').click(function () {
    closeRegistryPopup();
});

function main() {
    $('.offers').slick({
        dots: true,
    });
}

if (document.documentElement.clientWidth < 769) {
    main();
}
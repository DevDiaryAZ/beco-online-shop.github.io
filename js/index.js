$('.logo-button__link').on('click', function (e) {
    e.preventDefault();
    $('.sidebar-container').toggleClass('sidebar-container_active');
    $('.main-container').toggleClass('main-container_active');
    $('.logo-button__img-burger').toggleClass('logo-button__img-burger_active');
    $('.logo-button__img-exit').toggleClass('logo-button__img-exit_active');
})

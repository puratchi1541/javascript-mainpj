


// accordian
$(document).ready(function() {
    $('.accordion-header').click(function() {
        if (!$(this).hasClass('active')) {
            $('.accordion-header')
                .removeClass('active')
                .find('span')
                .removeClass('fa-chevron-up')
                .addClass('fa-chevron-down');

            $('.accordion-content').slideUp(300);

            $(this).addClass('active');
            $(this).find('span')
                .removeClass('fa-chevron-down')
                .addClass('fa-chevron-up');
            $(this).next('.accordion-content').slideDown(300);
        } else {
            $(this).removeClass('active');
            $(this).find('span')
                .removeClass('fa-chevron-up')
                .addClass('fa-chevron-down');
            $(this).next('.accordion-content').slideUp(300);
        }
    });
});


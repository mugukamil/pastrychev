//=include lib/jquery.min.js
//=include lib/slick.min.js
$(function() {

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true
})

$('.news-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true
})

})

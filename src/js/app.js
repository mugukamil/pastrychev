//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/masonry.min.js

$(function() {

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true
})

$('.slider-six').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    // infinite: true
})

$('.slider-four').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
})

$(window).load(function(){

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 280,
      gutter: 20
    })
})

$('.catalog__filter-list').on('click', 'a', function(e) {
    e.preventDefault()
    var $this = $(this)

    if ($this.hasClass('down')) {
        $this.removeClass('down').addClass('up')
    } else if ($this.hasClass('up')) {
        $this.removeClass('up').addClass('down')
    } else {
        $this.addClass('up')
    }
})

})

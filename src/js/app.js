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
    })

    $('.slider-four').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
    })

    $('.product-slider__slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.product-slider__nav',
        draggable: false,
    });

    $('.product-slider__nav').slick({
        slidesToShow: 8,
        asNavFor: '.product-slider__slide',
        enterMode: false,
        focusOnSelect: true,
        infinite: false,
        prevArrow: false,
        nextArrow: false,
    });

    $(window).load(function(){
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 278,
            gutter: 20
      })
    })

    $('.catalog__filter-list').on('click', 'a', function(e) {
        e.preventDefault()
        var $this = $(this)

        if ($this.hasClass('down')) {
            $this.closest('.catalog__filter-list').find('a').removeClass('active up')
            $this.addClass('active')
            $this.removeClass('down').addClass('up')
        } else if ($this.hasClass('up')) {
            $this.closest('.catalog__filter-list').find('a').removeClass('active down')
            $this.addClass('active')
            $this.removeClass('up').addClass('down')
        } else {
            $this.closest('.catalog__filter-list').find('a').removeClass('active down up')
            $this.addClass('active')
            $this.addClass('down')
        }
    })

    $('.reviews__stars--form a').hover(function(e) {
        var $this = $(this)

        $this.closest('li').prevAll('li').find('a').addClass('active')
        $this.closest('li').nextAll('li').find('a').removeClass('active')
    }, function() {
        var $this = $(this)

        $this.closest('li').siblings('li').find('a').removeClass('active')
    })

    $('.form__label--radio').on('change', 'input', function(e) {
        var $this = $(this)

        $this.closest('.method').find('.form__content').hide()
        $this.closest('label').next('.form__content').show()
    })

    $('.order-form__next--1').click(function(e) {
        e.preventDefault()
        var $this = $(this)

        $this.hide()
        $this.closest('.order-form').find('.payment-method').show()
    })

    $('.order-form__next--2').click(function(e) {
        e.preventDefault()
        var $this = $(this)

        $this.hide()
        $this.closest('.order-form').find('.order-page__sum').show()
    })

})

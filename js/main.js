$(function () {

    // Left bar functions
    showLeftBar = () => {
        if (window.matchMedia('(min-width: 840px)').matches) {
            $(".left-container").toggle('display')
        } else {
            $(".left-container").toggle('display')
            $(".left-container").toggleClass('left-right-smallscreen');
            $(".left-arrow-container").toggleClass('left-arrow-smallscreen');

            $(".right-arrow-container").toggle('display')
            $(".top-arrow-container").toggle('display')
            $(".gallery").toggle('display')
        }
    };
    hideLeftArrowText = () => {
        $(".left-tooltip").css('display', 'none');
        if (window.matchMedia('(min-width: 840px)').matches) {
            $(".left-arrow-container").css("left", "25%");
        }
    }
    showLeftArrowText = () => {
        $(".left-tooltip").css('display', 'block');
        if (window.matchMedia('(min-width: 840px)').matches) {
            $(".left-arrow-container").css("left", "26%");
        }
    }


    // Right bar functions
    showRightBar = () => {
        if (window.matchMedia('(min-width: 840px)').matches) {
            $(".right-container").toggle('display')
        } else {
            $(".right-container").toggle('display')
            $(".right-container").toggleClass('left-right-smallscreen');
            $(".right-arrow-container").toggleClass('right-arrow-smallscreen');


            $(".left-arrow-container").toggle('display')
            $(".top-arrow-container").toggle('display')
            $(".gallery").toggle('display')
        }
    };
    hideRightArrowText = () => {
        $(".right-tooltip").css('display', 'none');

        if (window.matchMedia('(min-width: 840px)').matches) {
            $(".right-arrow-container").css("right", "25%");
        }
    }
    showRightArrowText = () => {
        $(".right-tooltip").css('display', 'block');

        if (window.matchMedia('(min-width: 840px)').matches) {
            $(".right-arrow-container").css("right", "26%");
        }
    }


    // top bar functions
    showTopBar = () => {
        if (window.matchMedia('(min-width: 840px)').matches) {
            $(".top-container").toggle('display')
        } else {
            $(".top-container").toggle('display')
            $(".top-container").toggleClass('top-smallscreen');

            $(".left-arrow-container").toggle('display')
            $(".right-arrow-container").toggle('display')
            $(".gallery").toggle('display')
        }
    };

    hideTopArrowText = () => {
        $(".top-tooltip").css('display', 'none');
        $(".top-arrow-container").css("top", "40%");
    }

    showTopArrowText = () => {
        $(".top-tooltip").css('display', 'block');
        $(".top-arrow-container").css('top', '42%');
    }


    $(".left-arrow").on("click", showLeftBar);
    $(".left-arrow").on("mouseover", hideLeftArrowText);
    $(".left-arrow").on("mouseout", showLeftArrowText);
    $(".right-arrow").on("click", showRightBar);
    $(".right-arrow").on("mouseover", hideRightArrowText);
    $(".right-arrow").on("mouseout", showRightArrowText);
    $(".top-arrow").on("click", showTopBar);
    $(".top-arrow").on("mouseover", hideTopArrowText);
    $(".top-arrow").on("mouseout", showTopArrowText);



    // move to gallery

    moveToGallery = () => {
        $('.wrapper').css('display', 'none');
        $('.slider-container').css('display', 'flex');
    }

    $('.gallery').on('click', moveToGallery);

    // move to main content

    moveToContent = () => {
        $('.slider-container').css('display', 'none');
        $('.wrapper').css('display', 'block');
    }

    $('#back').on('click', moveToContent);

    //slider

    nextImage = () => {
        const currentImg = $('.active');
        const nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
        if (nextImg.length === 0) {
            currentImg.removeClass('active').css('z-index', -10);
            $('.first').addClass('active').css('z-index', 10);
        }

    }

    prevImage = () => {
        const currentImg = $('.active');
        const prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    }

    $('#nextPicture').on('click', nextImage);
    $('#prevPicture').on('click', prevImage);


})
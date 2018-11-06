$(function () {
    
    const leftArrow = $(".left-arrow");
    const rightArrow = $(".right-arrow");
    
    // Left bar functions
    showLeftBar = () => {
        $(".left-container").toggle('display')
    };
    hideLeftArrowText = () => {
        $(".left-tooltip").css('display', 'none');
        $(".left-arrow-container").css("left", "25%");
    }
    showLeftArrowText = () => {
        $(".left-tooltip").css('display', 'block');
        $(".left-arrow-container").css("left", "26%");
    }
    

    // Right bar functions
    showRightBar = () => {
        $(".right-container").toggle('display')
    };
    hideRightArrowText = () => {
        $(".right-tooltip").css('display', 'none');
        $(".right-arrow-container").css("right", "25%");
    }
    showRightArrowText = () => {
        $(".right-tooltip").css('display', 'block');
        $(".right-arrow-container").css("right", "26%");
    }

    leftArrow.on("click", showLeftBar);
    leftArrow.on("mouseover", hideLeftArrowText);
    leftArrow.on("mouseout", showLeftArrowText);
    rightArrow.on("click", showRightBar);
    rightArrow.on("mouseover", hideRightArrowText);
    rightArrow.on("mouseout", showRightArrowText);

    // move to gallery

    moveToGallery = () => {
        $('.wrapper').css('display', 'none');
        $('.slider-container').css('display', 'block');
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
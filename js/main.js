$(function () {
    
    const leftArrow = $(".left-arrow");
    const rightArrow = $(".right-arrow");
    const rightBar = $(".right-container")
    
     showLeftBar = () => {
        $(".left-container").toggle('display')
    };
    showRightBar = () => {
        $(".right-container").toggle('display')
    };

    leftArrow.on("click", showLeftBar);
    rightArrow.on("click", showRightBar);

})
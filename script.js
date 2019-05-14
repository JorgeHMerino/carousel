(function() {
    var images = document.getElementsByClassName("image");
    var len = images.length;
    var current = 0;

    function moveImages() {
        images[current].classList.remove("onscreen");
        images[current].classList.add("exiting");

        images[current].addEventListener("transitionend", function fn(e) {
            e.target.classList.remove("exiting");
            e.target.removeEventListener("transitionend", fn);
        });

        current++;
        if (current >= len) {
            current = 0;
        }

        images[current].classList.add("onscreen");

        setTimeout(moveImages, 2000);
    }

    setTimeout(moveImages, 2000);
})();

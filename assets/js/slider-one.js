(function(slider){

    slider = {};

    // Elements
    slider.element    = document.querySelectorAll(".slider-one")[0];
    slider.list       = slider.element.children[0];
    slider.navigation = document.createElement('ol');

    console.log(slider.element);

    // Set widths
    slider.list.style.width = (slider.list.children.length * 100)+"%";

    // Move function
    function slideTo(event) {

        // Modify left value
        slider.list.style.left = "-"+(100 * this.dataset["for"])+"%";

        // Remove active state from siblings
        var i = slider.list.children.length;
        while (i--) { this.parentNode.children[i].className = "" }

        // Add active state to clicked
        this.className = "is-active";

    }

    // For each item in the slider
    for ( var i = 0; i < slider.list.children.length; i++ ) {

        // Set width of this item
        slider.list.children[i].style.width = (100 / slider.list.children.length)+"%";

        // Navigation: Create node and add event listener
        slider.navigation.appendChild(document.createElement('li'));
        slider.navigation.children[i].innerHTML = i+1;
        slider.navigation.children[i].dataset["for"] = i;
        slider.navigation.children[i].addEventListener("click", slideTo);

    }

    // Add classes
    slider.navigation.className = "navigation";
    slider.list.children[0].className = "is-active";
    slider.navigation.children[0].className = "is-active";

    // Append the navigation node
    slider.element.appendChild(slider.navigation);

})();
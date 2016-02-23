// modal overlay var

var modal_overlay = document.querySelector(".modal-overlay");


// write us var

var write_us_show = document.querySelector(".write-us-btn");
var write_us_show_2 = document.querySelector(".write-us-btn-2");
var write_us_popup = document.querySelector(".write-us"); 
var write_us_close = write_us_popup.querySelector(".write-us-close");


//popup map var 

var map_show = document.querySelector(".map-show");
var map_popup = document.querySelector(".popup-map");
var map_close = map_popup.querySelector(".map-close");


// write us events

write_us_show_2.addEventListener("click", function(event)
    {
        event.preventDefault();
        write_us_popup.classList.add("popup-show");
        modal_overlay.classList.add("modal-overlay-show");
    });

write_us_close.addEventListener("click", function(event)
    {
        event.preventDefault();
        write_us_popup.classList.remove("popup-show");
        modal_overlay.classList.remove("modal-overlay-show");
    });

window.addEventListener("keydown", function(event)
    {
        if (event.keyCode === 27) {
            if (write_us_popup.classList.contains("popup-show")) {
                write_us_popup.classList.remove("popup-show");
                modal_overlay.classList.remove("modal-overlay-show");
            }
        }
    });

write_us_show.addEventListener("click", function(event)
    {
        event.preventDefault();
        write_us_popup.classList.add("popup-show");
        modal_overlay.classList.add("modal-overlay-show");
    });


// map events 

map_show.addEventListener("click", function(event)
    {
        event.preventDefault();
        map_popup.classList.add("popup-show");
        modal_overlay.classList.add("modal-overlay-show");
    });

map_close.addEventListener("click", function(event)
    {
        event.preventDefault();
        map_popup.classList.remove("popup-show");
        modal_overlay.classList.remove("modal-overlay-show");
    });

window.addEventListener("keydown", function(event)
    {
        if (event.keyCode === 27) {
            if (map_popup.classList.contains("popup-show")) {
                map_popup.classList.remove("popup-show");
                modal_overlay.classList.remove("modal-overlay-show");
            }
        }
    });
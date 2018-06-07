// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
// function throttle(func, wait, options) {
// var context, args, result;
// var timeout = null;
// var previous = 0;
// if (!options) options = {};
// var later = function() {
//     previous = options.leading === false ? 0 : Date.now();
//     timeout = null;
//     result = func.apply(context, args);
//     if (!timeout) context = args = null;
// };
// return function() {
//     var now = Date.now();
//     if (!previous && options.leading === false) previous = now;
//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;
//     if (remaining <= 0 || remaining > wait) {
//     if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//     }
//     previous = now;
//     result = func.apply(context, args);
//     if (!timeout) context = args = null;
//     } else if (!timeout && options.trailing !== false) {
//     timeout = setTimeout(later, remaining);
//     }
//     return result;
// };
// };

// window.addEventListener("scroll", throttle(function(){
//     if(scrollY >= 150){
//         console.log('remove arrow');
//     }else{

//     }
// }, 300, false));

AOS.init();

// var tilt = $('.section').tilt({
//     maxTilt: 5,
//     easing: "cubic-bezier(.03,.98,.52,.99)"
// });

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var imgs = document.getElementsByClassName("section");

var viewers = [];

var viewerOptions = {
    // toolbar: false,
    // navbar: false
}

for(var i = 0; i < imgs.length; i++){
    viewers[i] = new Viewer(imgs[i], viewerOptions);
}

var scrollDownIndicator = $(".scroll-down");

function onScroll(){
    if(window.scrollY > 140){
        if(!scrollDownIndicator.hasClass("unactive"))
            scrollDownIndicator.addClass("unactive");
    }else{
        if(scrollDownIndicator.hasClass("unactive"))
            scrollDownIndicator.removeClass("unactive");
    }
}

var onScrollDebounced = debounce(onScroll, 100);

window.addEventListener("scroll", onScrollDebounced);
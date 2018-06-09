var gallery = document.getElementsByClassName("gallery")[0];

imagesLoaded(gallery, function(){
    $(gallery).masonry({
        itemSelector: '.gallery-item'
    });
});

var viewer = new Viewer(gallery, {
    url(image) {
        return image.src.replace('w=200', 'w=1000');
    },
});
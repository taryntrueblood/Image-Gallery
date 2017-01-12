$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$('.container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    },
    titleSrc: 'title',
    
});


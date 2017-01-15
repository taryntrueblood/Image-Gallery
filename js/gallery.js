$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$('.container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    },
    titleSrc: 'title'
   
});



$("#filter").keyup(function () {
    var filter = $(this).val(), count = 0;
    $(".filtered:first li").each(function () {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).addClass("hidden");
        } else {
            $(this).removeClass("hidden");
            count++;
        }
    });
    $("#filter-count").text(count);
});


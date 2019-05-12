$(document).ready(function(){
    $("#pagination").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



  $(".pagination__link").click(function(e) {
    e.preventDefault();
    $(".pagination__link").removeClass('active');
    $(this).addClass('active');
  })


});

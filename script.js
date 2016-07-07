$(function(){
  $('a[href^="#"]').click(function(e){
    
    var target = $(this).attr('href');
    var strip = target.slice(1);
                                  //var hjh = $(this.hash);
    var anchor = $("section[id='" + strip + "']");
    
    e.preventDefault(); //zapobiega przeładowaniu
    
    $('html, body').animate({
      
      scrollTop: anchor.offset().top
      
    }, 'slow');
    
  });
});

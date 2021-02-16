
$(function(){
    $(".div").dblclick(function redimensionarDiv(){
        var finalWidth = '250px';
        var finalHeight = '250px';
        if($(this).css('width')=='250px') {
            finalWidth = '800px';
            finalHeight = '70px';
        }
        $(".div").animate({width: finalWidth, height: finalHeight});
    });
});
$(function(){
    $("td").hover(function colorTD(){
        $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "white");
    });
});
$(function(){
    $(".text1").focus(changeFocus);
    $(".text2").focus(changeFocus);
    $(".text1").blur(blurFocus);
    $(".text2").blur(blurFocus);
})
function changeFocus() {
  
  $(this).css("color", "#f00");
} 
function blurFocus() {
  
    $(this).css("color", "#000");
  };
  $( function() {
    $( "a" ).tooltip();
  } );
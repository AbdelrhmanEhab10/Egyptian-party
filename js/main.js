$('.openBtn').click(function () {
if ($('.list ul').css('marginLeft') == '-250px') 
{
    $('.list ul').css('marginLeft' , '0px')
} 
else 
{
    $('.list ul').css('marginLeft' , '-250px')        
}     
}) 
$('.list span').click(function () 
{
    $('.list ul').css('marginLeft' , '-250px')
})

$('.singer1').click(function () 
{
    $('.info1').slideToggle(1000)
    $('.info2').slideUp(1000);
    $('.info3').slideUp(1000);
    $('.info4').slideUp(1000);
})
$('.singer2').click(function () 
{
    $('.info2').slideToggle(1000)
    $('.info1').slideUp(1000);
    $('.info3').slideUp(1000);
    $('.info4').slideUp(1000);

})
$('.singer3').click(function () 
{
    $('.info3').slideToggle(1000)
    $('.info1').slideUp(1000);
    $('.info2').slideUp(1000);
    $('.info4').slideUp(1000);
})
$('.singer4').click(function () 
{
    $('.info4').slideToggle(1000)
    $('.info1').slideUp(1000);
    $('.info2').slideUp(1000);
    $('.info3').slideUp(1000);

})
let countDownDate = new Date("Jun 27, 2022 00:00:01").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();    
  let distance = countDownDate - now;    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);    
  document.querySelector(".day").innerHTML = days + "d ";
  document.querySelector('.hour').innerHTML= + hours + "h "; 
  document.querySelector('.minute').innerHTML = minutes + "m " 
  document.querySelector('.second').innerHTML= seconds + "s ";    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $(".char").text("your available character finished");
        } else {
            $(".char").text(character);
        }
    });
});

    let detailOffset = $('#details').offset().top;
    $(window).scroll(function () 
    {
        let wScroll = $(window).scrollTop();
        if (wScroll > detailOffset - 50 ) {
            
            $('.openBtn').fadeOut(200)
        } else {
            $('.openBtn').fadeIn(200)           
        }
        
    })

    $('nav a').click(function (e) 
    {
       let linkHref =  $(e.target).attr('href');
       let sectionOffset = $(linkHref).offset().top
       $('html , body').animate({scrollTop:sectionOffset},1000)
        
    })









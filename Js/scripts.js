
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://github.com/Matrixg45/jquery-smooth-scroll/blob/master/jquery.smooth-scroll.min.js"></script>
<script>
$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    
    return false;
});
</script>

$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('.main-nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.main-nav').removeClass('navbar-fixed');
    }
  });
});
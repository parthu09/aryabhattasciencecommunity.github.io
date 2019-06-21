AOS.init();
$('#myCarousel').carousel({
    interval: 3000,
    cycle: true
  }); 
  $(document).ready(function() {
    $(".flip-init").on('click', function() {
       let card = $(this).parent().parent();
       card.css("transform", "rotateY(180deg)");
       setTimeout(() => {
         card.children('.back').removeClass('d-none');
         card.children('.front').addClass('d-none');
       }, 150);
    });
    $(".flip-close").on('click', function() {
      let card = $(this).parent().parent();
      card.css("transform", "rotateY(360deg)");
      setTimeout(() => {
        card.children('.front').removeClass('d-none');
        card.children('.back').addClass('d-none');
      }, 150);
   });
 });  
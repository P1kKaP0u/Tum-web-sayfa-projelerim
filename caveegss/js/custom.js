$(document).ready(function () {
  $(window).scroll(function () {
    console.log("Çalıştı...");
    var mesafe = $(window).scrollTop();
    //console.log(mesafe);
    if (mesafe > 150) {
      /*console.log(mesafe);
      console.log("Hopppp");*/
      $(".yukari_cik").fadeIn();
    } else {
      $(".yukari_cik").fadeOut();
    }
  });
  $(".yukari_cik").click(function () {
    $("html").animate({
      scrollTop: 0,
    });
  });
});

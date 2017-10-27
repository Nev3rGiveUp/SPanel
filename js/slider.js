//On load
$(document).ready(function() {
  $(".slide img").each(function() {
    if ($(this).hasClass("1")) {
      $(this).addClass("active");
    }
  });
  $(".caption").animate({
    bottom: "0px"
  }, 500);
});

var slides = 1;
var a = 0;
setInterval(function() {
  if (a == 0) {
    a++;
  } else {
    if (a <= slides) {
      a++;
      nextSlide("Иновативен дизайн.", "Уникално лесният и практичен дизайн на SPanel ви помагат да работите по-лесно", a);
    } else {
      a = 1;
      nextSlide("Иновативен дизайн.", "Уникално лесният и практичен дизайн на SPanel ви помагат да работите по-лесно", a);
    }
  }
}, 5000);

function captionIn() {
  $(".caption").animate({
    bottom: "0px"
  }, 200);
}

function captionOut() {
  $(".caption").animate({
    bottom: "-250px"
  }, 200);
}

function nextSlide(title, body, imageclass) {
  $(".caption").animate({
    bottom: "-250px"
  }, 200, function() {
    $(".slide img").each(function() {
      $(this).removeClass("active");
      $(this).css("opacity", "0");
    });
    $(".caption .title").html(title);
    $(".caption .body").html(body);
    $(".slide img." + imageclass).animate({
      opacity: 1
    }, 500, function() {
      $(".caption").animate({
        bottom: "0px"
      }, 200);
    });
    $(".slide img." + imageclass).addClass("active");
  });
}

//controll what buy buttons on the main page do (plans)

//BASIC PLAN
$(".buy-basic").click(function() {
  window.location.href = "order/basic";
});

//PLUS PLAN
$(".buy-plus").click(function() {
  window.location.href = "order/plus";
});

//PRO PLAN
$(".buy-pro").click(function() {
  window.location.href = "order/pro";
});

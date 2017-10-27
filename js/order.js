//triggered when the select tag gets its value changed
$(".select-plan").change(function() {
  UpdatePlanPrice();
  UpdatePlanDurationPrice();
});

//update price per month
function UpdatePlanPrice(plan) {
  switch(parseInt($(".select-plan").val())){
    case 1:
      $(".plan-price").html("Безплатен")
      break;
    case 2:
      $(".plan-price").html("8,99 BGN / месец")
      break;
    case 3:
      $(".plan-price").html("13,99 BGN / месец")
      break;
  }
}
//update on load
UpdatePlanPrice();


//triggered when the select tag gets its value changed
$(".select-duration").change(function() {
  UpdatePlanDurationPrice();
});

//update price per month
function UpdatePlanDurationPrice(plan) {
  //get plan price
  var price = 0;
  var originalprice = 0;
  switch(parseInt($(".select-plan").val())){
    case 2:
      price = 8.99;
      break;
    case 3:
      price = 13.99;
      break;
  }

  switch(parseInt($(".select-duration").val())){
    case 1:
      $(".duration-price").html(price + " BGN")
      break;
    case 2:
      price *= 2;
      price = roundToTwo(price);
      $(".duration-price").html(price + " BGN")
      break;
    case 3:
      price *= 3;
      price = roundToTwo(price);
      $(".duration-price").html(price + " BGN")
      break;
    case 4:
      price *= 6;
      price = roundToTwo(price);
      $(".duration-price").html(6 * price + " BGN")
      break;
    case 5:
      price *= 12;
      originalprice = price;
      price *= 0.85;
      price = roundToTwo(price);
      $(".duration-price").html(price + " BGN (Спестявате " + roundToTwo(originalprice - price) + " BGN)")
      break;
    case 6:
      price *= 24;
      originalprice = price;
      price *= 0.8;
      price = roundToTwo(price);
      $(".duration-price").html(price + " BGN (Спестявате " + roundToTwo(originalprice - price) + " BGN)")
      break;
  }
}
//update on load
UpdatePlanDurationPrice();


function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

$(".plan-first").hover(function () {
    $(this).css("height","500px");
    $(this).css("width","325px");
    $(this).css("margin-top","3%");
    $(this).css("box-shadow","1px 1px 20px 1px black");
    $(this).css("transition","0.5s");
    $(this).css("z-index","20");
    $(".plan-second").css("height","450px");
    $(".plan-second").css("width","300px");
    $(".plan-second").css("margin-top","5%");
    $(".plan-second").css("transition","0.5s");
    $(".plan-second").css("box-shadow","none");
    $(".plan-second").css("z-index","0");
    $(".plan-thirth").css("height","450px");
    $(".plan-thirth").css("width","300px");
    $(".plan-thirth").css("margin-top","5%");
    $(".plan-thirth").css("transition","0.5s");
    $(".plan-thirth").css("box-shadow","none");
    $(".plan-thirth").css("z-index","0");
});

$(".plan-second").hover(function () {
    $(this).css("height","500px");
    $(this).css("width","325px");
    $(this).css("margin-top","3%");
    $(this).css("z-index","10");
    $(this).css("transition","0.5s");
    $(this).css("box-shadow","1px 1px 20px 1px black");
    $(".plan-first").css("height","450px");
    $(".plan-first").css("width","300px");
    $(".plan-first").css("z-index","0");
    $(".plan-first").css("margin-top","5%");
    $(".plan-first").css("transition","0.5s");
    $(".plan-first").css("box-shadow","none");
    $(".plan-thirth").css("height","450px");
    $(".plan-thirth").css("width","300px");
    $(".plan-thirth").css("margin-top","5%");
    $(".plan-thirth").css("transition","0.5s");
    $(".plan-thirth").css("box-shadow","none");
    $(".plan-thirth").css("z-index","0");
});


$(".plan-thirth").hover(function () {
    $(this).css("height","500px");
    $(this).css("width","325px");
    $(this).css("margin-top","3%");
    $(this).css("z-index","10");
    $(this).css("transition","0.5s");
    $(this).css("box-shadow","1px 1px 20px 1px black");
    $(".plan-first").css("height","450px");
    $(".plan-first").css("width","300px");
    $(".plan-first").css("margin-top","5%");
    $(".plan-first").css("transition","0.5s");
    $(".plan-first").css("box-shadow","none");
    $(".plan-first").css("z-index","0");
    $(".plan-second").css("height","450px");
    $(".plan-second").css("width","300px");
    $(".plan-second").css("margin-top","5%");
    $(".plan-second").css("transition","0.5s");
    $(".plan-second").css("box-shadow","none");
    $(".plan-second").css("z-index","0");
});

$(".first-input").hover(function () {
   $(this).css("background-color","#cc0000");
   $(this).css("transition","0.5s");

})
$(".first-input").mouseout(function () {
   $(this).css("background-color","#FF0000");
   $(this).css("transition","0.5s");

})

<?php
  require_once 'classes/AllClasses.php';
  $plan = strtolower($_GET["product"]);

  //wrong plan name, redirect to 404 page
  if($plan != "basic" && $plan != "plus" && $plan != "pro"){
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
    $configs->getErrorPage();
    exit();
  }
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>sPanel.bg | Поръчка на план <?php echo ucfirst($plan); ?></title>
    <script src="../js/jquery.js"></script>
    <link rel="stylesheet" href="../css/order.css">
    <link rel="stylesheet" type="text/css" href="//cloud.typography.com/746852/739588/css/fonts.css" />
    <link rel="stylesheet" href="../css/font-awesome.min.css">
  </head>
  <body>
    <div class="head">
      <button class="btn back"><i class="fa fa-arrow-left" aria-hidden="true"></i> Върни се</button>
      <h1 class="logo">SPanel</h1>
    </div>

    <form class="order">
      <h2 class="step">Избор на план</h2>
      <span class="plan label">Избор на план</span>
      <select class="plan select-plan" name="plan">
        <option value="1" <?php if($plan == "basic") echo 'selected="selected"'; ?>>SPanel Basic</option>
        <option value="2" <?php if($plan == "plus") echo 'selected="selected"'; ?>>SPanel Plus</option>
        <option value="3" <?php if($plan == "pro") echo 'selected="selected"'; ?>>SPanel Pro</option>
      </select>
      <span class="plan-price">14.99 BGN</span>

      <br> <!-- TEMPORARY!!! REMOVE AFTER OVERALL LAYOUT IS DONE -->

      <span class="label-duration">Период</span>
      <select class="plan select-duration" name="plan">
        <option value="1">1 месец</option>
        <option value="2">2 месеца</option>
        <option value="3">3 месеца</option>
        <option value="4">6 месеца</option>
        <option value="5">12 месеца (-15%)</option>
        <option value="6">24 месеца (-20%)</option>
      </select>
      <span class="duration-price">? BGN</span>



    </form>
    <script src="../js/order.js"></script>
  </body>
</html>

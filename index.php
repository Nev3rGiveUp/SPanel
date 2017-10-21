<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>SPanel - Училищен софтуер за следене на учебният процес.</title>
    <script src="js/jquery.js"></script>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>

    <nav class="main">
      <ul>
        <li><a href="#">Начало</a></li>
        <li><a href="#">Планове</a></li>
        <li><a href="#">Контакти</a></li>
        <li><a href="#">Документация</a></li>
      </ul>
    </nav>

    <div class="slides">
      <div class="slide">
        <img class="bg 1" src="img/sample.png" alt="">
        <img class="bg 2" src="http://via.placeholder.com/1920x1080?text=Slide1" alt="">
        <div class="caption">
          <span class="title">Безплатен план.</li>
          <span class="body">Не искаме да плащате за нещо, което няма да пасне на нуждите ви.</li>
        </div>
      </div>
    </div>

    <div class="plans">
      <div class="plan plan1">
        <div class="title">
          SPanel Basic
        </div>
        <div class="price">
          0,00лв.
        </div>
        <ul class="features">
          <li class="feature">до 400 ученици</li>
          <li class="feature x">До 2 администратора</li>
          <li class="feature x">Реклами</li>
          <li class="feature x">Забранен Adblock</li>
          <li class="feature x">Без изпити</li>
          <li class="feature x">Задължително брандиране</li>

        </ul>
        <button class="buy buy-basic" type="button">Безплатен</button>
      </div>
      <div class="plan plan2">
        <div class="title">
          SPanel Plus
        </div>
        <div class="price">
          8,99лв. / месец
        </div>
        <ul class="features">
          <li class="feature">Неограничен брой ученици</li>
          <li class="feature">До 10 администратора</li>
          <li class="feature x">Реклами</li>
          <li class="feature">Разрешен Adblock</li>
          <li class="feature">До 10 изпита / месец</li>
          <li class="feature">Частично брандиране</li>

        </ul>
        <button class="buy buy-plus" type="button">Поръчай</button>
      </div>
      <div class="plan plan3">
        <div class="title">
          SPanel Pro
        </div>
        <div class="price">
          13,99лв. / месец
        </div>
        <ul class="features">
          <li class="feature">Неограничен брой ученици</li>
          <li class="feature">Неограничен брой</li>
          <li class="feature">Без реклами</li>
          <li class="feature">Adblock не е нужен</li>
          <li class="feature">Неограничен брой изпити</li>
          <li class="feature">Без брандиране</li>
          
        </ul>
        <button class="buy buy-pro" type="button">Поръчай</button>
      </div>
    </div>

    <script src="js/slider.js"></script>
  </body>
</html>

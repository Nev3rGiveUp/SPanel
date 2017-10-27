<?php
  class Configs {
    function get() {
      require_once "../config.php";
    }

    function getErrorPage() {
      include("404.html");
    }
  }
  $configs = new Configs;
?>

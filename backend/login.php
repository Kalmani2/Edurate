<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST");
  header("Access-Control-Allow-Headers: Content-Type");

  // Load the configuration file containing your database credentials
  require_once('config.inc.php');
  require_once('database_script.php');

  // Connect to the group database
  $conn = new mysqli($database_host, $database_user, $database_pass, $group_dbnames[0]);

  // Check for errors before doing anything else
  if($conn -> connect_error) {
      die('Connect Error ('.$conn -> connect_errno.') '.$dbx_connect -> connect_error);
  }
  else{
    $json = file_get_contents('php://input');//get data from request body as json
    $data = json_decode($json, true);

    $login = $data['login'];
    $password = $data['password'];

    $userDetails = getUser($login); //get data from database using unique login
    if(empty($userDetails))//check user with that login exists
    {
      echo("Invalid username")
    }else{
      if(password_verify($password, $userDetails['passowrd'])){
        echo("login successful")
      }else {
        echo("invalid password")
      }
    }
  }
 ?>

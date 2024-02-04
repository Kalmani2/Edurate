<?php

  // Load the configuration file containing your database credentials
  require_once('config.inc.php');

  // Connect to the group database
  $conn = new mysqli($database_host, $database_user, $database_pass, $group_dbnames[0]);

  // Check for errors before doing anything else
  if($conn -> connect_error) {
      die('Connect Error ('.$conn -> connect_errno.') '.$dbx_connect -> connect_error);
  }


  function AddUser()
  {
    $first_name = "first_name"; //will need to get from front
    $last_name = "last_name"; //will need to get from front
    $password = "password";
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO Users (first_name, last_name, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $first_name, $last_name, $hashed_password);

    if($stmt->execute()){
      echo "User added";
    }else{
      echo "Error: " . $stmt->error;
    }

    $stmt->close();    
  }

?>

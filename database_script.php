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

  function AddLecturerReview()
  {
    $user_id = "user_id"; //will need to get from front
    $lecturer_id = "lecturer_id";
    $rating = "rating";
    $review_text = "";

    $sql = "INSERT INTO LecturerReviews (user_id, lecturer_id, rating, review_text) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $user_id, $lecturer_id, $rating, $review_text);

    if($stmt->execute()){
      echo "Lecturer Review added";
    }else{
      echo "Error: " . $stmt->error;
    }

    $stmt->close();
  }

  function AddCourseReview()
  {
    $user_id = "user_id"; //will need to get from front
    $course_id = "course_id";
    $rating = "rating";
    $review_text = "";

    $sql = "INSERT INTO CourseReviews (user_id, course_id, rating, review_text) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $user_id, $course_id, $rating, $review_text);

    if($stmt->execute()){
      echo "Course Review added";
    }else{
      echo "Error: " . $stmt->error;
    }

    $stmt->close();
  }

?>

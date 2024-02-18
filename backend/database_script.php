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
    $forename = "forename"; //will need to get from front
    $surname = "surname"; //will need to get from front
    $password = "password";
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO Users (forename, surname, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $forename, $surname, $hashed_password);

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


    function getUser($id)
    {
      $sql = "SELECT forename, surname, password FROM user
              WHERE  userId = :id";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      while ($row = $stmt->fetch())//print to front end
      {
        echo("<br>" . $row['forename'] . " " . $row['surname'] . " " . $row['password']);
      }
    }

    function getLecturerReviews($id)
    {
      $sql = "SELECT rating, review_text FROM LecturerReviews
              WHERE  lecturer_id = :id";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      while ($row = $stmt->fetch())//print to front end
      {
        echo("<br>" . $row['rating'] . " " . $row['review_text']);
      }
    }

    function getCourseReviews($id)
    {
      $sql = "SELECT rating, review_text FROM CourseReviews
              WHERE  course_id = :id";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      while ($row = $stmt->fetch())//print to front end
      {
        echo("<br>" . $row['rating'] . " " . $row['review_text']);
      }
    }

    function getUserReviews($id)
    {
      $sql = "SELECT rating, review_text FROM LecturerReviews, CourseReviews
              WHERE  user_id = :id";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      while ($row = $stmt->fetch())//print to front end
      {
        echo("<br>" . $row['rating'] . " " . $row['review_text']);
      }
    }

?>

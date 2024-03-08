<?php

  // Load the configuration file containing your database credentials
  require_once('config.inc.php');

  // Connect to the group database
  $conn = new mysqli($database_host, $database_user, $database_pass, $group_dbnames[0]);

  // Check for errors before doing anything else
  if($conn -> connect_error) {
      die('Connect Error ('.$conn -> connect_errno.') '.$dbx_connect -> connect_error);
  }


  function AddUser($data)
  {
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);//might not need password if using authentication

    $sql = "INSERT INTO Users (forename, surname, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $data['forename'], $data['surname'], $hashed_password);

    if($stmt->execute()){
      echo "User added";
    }else{
      echo "Error: " . $stmt->error;
    }

    $stmt->close();
  }

  function AddLecturerReview($data)
  {

    $sql = "INSERT INTO LecturerReviews (user_id, lecturer_id, rating, review_text) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $data['user_id'], $data['lecturer_id'], $data['rating'], $data['review_text']);

    if($stmt->execute()){
      echo "Lecturer Review added";
    }else{
      echo "Error: " . $stmt->error;
    }

    $stmt->close();
  }

  function AddCourseReview()
  {

    $sql = "INSERT INTO CourseReviews (user_id, course_id, rating, review_text) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $data['user_id'], $data['course_id'], $data['rating'], $data['review_text']);

    if($stmt->execute()){
      echo "Course Review added";
    }else{
      echo "Error: " . $stmt->error;
    }

    $stmt->close();


    function getUser($id)
    {
      $sql = "SELECT forename, surname, `password` FROM user
              WHERE  userId = :id";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      echo("<br>" . $row['forename'] . " " . $row['surname'] . " " . $row['password']);
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
      $output = array();
      while ($row = $stmt->fetch())//print to front end
      {
        array_push($output, $row);
      }
      echo json_encode($output);
    }

    function getLecturerReviewsByRatingDescending($id)
    {
      $sql = "SELECT rating, review_text FROM LecturerReviews
              WHERE  lecturer_id = :id
              ORDER BY rating DESC";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $output = array();
      while ($row = $stmt->fetch())//print to front end
      {
        array_push($output, $row);
      }
      echo json_encode($output);
    }

    function getLecturerReviewsByRatingAscending($id)
    {
      $sql = "SELECT rating, review_text FROM LecturerReviews
              WHERE  lecturer_id = :id
              ORDER BY rating ASC";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $output = array();
      while ($row = $stmt->fetch())//print to front end
      {
        array_push($output, $row);
      }
      echo json_encode($output);
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
      $output = array();
      while ($row = $stmt->fetch())//print to front end
      {
        array_push($output, $row);
      }
      echo json_encode($output);
    }

    function getCourseReviewsByRatingDescending($id)
    {
      $sql = "SELECT rating, review_text FROM CourseReviews
              WHERE  course_id = :id
              ORDER BY rating DESC";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $output = array();
      while ($row = $stmt->fetch())//print to front end
      {
        array_push($output, $row);
      }
      echo json_encode($output);
    }

    function getCourseReviewsByRatingAscending($id)
    {
      $sql = "SELECT rating, review_text FROM CourseReviews
              WHERE  course_id = :id
              ORDER BY rating ASC";
      $stmt = $conn->prepare($sql);
      $stmt->execute([
                    'id' => $id
                    ]);
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $output = array();
      while ($row = $stmt->fetch())//print to front end
      {
        array_push($output, $row);
      }
      echo json_encode($output);
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
      $output = array();
      while ($row = $stmt->fetch())//print to front end
      {
        array_push($output, $row);
      }
      echo json_encode($output);
    }

?>
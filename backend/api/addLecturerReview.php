<?php

include_once 'database_script.php';

header('Content-Type: application/json');

$fetchedData = file_get_contents('php://input');

$data = json_decode($fetchedData, true);

AddLecturerReview($data); //edit the function so it actually works

$response = [
    "fetch status" => "fetch was excecuted",
];

// could add error message


echo json_encode($response);

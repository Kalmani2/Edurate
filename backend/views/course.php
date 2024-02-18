<?php

include_once 'database_script.php';

header('Content-Type: application/json');

$fetchedData = file_get_contents('php://input');

$data = json_decode($fetchedData, true);



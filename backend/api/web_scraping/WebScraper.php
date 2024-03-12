<?php

require_once 'GoogleSearch.php';
$data = json_decode(file_get_contents('php://input'), true);

$subject = $data['query'];
$degree_classification = $data['degree_classification'];

$query = "+$subject +$degree_classification University of Manchester"; //makes sure google includes both words

$url = google_search($query);
<?php

function google_search($query){
    $url = "https://www.google.com/search?q=" . $query;

    $curl_handle = curl_init();

    curl_setopt($curl_handle, CURLOPT_URL, $url);
    //return the transfer as a string instead of displaying it
    curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($curl_handle);
    curl_close($curl_handle);

    $data = json_decode($response, true);
    return $data;
}
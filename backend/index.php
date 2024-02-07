<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/views/home.php';
        break;
    case '/about' :
        require __DIR__ . '/views/lecturers.php';
        break;
    // ... handle other routes
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}
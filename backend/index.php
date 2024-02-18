<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/review_course' :
        require __DIR__ . '/api/course.php';
        break;
    case '/about' :
        require __DIR__ . '/api/lecturers.php';
        break;
    // ... handle other routes
    default:
        http_response_code(404);
        require __DIR__ . '/api/404.php';
        break;
}
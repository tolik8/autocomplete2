<?php

if (!isset($_GET['query'])) {
    exit('Error! Parameter "query" not found');
}

$query = $_GET['query'];
$skills = require 'data.php';
$res['suggestions'] = [];

foreach ($skills as $key => $value) {
    if (stripos($value, $query) !== false) {
        $res['suggestions'][] = ['data' => $key, 'value' => $value];
    }
}

header('Content-Type: application/json');
echo json_encode($res);

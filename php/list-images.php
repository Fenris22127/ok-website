<?php
$dir = "../content/img/home/";
$images = array_filter(scandir($dir), function($file) {
    return preg_match('/\.(jpe?g|png|gif)$/i', $file);
});
echo json_encode(array_values($images));
?>
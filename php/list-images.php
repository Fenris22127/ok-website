<!-- Gets all images for the image slider from the folder content/img/home -->
<?php
header('Content-Type: application/json; charset=utf-8');
setlocale(LC_ALL, 'de_DE.UTF-8');

$dir = "../content/img/home/";
$images = array_filter(scandir($dir), function($file) {
    return preg_match('/\.(jpe?g|png|gif)$/i', $file);
});
echo json_encode(array_values($images));
?>
<!-- Gets an image by name from a passed directory -->
<?php
header('Content-Type: application/json; charset=utf-8');
setlocale(LC_ALL, 'de_DE.UTF-8');

function findImageByName($directory, $baseName) {
    $extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
    if (!is_dir($directory)) return false;

    $files = scandir($directory);
    foreach ($files as $file) {
        $info = pathinfo($file);
        if (isset($info['filename'], $info['extension']) &&
            strcasecmp($info['filename'], $baseName) === 0 &&
            in_array(strtolower($info['extension']), $extensions)) {

            return $directory . DIRECTORY_SEPARATOR . $file;
        }
    }
    return false;
}

// Get image base name from query string
$baseName = $_GET['name'] ?? '';
$directory = $_GET['dir'] ?? '';

$imagePath = findImageByName($directory, $baseName);

if ($imagePath) {
    // Convert absolute path to web path
    $webPath = str_replace($_SERVER['DOCUMENT_ROOT'], '', $imagePath);
    echo json_encode(['path' => $webPath]);
} else {
    echo json_encode(['path' => null]);
}
?>
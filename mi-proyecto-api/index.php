<?php

// URL de la API de Spotify
$apiURL = 'https://api.spotify.com/v1/';


// Realizar solicitud GET a la API
$response = file_get_contents($apiURL);

// Decodificar la respuesta JSON
$data = json_decode($response, true);

// Mostrar los datos en formato HTML
echo '<h2>Información del Álbum</h2>';
echo '<p><strong>Nombre:</strong> ' . $data['name'] . '</p>';
echo '<p><strong>Artista:</strong> ' . $data['artists'][0]['name'] . '</p>';
echo '<p><strong>Lanzamiento:</strong> ' . $data['release_date'] . '</p>';
echo '<p><strong>Género:</strong> ' . $data['genres'][0] . '</p>';
echo '<p><strong>Número de canciones:</strong> ' . $data['total_tracks'] . '</p>';
?>

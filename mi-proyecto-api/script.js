const btnGetData = document.getElementById('btnGetData');
const dataContainer = document.getElementById('data-container');

btnGetData.addEventListener('click', () => {
    fetch('api.php')
        .then(response => response.json()) // Parsea la respuesta como JSON
        .then(data => {
            // Construye la estructura HTML para mostrar los datos
            const html = `
                <h2>Información del Álbum</h2>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Artista:</strong> ${data.artists[0].name}</p>
                <p><strong>Lanzamiento:</strong> ${data.release_date}</p>
                <p><strong>Género:</strong> ${data.genres[0]}</p>
                <p><strong>Número de canciones:</strong> ${data.total_tracks}</p>
            `;
            // Inserta el HTML generado en el contenedor de datos
            dataContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

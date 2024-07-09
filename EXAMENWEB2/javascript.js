// solicitud HTTP GET
async function fetchAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albums = await response.json();
        displayAlbums(albums);
    } catch (error) {
        console.error('Error fetching albums:', error);
    }
}

// álbumes en el DOM
function displayAlbums(albums) {
    const albumsContainer = document.getElementById('albums');
    albums.forEach(album => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');
        albumDiv.innerHTML = `
            <h3>${album.title}</h3>
            <p><strong>ID:</strong> ${album.id}</p>
            <p><strong>Usuario ID:</strong> ${album.userId}</p>
        `;
        albumsContainer.appendChild(albumDiv);
    });
}

// página haya cargado
document.addEventListener('DOMContentLoaded', () => {
    fetchAlbums();
});
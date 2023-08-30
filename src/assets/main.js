const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30bd53d21fmsh2bec4bb018d59ddp1949dbjsn30bc62534419',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const contentCo = null || document.getElementById('content'); // conexion con el ID del div que esta en el html

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// Autollamado de FUNCION: ()();

(async () => {
    try {
        const videos = await fetchData(API); 
        // creamos un Array y con map() hacemos que el Array tenga el template que se le asigna
        let view = `${ videos.items.map( video => `
        <div class="group relative">

            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
            </div>

            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>

        </div>
        `).slice(0,10).join('')}`; // Slice() para retornar del elemento 0 hasta el 10 y jon() para juntarlos

        contentCo.innerHTML = view; // Inserta la vista creada (view) en el html usando el .innerHTML

    } catch (e){
        console.log(e);
    }
})();
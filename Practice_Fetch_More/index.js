const container = document.getElementById('cont');
const h1 = document.createElement('h1');
h1.textContent = 'Loading....';

container.appendChild(h1);

/**
 * 
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
 */

function createTile(photo){
    const tile = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h2');

    img.setAttribute('src', photo.url);
    img.setAttribute('alt', photo.title);

    // title.textContent = user.first_name + " " + user.last_name;
    title.textContent = `${photo.id} - ${photo.title}`;

    tile.classList.add('tile');
    tile.appendChild(img);
    tile.appendChild(title);
    return tile;
}

function firstResponseSuccess(response){
    if(response.ok && response.status === 200){
        return response.json();
    }
    return Promise.reject('Am primit o eroare');
}


function firstResponseCreated(response){
    if(response.ok && response.status === 201){
        return response.json();
    }
    return Promise.reject('Am primit o eroare');
}

function showError(error){
    alert(error);
}

fetch('https://jsonplaceholder.typicode.com/photos')
.then(firstResponseSuccess)
.then((response) =>{
    container.innerHTML = '';
    if(response.length <= 0){
        h1.textContent = 'Lista este goala';
        container.appendChild(h1);
        // return Promise.reject('Lista este goala');
    } else {
        // normalizare a datelor

        // pun id-ul albului ca si keye intr-un nou obiect

        const photoObject =  response.reduce((acc, el) =>{
            const albumId = 'album-' + el.albumId;

            // {}
            let arr = acc[albumId];

            if(arr !== undefined){
                arr.push(el)
            } else{
                arr = [el];
            }

            return Object.assign(acc, {
                [albumId]: arr
            })
        }, {});


        const photos = photoObject['album-50'];
        
        photos.forEach((photo) =>{
            const tilePhoto = createTile(photo);
            container.appendChild(tilePhoto);
        })
    }
})
.catch(showError)


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Uite ca am creat o noua resursa',
    body: 'Resursa mea este faina',
    userId: 200,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(firstResponseCreated)
.then((response) =>{
    console.log('Response from POST');
    console.log(response);
})
.catch(showError)
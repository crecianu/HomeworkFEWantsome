// console.log('Merge');


// aceasta functie primeste un obiect user care are forma:
/*
{
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    id: 1
}
* */
function createTile(user){
    const tile = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h2');
    const email = document.createElement('p');

    img.setAttribute('src', user.avatar);
    img.setAttribute('alt', 'Avatar');

    // title.textContent = user.first_name + " " + user.last_name;
    title.textContent = `${user.first_name} ${user.last_name}`;
    email.textContent = user.email;

    tile.classList.add('tile');
    tile.appendChild(img);
    tile.appendChild(title);
    tile.appendChild(email);
    return tile;
}

/*
{
    "name": "morpheus",
    "job": "leader",
    "id": "371",
    "createdAt": "2023-06-19T16:42:50.397Z"
}
* */
function createSingleUser(user){
    const tile = document.createElement('div');
    const title = document.createElement('h2');
    const createdAt = document.createElement('p');

    title.textContent = `${user.name} ${user.job}`;
    createdAt.textContent = user.createdAt;

    tile.appendChild(title);
    tile.appendChild(createdAt);

    return tile;
}

function createPagination(total_pages){
    const ul = document.createElement('ul');

    ul.classList.add('paginare');

    for(let i = 0; i< total_pages; i++){
        const li = document.createElement('li');
        li.textContent = i + 1;
        ul.appendChild(li);
        li.addEventListener('click', (e) =>{
            const clickPage = e.target.textContent;
            fetchUsers(clickPage);
        })
    }

    return ul;
}

function fetchUsers(page){
    fetch(`https://reqres.in/api/users?page=${page}`).then((response) =>{
        // console.log(response);
        if(response.ok && response.status === 200){
            return response.json();
        }
        return Promise.reject('Am primit o eroare');
    }).then((successResponse) =>{
        // console.log(successResponse.data);
    
        const container = document.getElementsByClassName('container');
        container[0].innerHTML = '';

        successResponse.data.forEach((user) =>{
            const tile = createTile(user);
            container[0].appendChild(tile);
        })
    
        const pagination = createPagination(successResponse.total_pages);
        container[0].appendChild(pagination);
    
    })
    .catch((error) =>{
        alert(error);
    })
}


function getSingleUser(id){
    fetch(`https://reqres.in/api/users/${id}`).then((response) =>{
        if(response.ok && response.status === 200){
            return response.json();
        }
        return Promise.reject('Am primit o eroare');
    }).then((successResponse) =>{
        console.log('Get user');
        console.log(successResponse);

        const container = document.getElementsByClassName('container');
        container[0].innerHTML = '';

        const tile = createTile(successResponse.data);
        container[0].appendChild(tile);
    }).catch((error) =>{
        alert(error);
    })
}

/*
{
    "name": "morpheus",
    "job": "leader"
}
*/
function createUser(user){
    fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        body: JSON.stringify(user)
    }).then((response) =>{
        if(response.ok && response.status === 201){
            return response.json();
        }
        return Promise.reject('Am primit o eroare');
    }).then((successResponse) =>{
        console.log('Create user');
        console.log(successResponse);
    
        getSingleUser(2);
    
    }).catch((error) =>{
        alert(error);
    })
}

const addUserButton = document.getElementById('addUser');
addUserButton.addEventListener('click', () =>{
    const nameInput = document.getElementById('name');
    const jobInpu = document.getElementById('job');

    const user = {
        name: nameInput.value, 
        job: jobInpu.value,
    }

    
    createUser(user);

})

fetchUsers(1);

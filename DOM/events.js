// const button = document.querySelectorAll('.style-button');
// button.onclick = function(){
//     alert('AM fost apelat si prin JS o data');
// }

// button.onclick = function(){
//     alert('AM fost apelat si prin JS a doua oara');
// }
// function clickButton(){
//     const p = document.createElement('p');
//     p.textContent = 'Am fost creat la click';
//     p.addEventListener('mouseover', () =>{
//      p.style.backgroundColor='red';
//     });
//     p.addEventListener('mouseout', () =>{
//      p.style.backgroundColor='green';
//     });
//     document.body.appendChild(p);
//  }

// button.addEventListener('click', clickButton);
// button.addEventListener('click', function(){
//     alert('AM fost apelat si prin JS a doua oara');
// });

// const remove = document.getElementById('remove');

// remove.addEventListener('click', function(){
//     button.removeEventListener('click', clickButton);
//     // button.remove();
//  });

// const listLi = document.body.getElementsByTagName('li');
// const ul = document.body.getElementsByTagName('ul');
// const button = document.getElementById('but');
// ul[0].addEventListener('click', () =>{
//     console.log('am executat click-ul ul-ului');
// })
// button.addEventListener('click', (e) =>{
//     e.stopPropagation();
//     // document.body.style.backgroundColor = 'magenta';
//     // e.target.style.backgroundColor = 'green';
//     alert('hey, am apasat butonul');
// })

// function onClick(event){
//     event.stopPropagation();
//     // console.log(event);
//     // console.log(event.target.textContent);
//     event.target.textContent = 'change';
//     event.currentTarget.style.backgroundColor = 'green';
// }

// for(let i = 0; i< listLi.length; i++){
//     listLi[i].addEventListener('click', onClick)
// }

// document.body.addEventListener('mousemove', (e) =>{
//     console.log("X:", e.clientX, "Y", e.clientY);
// })

// const anchor = document.getElementsByTagName('a');
// anchor[0].addEventListener('click', (e) =>{
//     e.preventDefault();
//     // window.location = 'https://facebook.com';
// })

const button = document.getElementById('getData');
button.addEventListener('click', () =>{
    const input = document.getElementById('date');
    console.log(input.value);
})
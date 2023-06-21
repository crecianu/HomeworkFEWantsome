/*
Creati un algoritm care sa calculeze impozitul 
auto pentru capacitatea cilindrica introdusa 
prin prompt de utilizator. Valoarea finala va fi 
afisata fie printr-un alert, fie la consola.

Pentru formula, accesati acest link: https://impozitauto.ro/.
Hint: Math.floor

BONUS: Calcularea impozitului pentru alte tipuri 
de vehicule. Tipul vehiculului se va introduce printr-un 
alt prompt (auto, motocicleta, camion, etc)

* */
const vehicul = prompt('Introdu numele vehiculului');
console.log(vehicul);
// motocicleta, triciclu, autoturism, autobuz 
const capacitatea = prompt('Introdu capacitatea cilindrica');


switch(vehicul) {
    case 'motocicleta': {
        const parsed = parseInt(capacitatea);
        const media = parsed / 1000;
    }
    case 'autobuz': break;
    default: alert('Nu ai introdus datele corect');
}

// valoarea returnata de prompt este un string;
// trebuie sa ii facem parseInt(capacitatea); pentru a face operatiile aritmetice corect


// verificam daca datele sunt introduse corect
console.log('ai introdus datele corect');

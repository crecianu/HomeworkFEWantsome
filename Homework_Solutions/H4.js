/**
 * Creati o functie care sa calculeze venitul total 
 * anual in lei al unei persoane prin extragerea 
 * numerelor din textele de mai jos. Functia trebuie sa intoarca 
 * (return) o propozitie de forma: “Venitul total anual al lui 
 * NUME este de VALOARE lei”.
 * 
 */
const firstSentence = 'Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing';

const secondSentence ='Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei/an, si mai castiga suplimentar aproximativ 500 usd/luna, din freelancing';

const EUR = 4.62
const USD = 4.95


function venitTotal(sentence){
    let sum = 0;
    const splitSentence = sentence.split(' ');
    // console.log(splitSentence);

    for(let i = 0; i< splitSentence.length;i++){
        if(splitSentence[i].includes('lei/luna')){
            sum = sum + parseInt(splitSentence[i - 1]) * 12
        }
        if(splitSentence[i].includes('lei/an')){
            sum = sum + parseInt(splitSentence[i - 1]);
        }
        if(splitSentence[i].includes('euro/luna')){
            sum = sum + parseInt(splitSentence[i - 1]) * EUR * 12
        }
        if(splitSentence[i].includes('usd/luna')){
            sum = sum + parseInt(splitSentence[i - 1]) * USD * 12
        }
    }
    console.log(sum);
}

venitTotal(firstSentence);
venitTotal(secondSentence);
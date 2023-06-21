/*
Declarati si initializati un array denumit initialValues. Acesta va contine toate tipurile de date cunoscute pana acum. Folosinduva de el, rezolvati urmatoarele puncte:

1.Declarati si initializati un alt array denumit otherValues si populatil la fel ca initialValues dar cu mai multe tipuri de date dar. Trebuie sa contina macar un tip numeric si un string;
2.Faceti push la otherValues array in initialValues array;
3.Folositi valorile de tip numeric din initialValues pentru a calcula cateva operatii aritmetice(ex. Puteti adauga 2 la o anumita valoare);
4.Dupa ce a-ti facut operatiile, modificati valorile din initialValues array cu noile valori obtinute pe baza operatiilor. Valorile sa fie puse pe pozitiile corespunzatoare, sa nu fie adaugate ca valori noi in array.
Ex: Input: [1, 2, 3]
      Output: [3, 4, 5] // Am adunat 2 la fiecare numar din array
5.Concatenati toate valorile de tip string din initialValues array cu string-ul ”happy codding”;
6.Folosing operatorul “!” inversati toate valorile boolene din initialValues array;
Ex: Input: [true, false]
      Output: [false, true]

* */
const informatii = 'Avem informatii despre masini';

const arr = ['Recianu Ciprian', 12, true, {}, [{
      nume:'Mara',
}]];

arr.push(informatii);
arr[0] = arr[0] + " happy codding";
arr[0] = arr[0].concat(" happy codding");
arr[1];
arr[2] = false;
arr[2] = !arr[2];
/* 
DICHIARA UNA VARIABILE PER IL NOME
ASSEGNA ALLA VARIABILE IL VALORE AQUISITO DA UNA PROMPT 
*/

let name = prompt('Inserisci il tuo nome')

/* 
DICHIARA UNA VARIABILE PER IL COGNOME
ASSEGNA ALLA VARIABILE IL VALORE AQUISITO DA UN'ALTRA PROMPT 
*/
let surname = prompt('Inserisci il tuo cognome')

/* 
DICHIARA UNA VARIABILE PER IL COLORE
ASSEGNA ALLA VARIABILE IL VALORE AQUISITO DA UN'ALTRA PROMPT 
*/

let color = prompt('Inserisci il tuo colore preferito')

/* 
DICHIARA UNA VARIABILE 
DICHIARA UN TEMPLATE LITERAL
assegna le variabili: nome, cognome, colore e il numero 23 al template literal
crea un elemento con "id" all'interno del file index.html
assegna il contenuto delle variabili a l'elemento con "id"
*/
document.getElementById('first_string').innerText = name + surname + color + "23";
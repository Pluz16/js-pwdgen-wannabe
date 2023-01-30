console.log('prendo elemento html con id first-title')
const titleElement = document.getElementById('first-title')

console.log(titleElement.innerHTML)

console.log('imposto innerHTML di titleElement')
titleElement.innerHTML = 'Creiamo Usernames'
titleElement.className = 'title bg-secondary'


let message = 'Username '

console.log(titleElement.innerHTML)



// 1. chiedere nome all'utente
let name = prompt('Ciao inserisci il tuo nome!')
console.log(name)
// 2. chidere cognome all'utente
let surname = prompt('il tuo cognome?')
console.log(surname)
// 3. chiedere colore preferito
let fav_color = prompt('che colore ami?')
console.log(fav_color)
// 4. chiedere un numero
let fav_number = prompt('il tuo numero fortunato?')
console.log(fav_number)


// CONCATENAZIONE DI STRINGHE
 titleElement.innerHTML = message + name + surname + fav_color + fav_number


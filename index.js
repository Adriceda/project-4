//array string
// var cars = [
//     'ayla',
//     'agya',
//     'cayla',
//     'sigra',
//     'innova',
//     'kijang'
// ]

const cars = [
    'ayla',
    'agya',
    'cayla',
    'sigra',
    'innova',
    'kijang'
]
//var contents can be replaced, const and let can't


const numbers = [1,2,3,4,5,6,7]
console.log(cars)
console.log(numbers)


document.write(cars + '<br>')
document.write(numbers + '<br>')
document.write(cars[3] + '<p>Tipe Mobil</p>')

document.write('<span>Tipe Mobil: </span>' + cars[3] + '<br>')
document.write('<span>Jumlah Data</span>:' + cars.length + '<br>')
document.write('<span>Join</span>: ' + cars.join(' - ') + '<br>')

//Deleting last inputted data in array
document.write('<span>Pop</span>: ' + cars.pop() + '<br>')
document.write(cars + '<br>')

//Add data into array
document.write('<span>Add</span>: ' + cars.push('BMW') + '<br>')
document.write(cars + '<br>')

//Merging
const all = cars.concat(numbers) + '<br>' 
document.write(all)
const all2 = numbers.concat(cars) + '<br>'
document.write(all2)

//console.log('Jenis Mobil', cars)
//console.log(cars[3])

//length
//console.log('JUMLAH DATA', cars.length)

//join
//console.log('JOIN', cars.join('-'))

//pop
//console.log('POP', cars.pop())
//console.log(cars)



//LOOP
for(index = 0; index < cars.length; index++){
    document.write(cars[index] + '<br>')
}

document.write('<br>')

for(index = 0; index < cars.length; index+=2){
    document.write(cars[index] + '<br>')
}


"data"= [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]
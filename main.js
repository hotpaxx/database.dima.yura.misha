
/*const nameUser = 'dima'
let age = 16

const a = nameUser + ' ' + age;
console.log(a)
const nameUsers = ['dima', 'misha', 'yura'] //3
console.log(nameUsers[1]+` `+nameUsers[0])
console.log(`${nameUsers[0]}, yura, ${nameUsers[1]}`), */
let isUser = false
const infoUsers = [
    {
    nameUser : 'dima',
    age : 16,
    role : 'student'
    },
    {
    nameUser : 'yura',
    age : 22,
    role : 'coach'
    },
    {
    nameUser : 'misha',
    age : 15,
    role : 'student'
    }]
    let sumAge = 0
    /*for(let i = 0 ; i<infoUsers.length; i++){
       sumAge = infoUsers[i].age
    } */ //                         тоже самое что и ниже

const searchQuery = prompt('search:').toLocaleLowerCase()

for(let item of infoUsers){
    if(item.role === 'student')
    sumAge +=item.age
    if(searchQuery === item.nameUser){
        alert(`name: ${item.nameUser}, age: ${item.age}, role: ${item.role}`)
        isUser = true
        console.log(item)
    }
    if(searchQuery === item.nameUser + ' ' + 'age'){
        alert(` age: ${item.age}`)
        isUser = true
        console.log(item)
    }
    if(searchQuery === item.nameUser + ' ' + 'role'){
        alert(` role: ${item.role}`)
        isUser = true
        console.log(item)
    } 
                          
    

}
if(!isUser ){
    alert(`${searchQuery} not found`)
}      
console.log(sumAge)

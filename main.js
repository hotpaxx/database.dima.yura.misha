
/*const nameUser = 'dima'
let age = 16

const a = nameUser + ' ' + age;
console.log(a)
const nameUsers = ['dima', 'misha', 'yura'] //3
console.log(nameUsers[1]+` `+nameUsers[0])
console.log(`${nameUsers[0]}, yura, ${nameUsers[1]}`), */
/*for(let i = 0 ; i<infoUsers.length; i++){
    sumAge = infoUsers[i].age
} */ 

alert(`инструкция: я пока что не понял как вывести по команде все имена что бы было удобно, так что напишу тут. dima, yura, misha. Что бы посмотреть информацию про юзеров, нужно ввести их имя и что  хотите узнвть. сейчас в наличии команды: age - возраст, role - роль. если просто вписать имя юзера то можно узнать всю инфу о нем :)`)

let isUser = false
const infoAccLogin = [
    {
        login : 'admin',
       
    }
]
const infoAccPassword = [
    {
       
        password : 'admintop228'
    }
]

    const infoUsers = [
        {
        infoUsers : 'members',
        nameUser : ''
        },
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
        //let sumAge = 0
    
const login = prompt('login:').toLocaleLowerCase()
   
for(let item of infoAccLogin){
    if(login === item.login){
        alert(`success`)
        isUser = true
        console.log(item)
    }
}

if(!isUser ){
    alert(`${login} not found`)
    stop(`${password}`)
} 

const password = prompt('password:').toLocaleLowerCase()

for(let item of infoAccPassword){
    if(password === item.password){
        alert(`welcome`)
        isUser = true
        console.log(item)
    }
}

if(!isUser ){
    alert(`${password} is wrong`)
    stop(`${searchQuery} ${infoUsers}`)
} 
const searchQuery = prompt('search:').toLocaleLowerCase()

for(let item of infoUsers){
    /*if(item.role === 'student')
    sumAge +=item.age*///
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
    if(searchQuery === infoUsers){
        alert(`${item.nameUser}`)
        isUser = true
        console.log(item)
    }

                          
    

}
if(!isUser ){
    alert(` ${searchQuery} not found`)
}      
//console.log(sumAge)

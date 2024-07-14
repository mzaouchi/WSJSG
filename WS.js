var nour = "Bonjour"

console.log(nour)

console.log(typeof(nour))

var num = 2

console.log(num)

var ty = typeof(num)

console.log(ty)

var mahmoud = true

console.log(typeof(mahmoud))

var t = [2,3,4,8,9]

console.log(t)

console.log(t[2])

console.log(typeof(t))

var obj = {
    name : "Ghofrane",
    age : 20,
    city : "Tunis"
  } 
  
  console.log(obj)
  
  console.log(obj.city)
  
  console.log(typeof(obj))
  
  console.log(Object.keys(obj))
  
  console.log(Object.values(obj))
  
  console.log(Object.entries(obj))

  
var a

console.log(typeof(a))

var b = null

console.log(typeof(b))

var a = 5
var b = 2

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
a++
console.log(a)
a = a+2
console.log(a)
a += 2
console.log(a)
a--
console.log(a)
console.log(a**2)


var a = 5
var b = 2
var c = "5"

console.log(a == b)
console.log(a == c)
console.log(a === c)
console.log(a != c)
console.log(a !== c)


var a = 5
var b = 2
var c = "5"

console.log(a == b && a !== c)
console.log(a == b || a !== c)


var age = 18

if(age<18){
  console.log("Mineur")
}else if( age<60){
  console.log("Adulte")
}else{
  console.log("Vieux")
}



var month = 5

switch(month){
  case 1 : console.log("Janvier")
           break 
  case 5 : console.log("Mai")
           break 
  default : console.log("Not Found")
}


// for(var i = 0; i<10;i++){
//   console.log("Bonjour")
// }

var t = [3,4,8,9,12,34]

for(var i = 0; i < t.length;i++){
  console.log(t[i])
}

var t = [3, 4, 8, 9, 12, 34]

for(var i in t){
  console.log(t[i])
}

for(var content of t){
  console.log(content)
}




var i = 0

do{
    console.log("Fi9 Ghofrane")
    i++
}while(i<=9)

  function Sum(a,b){
    return a+b
  }
  
  console.log(Sum(2,4))
const car = {
    wheelN:4 ,
    wheelC: "black",
    engine : "four stoke" ,
   engineType: "petrol" ,
    geat: "hydrolic" ,


} ;
const carM = Object.create(car) 
console.log(carM)
const carC = Object.create(car) ;
console.log(carC)
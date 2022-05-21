const car = {
    model:"tat001" ,
    wheelN:4 ,
    wheelC: "black",
    engine : "four stoke" ,
   engineType: "petrol" ,
    geat: "hydrolic" ,


} ;
const carM = Object.create(car) 
console.log(carM)

const carC = Object.create(car) ;
carC.model = "tata111"
console.log(carC)
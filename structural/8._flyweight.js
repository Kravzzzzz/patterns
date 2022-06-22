class Car  {
    constructor (model, price) {
        this.model = model
        this.price = price
    }
}

class CarFactory {
    constructor(){
        this.cars = []
    }

    create (model, price) {
        const candidate = this.getCar(price)

        if (candidate){
            return candidate
        }

        const newCar = new Car (model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(price) {
        return this.cars.find( car => car.price === price) 
    }
}
// происхдит кеширование по цене и далее при совпадении цены вся информация берется из кеша

const factory = new CarFactory()

const bmwX5_2003 = factory.create('x5', 30000)
const audiQ7_2006 = factory.create('q7', 40000)
const bmwX5_2017 = factory.create('x5', 100000)
const audiQ5_2020 = factory.create('Q5', 100000)

console.log(bmwX5_2003);
console.log(audiQ7_2006);
console.log(bmwX5_2017);
console.log(audiQ5_2020);

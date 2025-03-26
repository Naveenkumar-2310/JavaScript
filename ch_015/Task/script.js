class CarDetails {
    constructor (model,year,color,mileage){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }
    drive(){
        console.log(`This car ${this.model} and it is released in ${this.year} and it have color varaiant like ${this.color} and give ${this.mileage} mileage `);
    }
}
const car = new CarDetails("Tata Nano",2010,"red,Green,yellow",21.9);
car.drive()
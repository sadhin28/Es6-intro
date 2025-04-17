class vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    meve(){
        console.log('gari chole na chole na chole na re')
    }
}

const yamaha = new vehicle('R15-Indro','5,50,000')
console.log(yamaha)

class Bus extends vehicle{
    constructor(name,price,seat,ticketprice){
       super(name,price);
       this.seat=seat;
       this.ticketprice=ticketprice;
    }

}
   
class Truck extends vehicle{
    constructor(naem,price,load){
        super(naem,price);
        this.load=load;
    }

}

const truck = new Truck('Icher-1114',565656756,'20 ton');
console.log(truck)
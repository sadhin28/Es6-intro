class person{
    constructor (naem,age){
        this.naem=naem;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.naem}`)
    }
    activity(){
        this.sleep();
    }
}
const kodom =new person('Kodom Ali', 21)
console.log(kodom)

kodom.sleep();

const badam = new person('Kacha badam',23)
badam.sleep();


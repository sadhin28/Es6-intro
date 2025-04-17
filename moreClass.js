class Teacher {
    constructor(name,subject){
        this.name=name;
        this.subject=subject;
    }
   lecture(){
    console.log('sir is teaching Math')
   }

}

const tapan =new Teacher('Shajahan Tapan', 'Physics')
console.log(tapan)

const sadhin=new Teacher('Taosif', 'Web Development')
console.log(sadhin)

class person{
    name;
    age;

    constructor(name,age){
        this.name=name || undefined
        this.age=age || 0
        // return this
    }

    getDeatils(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
const personOne=new person("Tapas",22)
console.log(personOne.getDeatils());

const personTwo= new person()
console.log(personTwo.getDeatils());
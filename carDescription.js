class car{
    // year;
    // company;
    // model;
    constructor(year,company,model){
        this.year=year;
        this.company=company;
        this.model=model
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar= new car(2022,"Skoda","Rapid")

// console.log(myCar);

console.log(myCar.getDescription());
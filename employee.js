class employee{
    constructor(name,position,salary){
        this.name=name;
        this.position=position
        this.salary=salary
    }

    getSalary(){
        return `${this.name} salary is ${this.salary}`
    }
}

const empName=new employee("Tapas","web dev engineer",80000)

console.log(empName.getSalary());
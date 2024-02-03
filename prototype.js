
function Students(name) {
    this.name=name
}
Students.prototype.printDetails=function(){
    console.log(`Student name is ${this.name}`);
}

const student=new Students("Mithun")

student.printDetails()
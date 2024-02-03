convertToNumber=(string)=>{
    
    try {
        let number=parseFloat(string)

        if (isNaN(number)) {
            throw new error("Invalid NUmber")
        }
        return number
    } catch (error) {
        
        return "Invalid Number"
        
    }
}
console.log(convertToNumber("123"));
console.log(convertToNumber("213.56"));
console.log(convertToNumber("abcdef"));
console.log(convertToNumber("15.23.56"));
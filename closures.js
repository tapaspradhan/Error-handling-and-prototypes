function numberChecker(number){
    return function (num){
        return number.includes(num)
    }

}
const arr=[5,6,8,9,1]
const checkNum=numberChecker(arr)
console.log(checkNum(3));
console.log(checkNum(8));
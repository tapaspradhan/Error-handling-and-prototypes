class user{

    constructor(username,password){
        this.username=username
        this.password=password
    }

    getPassword(){
        return this.password.replace(/./g,"*")
    }
    
    setPassword(newPassword){
        let containsNumber=false;
        let containsUppercase=false;

        for(let i=0; i < newPassword.length;i++){
            const char=newPassword.charAt(i)
            if (!isNaN(char)) {
                containsNumber=true
            }else if(char === char.toUpperCase()){
                containsUppercase= true
            }
        }

        if (newPassword.length >= 8 && containsNumber && containsUppercase) {
            this.password=newPassword
        }else{
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

const userOne=new user("Tapas","HelloIamTapas123")

console.log(userOne.getPassword());
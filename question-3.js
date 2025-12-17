// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword){
    if (userPassword.length > 10 ){
        return "Strong";
    }
    else if(userPassword.length >= 6 && userPassword.length < 10){
        return "Medium";
    }
    else{
        return "Weak";
    }
}
console.log(checkPasswordStrength(userPassword));

userPassword = "ssswnalWadqQ"

console.log(checkPasswordStrength(userPassword)); // "Strong"

userPassword = "TechUp"

console.log(checkPasswordStrength(userPassword)); // "Medium"

userPassword = "abcde"

console.log(checkPasswordStrength(userPassword)); // "Weak"
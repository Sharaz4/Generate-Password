let passwordbox = document.getElementById('inp');
let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()?/><.,_-+=";
let allchar = upperCase + number + symbol + lowerCase;

function changepassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordbox.value = password;
}
function copy(){
    passwordbox.select();
    document.execCommand("copy");
}
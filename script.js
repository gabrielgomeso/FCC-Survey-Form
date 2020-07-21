function validForm(){
    let errors = [];
    let email = document.querySelector('#e-mail').value
    let age = document.querySelector('#number').value

    let checkmail =  emailIsValid(email)
    if(checkmail == false){errors.push("Invalid e-mail")}

    let checkage = ageIsValid(age)
    if(checkage == false){errors.push("Invalid age")}

    if(errors.length > 0){alert(errors)}else{
        alert("Answers sent. Thanks for taking the time!")
    } 
}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

function ageIsValid(age) {
    if(age > 12 && age < 90){
        return true 
    } else {
        return false
    }
}
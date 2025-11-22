console.log("hey what a my js is running ")

// Theme Changer

let theme = document.querySelector("button")
theme.addEventListener('click',function(){

    document.body.classList.toggle('toggle')
    
})


let userName = document.querySelector("#userName")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let cPassword = document.querySelector("#cPassword")

document.querySelector("#agreeJoinBtn").addEventListener('click', function () {

    const allUsersData = JSON.parse(localStorage.getItem('allUsersData')) || []

    if (!userName.value || !firstName.value || !lastName.value || !email.value || !password.value || !cPassword.value) {
        return alert("All Fields are Required!")
    }

    if (password.value != cPassword.value) {
        return alert("Please fill the correct Password.")
    }
    if (password.value.length < 8) return alert("In Password Must be eight characters are required!")

let  userNameAlreadyExist = allUsersData.find((userData) => {
return userData.userName == userName.value
})
if (userNameAlreadyExist) {
    return alert("This User Name is Already Taken. Please Try Another!")
}
let  emailAlreadyExist = allUsersData.find((userData) => {
return userData.email == email.value
})

if (emailAlreadyExist) {
    return alert("This Email is Already Exist. Please Try To Login!")
}


    const userDetails = {
        userName: userName.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    allUsersData.push(userDetails)
    localStorage.setItem('allUsersData', JSON.stringify(allUsersData))
})
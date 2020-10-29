// Used to grab onto Firebase -> Connection
var firebaseConfig = {
    apiKey: "AIzaSyBysovL5NcP5Ui0cTWlKSpnLnLYrgWHK8w",
    authDomain: "pageant-register-form.firebaseapp.com",
    databaseURL: "https://pageant-register-form.firebaseio.com",
    projectId: "pageant-register-form",
    storageBucket: "pageant-register-form.appspot.com",
    messagingSenderId: "47708887703",
    appId: "1:47708887703:web:b04c6609eec27b9e1fe7d2"
};

//   Init Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Start grabbing DOM Element
const submitBtn = document.querySelector('#submit');

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let userEmail = document.querySelector('#userEmail');
let userName = document.querySelector('#userName');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let userGender = document.querySelector('#userGender');
let telePhone = document.querySelector('#telePhone');
let userAddress = document.querySelector('#userAddress');

const db = firestore.collection("userData");

submitBtn.addEventListener('click', function () {
    let firstNameInput = firstName.value;
    let lastNameInput = lastName.value;
    let userEmailInput = userEmail.value;
    let userNameInput = userName.value;
    let passwordInput = password.value;
    let confirmPasswordInput = confirmPassword.value;
    let genderInput = userGender.value;
    let telePhoneInput = telePhone.value;
    let userAddressInput = userAddress.value;

    // Access the data collection
    db.doc()
      .set({
            firstname: firstNameInput,
            lastname: lastNameInput,
            email: userEmailInput,
            username: userNameInput,
            password: passwordInput,
            gender: genderInput,
            telephone: telePhoneInput,
            address: userAddressInput
        })
        .then(function(){
            console.log("Data Saved");
        })
        .catch(function(error){
            console.log(error);
        });
});
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

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userMessage = document.querySelector('#userMessage');
let userGender = document.querySelector('#userGender');

const db = firestore.collection("contactData");

submitBtn.addEventListener('click', function () {
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;
    let userGenderInput = userGender.value;

    // Access the data collection
    db.doc()
      .set({
            name: userNameInput,
            email: userEmailInput,
            message: userMessageInput,
            gender: userGenderInput
        })
        .then(function(){
            console.log("Data Saved");
        })
        .catch(function(error){
            console.log(error);
        });
});
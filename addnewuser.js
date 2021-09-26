const firebaseConfig = {
    apiKey: "AIzaSyBgQOcRzH4gpXArLBlx2edbYACS3I7W8bY",
    authDomain: "friendbook-7a05b.firebaseapp.com",
    databaseURL: "https://friendbook-7a05b-default-rtdb.firebaseio.com",
    projectId: "friendbook-7a05b",
    storageBucket: "friendbook-7a05b.appspot.com",
    messagingSenderId: "439507904784",
    appId: "1:439507904784:web:71c716ffdc14c09ea9dd95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);





function createAccount() {
    document.getElementById("status").innerHTML = "";
    user_id = document.getElementById("user_id").value;
    password = document.getElementById("password").value;
    pwd = CryptoJS.MD5(password).toString();
    user_name = document.getElementById("user_name").value;
    date_of_birth = document.getElementById("date_of_birth").value;

    if (user_id == "") {
        document.getElementById("status").innerHTML = "User_id Required";
    } else if (password == "") {
        document.getElementById("status").innerHTML = "Password Required";
    } else if (user_name == "") {
        document.getElementById("status").innerHTML = "User_name Required";
    } else if (date_of_birth == "") {
        document.getElementById("status").innerHTML = "Date of Birth Required";
    } else {


        firebase.database().ref('/').child(user_id).update({
            passcode: pwd,
            name: user_name,
            dob: date_of_birth
        });

        window.alert("Account created");
        document.getElementById("status").innerHTML = "";
        document.getElementById("user_id").value = "";
        document.getElementById("password").value = "";
        document.getElementById("user_name").value = "";
        document.getElementById("date_of_birth").value = "";

    }
}

function goToHome() {
    window.location = "login.html"
}
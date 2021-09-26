// Your web app's Firebase configuration
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



user_name = localStorage.getItem("user_name");

function goToHome() {
    window.location = "home.html";
}

function addFriend() {
    document.getElementById("status").innerHTML = "";
    document.getElementById("status_success").innerHTML = "";

    friend_name = document.getElementById("Friend_name").value;
    friend_birthday = document.getElementById("friend_birth").value;
    friend_message = document.getElementById("Message").value;
    if (friend_name == "") {
        document.getElementById("status").innerHTML = "* Please Enter your name";
    } else if (friend_birthday == "") {
        document.getElementById("status").innerHTML = "* Please Select your date of birth";
    } else if (friend_message == "") {
        document.getElementById("status").innerHTML = "* Enter your Message";
    } else {
        firebase.database().ref(user_name).push({
            Friendname: friend_name,
            Friend_Birthday: friend_birthday,
            Friend_Message: friend_message
        });

        document.getElementById("Friend_name").value = "";
        document.getElementById("friend_birth").value = "";

        document.getElementById("Message").value = "";
        document.getElementById("status").innerHTML = ""
        document.getElementById("status_success").innerHTML = "Your wishes are added";

    }
}

function logout() {
    localStorage.removeItem("user_name");
    window.location.replace("login.html");
}
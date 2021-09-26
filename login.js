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


function login_user() {
    document.getElementById("status").innerHTML = "";


    user_id = document.getElementById("user_name").value;
    pwd = document.getElementById("password").value;
    password = CryptoJS.MD5(pwd).toString();
    console.log(password);
    if (user_id == "") {
        document.getElementById("status").innerHTML = "User-id Required";
    } else if (pwd == "") {
        document.getElementById("status").innerHTML = "Password Required";
    } else {

        firebase.database().ref("/").on('value', function(snapshot) {

            snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();

                userid = childKey; // user_id sub folder
                // console.log(userid);
                user_detail = childData; // sub_folder detail
                // console.log(user_detail['passcode']);

                if (user_id == userid) {
                    console.log("user found");
                    chek_psw = user_detail['passcode'];
                    if (chek_psw == password) {
                        console.log("correct");
                        user_name = document.getElementById("user_name").value;

                        localStorage.setItem("user_name", user_name);
                        window.location = "home.html";

                    }
                } else {
                    document.getElementById("status").innerHTML = "Invalid Credianatls";
                }

            });
        });
    }

}



function addnewuser() {
    window.location = "addnewuser.html";
}
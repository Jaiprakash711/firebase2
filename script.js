<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase , ref , set , get , child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = { apiKey: "AIzaSyAC8U1k8Fi69XfCn5CvL8wmcWda8SmYQ3w",
    authDomain: "demo1-4333d.firebaseapp.com",
    projectId: "demo1-4333d",
    storageBucket: "demo1-4333d.appspot.com",
    messagingSenderId: "1026404002310",
    appId: "1:1026404002310:web:447ca591c93ee3d53fb187",
    measurementId: "G-NQL9VLJBV1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



  // Get reference to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e) {


set(ref,(db , 'user/' + document.getElementById("username").value),
{
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    PhoneNumber: document.getElementById("phone").value
  });
  alert("Login Successful!");

})


</script>
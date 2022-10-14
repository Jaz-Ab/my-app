  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import {getAuth} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"

  import {getFirestore} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBnIkaO_7zOKdNbel_hK1pp8kIsxaL7rHQ",
    authDomain: "invita2-f90ae.firebaseapp.com",
    projectId: "invita2-f90ae",
    storageBucket: "invita2-f90ae.appspot.com",
    messagingSenderId: "898747224094",
    appId: "1:898747224094:web:c5640b9b0d26cbdfed5e0f"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
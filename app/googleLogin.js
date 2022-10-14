import {GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import {auth} from './firebase.js'
const googleButton = document.querySelector('#google');

googleButton.addEventListener('click', async () =>{

    const provider= new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(auth.currentUser.photoURL)
    } catch (error) {
        console.log(error)
    }
})
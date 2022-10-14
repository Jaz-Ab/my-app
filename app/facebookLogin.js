import {FacebookAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import {auth} from './firebase.js'
const facebookButton = document.querySelector('#facebook');

facebookButton.addEventListener('click', async () =>{

    const provider= new FacebookAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(auth.currentUser.photoURL)
    } catch (error) {
        console.log(error)
    }
})
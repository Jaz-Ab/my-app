import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import {auth} from './firebase.js'

const signinForm = document.querySelector('#signin-form')

signinForm.addEventListener('submit', async e=>{
    e.preventDefault()

    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials);
    //Ocultar formulario
        //document.getElementsByTagName("header")[0].innerHTML = "Hello  "+ credentials.user.email;
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            signinForm['signin-email'].value = '';
            signinForm['signin-password'].value = '';
            alert('Contraseña incorrecta')
        } else if (error.code === 'auth/user-not-found') {
            signinForm['signin-email'].value = '';
            signinForm['signin-password'].value = '';
            alert('Usuario no encontrado')
        } else {
            signinForm['signin-email'].value = '';
            signinForm['signin-password'].value = '';
            alert(error.message, 'Error')
        }
        console.log(error);
    }

})
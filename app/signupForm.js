import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import {auth} from './firebase.js';
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    
console.log(email, password);

try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials.user.displayName)
//Ocultar formulario
    //document.getElementsByTagName("header")[0].innerHTML = "Hello  "+userCredentials.user.email;
} catch (error) {
    //console.log(error);
    console.log(error.message);
    console.log(error.code);

    if (error.code === 'auth/email-already-in-use'){
        alert('El email ya está registrado')
        signupForm['signup-email'].value = '';
        signupForm['signup-password'].value = '';
    }
    else if (error.code === 'auth/invalid-email'){
        alert ('Email inválido')
        signupForm['signup-email'].value = '';
        signupForm['signup-password'].value = '';
    } else if (error.code === 'auth/weak-password'){
        alert('Contraseña debe tener al menos 6 carácteres')
        signupForm['signup-email'].value = '';
        signupForm['signup-password'].value = '';
    } else if (error.code) {
        alert('Algo salió mal')
        signupForm['signup-email'].value = '';
        signupForm['signup-password'].value = '';
    }
}

})
import {signOut} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import {auth} from './firebase.js'
const logout = document.querySelector('#logout')
const signinForm = document.querySelector('#signin-form')
const signupForm = document.querySelector('#signup-form')

logout.addEventListener('click', async (e)=>{
e.preventDefault()
await signOut(auth)
signupForm['signup-email'].value = '';
signupForm['signup-password'].value = '';
signinForm['signin-email'].value = '';
signinForm['signin-password'].value = '';
console.log('Usuario desconectado')
})
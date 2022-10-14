//Firebase
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import {auth, db} from '../app/firebase.js'
import {getDocs, collection} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js"
import{setupPosts} from '../app/postList.js'

import '../app/signupForm.js'
import '../app/signinForm.js'
import '../app/logout.js'
import '../app/googleLogin.js'
import '../app/facebookLogin.js'
import '../app/postList.js'

const btnLogout = document.querySelector('#logout');
const signinForm = document.querySelector('#signin-form')
const signupForm = document.querySelector('#signup-form')
const googleButton = document.querySelector('#google');
const facebookButton = document.querySelector('#facebook');
const hello = document.querySelector('#hello');
const helloString = hello.innerHTML;
const image = document. createElement('img')
image.setAttribute('id', 'photo');
document.querySelector('.showcase').appendChild(image);

onAuthStateChanged(auth, async (user)=>{
    if (user) {
        const querySnapshot = await getDocs(collection(db, 'Posts'))
        setupPosts(querySnapshot.docs)
    } else {
        setupPosts([])
    }


    //console.log(user.photoURL);
    if (user=== null) {
        btnLogout.style.display='none';
        hello.style.display='none';
        image.style.display='none';
        signinForm.style.display='block';
        signupForm.style.display='block';
        googleButton.style.display='block';
        facebookButton.style.display='block';
    } else {      
        if (user.photoURL != null){
            image.removeAttribute('src');
            image.style.display='block';
            image.setAttribute('src', user.photoURL);
         }
        if (user.displayName === null) {
            hello.style.display='block';
            hello.innerHTML= helloString.replace('user', user.email)
        } else {
            hello.style.display='block';
            hello.innerHTML= helloString.replace('user', user.displayName)
        }
        btnLogout.style.display='block';
        //document.getElementsByTagName("header")[0].innerHTML = "Hello  "+ user.email;
        signupForm.style.display='none';
        signinForm.style.display='none';
        googleButton.style.display='none';
        facebookButton.style.display='none';
    }
})

document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay: 500});
ScrollReveal().reveal('.cards-banner-one',{delay: 500});
ScrollReveal().reveal('.cards-banner-two',{delay: 500});
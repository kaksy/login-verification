
 

 function setformErrorMsg ( formElement, type, message){
     let messageElement = formElement.querySelector('.form__message--error')
     messageElement.innerHTML = message
     messageElement.classList.remove('form__message--error','form__message--success')
     messageElement.classList.add(`form__message--${type}`)
 }

//  setformErrorMsg(loginForm, 'success', "you're logged in!");
//  let loginForm =document.querySelector('#login')

// for individual input error
function inputError (inputElement, message){
   inputElement.classList.add('form__input--error')
    inputElement.parentElement.querySelector('.forms__input-error-message').textContent=message;

}
document.addEventListener('DOMContentLoaded',()=>{
    let loginForm = document.querySelector('#login');
    let createAccountForm = document.querySelector('#createaccount');


   let link = document.querySelector('#link-sign-in')
   link.addEventListener('click', (e)=>{
    e.preventDefault();
      loginForm.classList.add('form-hidden');
      createAccountForm.classList.remove('form-hidden');
   })
    // document.querySelector('#')
    let signUP= document.querySelector('#link-login')
    signUP.addEventListener('click', (e)=>{
        e.preventDefault();
      createAccountForm.classList.add('form-hidden');
      loginForm.classList.remove('form-hidden');
   })
     loginForm.addEventListener('submit',(e)=>{
         e.preventDefault();

         //perform your ajax /fetch login

         setformErrorMsg(loginForm, 'error', 
         'invalid username/password combination')
     })
//    let msg= inputElement.classList.add('form__input--error')
     document.querySelectorAll('.input-type-data').forEach((inputElement) =>{
        inputElement.addEventListener("mouseout", (e)=>{
            if (e.target.id === 'signupuser' && e.target.value.length > 0 && e.target.value.length < 10){
            inputError (inputElement , 'username must be at least 10 character in length')   
           }
        })
     })
})




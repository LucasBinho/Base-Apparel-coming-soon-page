const form = document.querySelector('.container form');
const email= document.querySelector('.container form input[type=email]');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let emailValue = email.value;
    if(validateEmail(emailValue)) {
        form.classList.remove("error");
    } else {
        form.classList.add("error");
    }
    
});

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
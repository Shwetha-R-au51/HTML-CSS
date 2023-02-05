const form=document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = form.querySelector("input"),
pField = form.querySelector(".password"),
pInput = form.querySelector("input");

form.onsubmit =(e) =>{
    e.preventDefault();
    if(eInput.value==""){
        eField.classList.add("shake","error");
    }
    if(pInput.value==""){
        pField.classList.add("shake","error");
    }
    setTimeout(()=>{
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () =>{
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2-3}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value !="")?errorTxt.innerTxt="Enter a valid email address":errorTxt.innerTxt="Email address can't be blank";

        }
        else{
            eField.classList.remove("error");
        }
    }
    pInput.onkeyup = () =>{
        if(!pInput.value==""){
            pField.classList.add("error");
    
        }
        else{
            pField.classList.remove("error");
        }
    }
    
}

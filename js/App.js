var elCheck = document.querySelector(".check-js");
var elSiteForm = document.querySelector("#form-js")
var elInputName = document.querySelector(".input-first");
var elInputSurname = document.querySelector(".input-js");
var elAge = document.querySelector(".input-age");
var elVerify = document.querySelector(".verify-code");
var elAnswer = document.querySelector(".answer");

elSiteForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(elVerify.value >= 100){
        elAnswer.textContent = "Tabriklaymiz, siz o'qishga kirdingiz"
    }else if (elCheck.checked){
        elAnswer.textContent = "Malades, Darsga kelishingiz mumkun"
    } else if (elVerify.value < 57) {
        elAnswer.textContent = "Siz kira olmadingiz"
    } else if (elVerify.value < 100) {
        elAnswer.textContent = "Siz super kontrakt asosi bo'yicha kirdingiz"
    } 
});


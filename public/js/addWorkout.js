


function showTextbox(answer){
    console.log(answer.value)
    if(answer.value == "Strength"){
       document.getElementById("strengthForm").classList.remove('s-none')
    } else { document.getElementById("cardioForm").classList.remove('c-none')
}}
    
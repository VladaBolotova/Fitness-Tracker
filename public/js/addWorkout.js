


function showTextbox(answer){
    console.log(answer.value)
    if(answer.value == "Strength"){
       document.getElementById("strengthForm").classList.remove('s-none')
       document.getElementById("CardioForm").classList.add('c-none')
    } else { document.getElementById("CardioForm").classList.remove('c-none')
    document.getElementById("strengthForm").classList.add('s-none')
}}
    

showTextbox();
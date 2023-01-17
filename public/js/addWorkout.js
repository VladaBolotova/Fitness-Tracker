


function showTextbox(answer){
    console.log(answer.value)
    if(answer.value == "Strength"){
       document.getElementById("strengthForm").classList.remove('s-none')
       document.getElementById("CardioForm").classList.add('c-none')
    } else { document.getElementById("CardioForm").classList.remove('c-none')
    document.getElementById("strengthForm").classList.add('s-none')
}}
    

showTextbox();


let workouts = [];
        const addWorkout = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let workout_deats = {
                id: getElementById("date").value,
                description: document.getElementById('desc').value,
                weight: document.getElementById('weight').value,
                sets: document.getElementById("sets").value,
                reps:document.getElementById("reps").value,
                calories:document.getElementById("cal").value,
                Cardio:document.getElementById("desc_cardio").value,
                duration: document.getElementById("duration").value
            }
            workouts.push(workout_deats);
            console.log(workouts)
            document.forms[0].reset();
            localStorage.setItem('MyworkoutList', JSON.stringify(workouts) );

            console.log(workouts)
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('save-btn').addEventListener('click', addWorkout);
        
        });
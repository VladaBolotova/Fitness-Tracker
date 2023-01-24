


function showTextbox(answer) {
    console.log(answer.value)
    if (answer.value == "Strength") {
        document.getElementById("strengthForm").classList.remove('s-none')
        document.getElementById("CardioForm").classList.add('c-none')
    } else {
        document.getElementById("CardioForm").classList.remove('c-none')
        document.getElementById("strengthForm").classList.add('s-none')
    }
}

function addWorkout() {

    const date = document.getElementById('date').value;
    const workout_time = document.getElementById('duration').value.trim();
    const type = document.getElementById('typeWorkout').value.trim();
    let description = document.getElementById('desc').value.trim();
    const descriptionCardio = document.getElementById('desc_cardio').value.trim();
    const calories = document.getElementById('cal').value.trim();
    const weight = document.getElementById('weight').value.trim();
    const sets = document.getElementById('sets').value.trim();
    const reps = document.getElementById('reps').value.trim();

    if (type === 'Strength') {
        if (date && workout_time && type && description && weight && sets && reps) {

            const response = fetch('api/workout', {
                method: 'POST',
                body: JSON.stringify({ date, workout_time, type, description, weight, sets, reps }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Workout was added successfully.');
            }
        };
    } else if (type === 'Cardio') {
        let description = descriptionCardio;

        const response = fetch('api/workout', {
            method: 'POST',
            body: JSON.stringify({ date, workout_time, type, description, calories}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Workout was added successfully.');
        }
    };
}


// let workouts = [];
//         const addWorkout = async (ev)=>{
//             ev.preventDefault();  //to stop the form submitting
//             let workout_deats = {
//                 id: document.getElementById("date").value,
//                 description: document.getElementById('desc').value,
//                 weight: document.getElementById('weight').value,
//                 sets: document.getElementById("sets").value,
//                 reps:document.getElementById("reps").value,
//                 calories:document.getElementById("cal").value,
//                 Cardio:document.getElementById("desc_cardio").value,
//                 duration: document.getElementById("duration").value
//             }
//             workouts.push(workout_deats);
//             console.log(workouts)
//             document.forms[0].reset();
//             if (workouts) {
//                 const response = await fetch('/addworkout', {
//                   method: 'POST',
//                   body: JSON.stringify({ workouts }),
//                   headers: { 'Content-Type': 'application/json' },
//                 });

//                 if (response.ok) {
//                   document.location.replace('/');
//                 } else {
//                   alert('Failed to add workout.');
//                 }
//               }

//             console.log(workouts)
//         }
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('save-btn').addEventListener('click', addWorkout);

});
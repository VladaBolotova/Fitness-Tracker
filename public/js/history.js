const deleteHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id)
  
      const response = await fetch(`/api/workout/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/workout');
      } else {
        alert('Failed to delete workout');
      }
    }
};

const workoutList = document.querySelector('#workoutList');
workoutList.addEventListener('click', deleteHandler);
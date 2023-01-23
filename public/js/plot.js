
  console.log('test');

  fetch("/api/users/diagram-data")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
  
      let x = data.map((w) => new Date(w.durations[0].date)).map((rawDate)=>`${rawDate.getMonth()}/${rawDate.getDay()}`)
      let y = data.map((w) => +w.calories)
  
      console.log(x,y);
  
      var trace1 = {
        x: x,
        y: y,
        type: 'bar',
        name: 'workout'
      };
      
      var data = [trace1];
      var layout = {
        title: "Testo",
        xaxis: {
          title: "Date"
        },
        yaxis: {
          title: "Calories"
        }
      }
  
      var responsive = {responsive: true}
  
      Plotly.newPlot('user-diagram', data, layout, responsive);
    })
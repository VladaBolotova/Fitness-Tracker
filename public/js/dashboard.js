// const TESTER = document.getElementById('tester');
// var data = [
//     {
//         x: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
//         y: [20, 60, 23, 30, 38, 15, 45],
//         type: 'bar',
//         marker: {
//             color: 'white'
//         },
//     }
// ];

// var layout = {
//     yaxis: { title: 'Minutes' },
//     paper_bgcolor: 'rgb(31 41 55)',
//     plot_bgcolor: 'rgb(31 41 55)',
//     font: {
//         color: 'white',
//     },
// };

// Plotly.newPlot(TESTER, data, layout);

const recentActivity = async () => {
console.log("test");

    const response = await fetch('/api/users/diagram-data', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        var responseData = await response.json();

        var dateArray = responseData.map((w) => new Date(w.date));
        dateArray = dateArray.map(x => `${x.getMonth() + 1}-${x.getDate()}`)
        var timeArray = responseData.map((w) => w.workout_time);

        const TESTER = document.getElementById('tester');
        var data = [
            {
                x: dateArray,
                y: timeArray,
                type: 'bar',
                marker: {
                    color: 'white'
                },
            }
        ];

        var layout = {
            yaxis: { title: 'Minutes' },
            paper_bgcolor: 'rgb(31 41 55)',
            plot_bgcolor: 'rgb(31 41 55)',
            font: {
                color: 'white',
            },
        };

        Plotly.newPlot(TESTER, data, layout);

    } else {
        console.log(err);
    };
};


recentActivity();
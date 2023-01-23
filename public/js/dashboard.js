const TESTER = document.getElementById('tester');
var data = [
    {
        x: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        y: [20, 60, 23, 30, 38, 15, 45],
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

const recentActivity = async () => {


    const response = await fetch('/api/workout', {
        method: 'GET',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log(response)
    } else {
        console.log(err);
    };
};


recentActivity;
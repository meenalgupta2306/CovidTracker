const x=[], x1=[]
const y=[], y1=[]
var xactive=[], yactive=[]
var xdeath=[], ydeath=[]
var xnewcases=[], ynewcases=[]
var xrecovery=[], yrecovery=[]
fetch('https://data.covid19india.org/data.json')
.then((apidata)=>{
    console.log(apidata)
    return apidata.json();
})
.then((actualdata) =>{
    console.log(actualdata)
    d=actualdata.statewise
    var l = Object.keys(actualdata.statewise).length;
    for(i=1;i<l;i++)
    {
        a=actualdata.statewise[i].state;
        x.push(a)
        b=actualdata.statewise[i].recovered;
        y.push(b)
        b1=actualdata.statewise[i].confirmed;
        y1.push(b1)
        yactive.push(actualdata.statewise[i].active)
        ydeath.push(actualdata.statewise[i].deaths)
        ynewcases.push(actualdata.statewise[i].deltaconfirmed)
        yrecovery.push(actualdata.statewise[i].recovered)
    }
    //cases of top 4 states
    yactive = yactive.sort((a,b) => b-a).slice(0,4);
    ydeath = ydeath.sort((a,b) => b-a).slice(0,4);
    ynewcases = ynewcases.sort((a,b) => b-a).slice(0,4);
    yrecovery = yrecovery.sort((a,b) => b-a).slice(0,4);
    console.log(yrecovery)
    for(j=0;j<5;j++)
    {
        for(i=1;i<l-1;i++)
        {
            if(yactive[j]==actualdata.statewise[i].active){
                xactive.push(actualdata.statewise[i].state)
                console.log(i,j)
            }
            if(ydeath[j]==actualdata.statewise[i].deaths)
                xdeath.push(actualdata.statewise[i].state)
            if(ynewcases[j]==actualdata.statewise[i].deltaconfirmed)
                xnewcases.push(actualdata.statewise[i].state)
            if(yrecovery[j]==actualdata.statewise[i].recovered)
                xrecovery.push(actualdata.statewise[i].state)
                
        }
    }
    //state table
    var l = Object.keys(actualdata.cases_time_series).length;
    d=actualdata.cases_time_series[l-1].date;
    document.getElementById('date').innerHTML= d;
    document.getElementById('statedate').innerHTML= d;

    //fetchtotalconfirmeddata
    confirmed=actualdata.cases_time_series[l-1].totalconfirmed;
    document.getElementById('totalconfirmed').innerHTML= confirmed;

    //fetchtotalconfirmeddata
    totaldeceased=actualdata.cases_time_series[l-1].totaldeceased;
    document.getElementById('totaldeceased').innerHTML= totaldeceased;

    //fetchtotalconfirmeddata
    totalrecovered=actualdata.cases_time_series[l-1].totalrecovered;
    document.getElementById('totalrecovered').innerHTML= totalrecovered;
    //fetch state data
    let table = document.querySelector("table");
    var l = Object.keys(actualdata.statewise).length;
    
    d=[]
    for(i=1;i<l;i++){
        d.push(actualdata.statewise[i])
    }
    for(let element of d)
    {
        let row = table.insertRow();
        for (k in element) {
            if(k=="active"||k=="confirmed"||k=="deaths"||k=="lastupdatedtime"||k=="recovered"||k=="state"){
                let cell = row.insertCell();
                
                let text = document.createTextNode(element[k]);
                cell.appendChild(text);
            }
        }
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var mixedChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Recovered Cases',
                data: y,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                // this dataset is drawn below
                order: 2
            }, {
                label: 'Confirmed Cases',
                data: y1,
                type: 'bar',
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)'
                ],
                // this dataset is drawn on top
                order: 1
            }],
            labels: x
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }, 
        });
        var ctx = document.getElementById('firstChart').getContext('2d');

        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xactive,
            datasets: [{
                label: 'active cases',
                data: yactive,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    var ctx = document.getElementById('secondChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xdeath,
            datasets: [{
                label: 'deaths',
                data: ydeath,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    var ctx = document.getElementById('thirdChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xnewcases,
        datasets: [{
            label: 'new cases',
            data: ynewcases,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var ctx = document.getElementById('fourthChart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: xrecovery,
    datasets: [{
        label: 'recovered cases',
        data: yrecovery,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
});
})      
.catch((error)=> {
        console.log(error)
    });
    console.log(x)
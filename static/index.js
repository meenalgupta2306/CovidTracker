var xvaccinated=[], ydate=[]
var xfrontline1stdose=[], yfrontlinedate=[], xfrontline2nddose=[]
var xhealthworker1stdose=[], yhealthworkerdate=[], xhealthworker2nddose=[]
fetch('https://data.covid19india.org/data.json')
.then((apidata)=>{
    console.log(apidata)
    return apidata.json();
})
.then((actualdata)=>{
    d=actualdata.tested
    var l = Object.keys(actualdata.tested).length;
    for(var i=312;i<l;i++)
    {
        var frontlineworkersvaccinated1stdose=d[i].frontlineworkersvaccinated1stdose
        var frontlineworkersvaccinated2nddose=d[i].frontlineworkersvaccinated2nddose
        if(frontlineworkersvaccinated1stdose!=="" || frontlineworkersvaccinated2nddose!==""){
            xfrontline1stdose.push(frontlineworkersvaccinated1stdose)
            var res1=d[i].updatetimestamp
            var datefrontline= res1.slice(0, 5);
            yfrontlinedate.push(datefrontline) 
            xfrontline2nddose.push(frontlineworkersvaccinated2nddose)
            //console.log(i,frontlineworkersvaccinated1stdose,datefrontline)
        }
        var healthcareworkersvaccinated1stdose=d[i].healthcareworkersvaccinated1stdose
        var healthcareworkersvaccinated2nddose=d[i].healthcareworkersvaccinated2nddose
        if(healthcareworkersvaccinated1stdose!=="" || healthcareworkersvaccinated2nddose!==""){
            xhealthworker1stdose.push(healthcareworkersvaccinated1stdose)
            var res1=d[i].updatetimestamp
            var datefrontline= res1.slice(0, 5);
            yhealthworkerdate.push(datefrontline)
            xhealthworker2nddose.push(healthcareworkersvaccinated2nddose)
        }
         
            
        var totalindividualsvaccinated=d[i].totaldosesadministered
        console.log(totalindividualsvaccinated)
        if(totalindividualsvaccinated!=="" ){
            var res=d[i].updatetimestamp
            var date= res.slice(0, 5);
            ydate.push(date)
            xvaccinated.push(d[i].totaldosesadministered)
        }
        
    }
    var ctx = document.getElementById('vaccinatedchart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ydate,
        datasets: [{
            label: 'Vaccinated',
            data: xvaccinated,
            backgroundColor: [
                'rgba(255, 99, 132, 1)'
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
    var ctx = document.getElementById('frontlinechart').getContext('2d');

    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Atleast one dose',
                data: xfrontline1stdose,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.3)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                // this dataset is drawn below
                order: 2
            }, {
                label: 'Fully Vaccinated',
                data: xfrontline2nddose,
                type: 'line',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)'
                ],
                // this dataset is drawn on top
                order: 1
            }],
            labels: yfrontlinedate
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }, 
        });
    var ctx = document.getElementById('healthworkerchart').getContext('2d');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Atleast one dose',
                data: xhealthworker1stdose,
                backgroundColor: [
                    
                    'rgba(255, 159, 64, 0.3)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                // this dataset is drawn below
                order: 2
            }, {
                label: 'Fully Vaccinated',
                data: xhealthworker2nddose,
                type: 'line',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)'
                ],
                // this dataset is drawn on top
                order: 1
            }],
            labels: yhealthworkerdate
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }, 
        });
})



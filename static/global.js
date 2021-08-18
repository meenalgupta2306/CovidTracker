import "https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"
const mapbox_token="pk.eyJ1IjoibWVlbmFsZ3VwdGEyMzA2IiwiYSI6ImNrb2R6cW84czA3aDMycHM5dXVoZTl4YTAifQ.G79VPbeZSlPQ5VqXGnHOJQ";
mapboxgl.accessToken =mapbox_token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 0.7,
    center: [50,20]
    });

const getColor=count =>{
    if(count>=1000000){
        return "rgb(75, 0, 0)";
    }
    if(count>=100000 && count <1000000)
        return "rgb(178, 0, 0)"
    if(count>1000 && count<100000)
        return "rgb(216, 216, 16)"
    else
        return "rgb(3, 2, 255)"
}

fetch('https://api.covid19api.com/summary')
/* fetch('/data.json') */
.then((apidata)=>{
    console.log(apidata)
    return apidata.json();
})
 .then((data) =>{
     console.log(data.Countries)
    var globaldate=data.Global.Date
    globaldate=globaldate.toString();
    var res = globaldate.slice(0, 10);
    document.getElementById("globaldate").innerHTML=res
    var TotalConfirmed=data.Global.TotalConfirmed
    var TotalDeaths=data.Global.TotalDeaths
    var TotalRecovered=data.Global.TotalRecovered
    if(TotalRecovered!=0 || TotalDeaths!=0 || TotalConfirmed!=0){
        document.getElementById("totalrecovered").innerHTML=TotalRecovered
        document.getElementById("totaldeath").innerHTML=TotalDeaths
        document.getElementById("totalconfirmed").innerHTML=TotalConfirmed
    }
    if(TotalRecovered==0)
        document.getElementById("recchange").style.display="none";
    if(TotalDeaths==0)
        document.getElementById("deathchange").style.display="none";
    if(TotalConfirmed==0)
        document.getElementById("conchange").style.display="none";
    var country=data.Countries
    /* console.log(country) */
    var a=[
        {"Lat": 33.93911, "Long_": 67.709953 },{"Lat": 41.1533, "Long_": 20.1683 },{"Lat": 28.0339, "Long_": 1.6596 },{"Lat": 42.5063, "Long_": 1.5218 },{"Lat": -11.2027, "Long_": 17.8739 },{"Lat": 17.0608, "Long_": -61.7964 },{"Lat": -38.4161, "Long_": -63.6167 },{"Lat": 40.0691, "Long_": 45.0382 },{"Lat": -25, "Long_": 133 },{"Lat": 47.5162, "Long_": 14.5501 },{"Lat": 40.1431, "Long_": 47.5769 },{"Lat": 25.025885, "Long_":-78.035889 },{"Lat": 26.0275, "Long_": 50.55 },{"Lat": 23.685, "Long_": 90.3563 },{"Lat": 13.1939, "Long_": -59.5432 },{"Lat": 53.7098, "Long_":27.9534 },{"Lat": 50.8333, "Long_": 4.469936 },{"Lat": 17.1899, "Long_":-88.4976 },
        {"Lat": 9.3077, "Long_":2.3158 },{"Lat": 27.5142, "Long_": 90.4336 },{"Lat": -16.2902, "Long_": -63.5887 },{"Lat": 43.9159, "Long_": 17.6791 },{"Lat": -22.3285, "Long_":24.6849 },{"Lat": -14.235, "Long_": -51.9253 },{"Lat": 4.5353, "Long_": 114.7277 },{"Lat": 42.7339, "Long_":25.4858 },{"Lat": 12.2383, "Long_":-1.5616 },{"Lat": -3.3731, "Long_": 29.9189 },{"Lat": 11.55, "Long_": 104.9167 },{"Lat": 3.848, "Long_": 11.5021 },{"Lat": 60.001, "Long_":-95.001 },{"Lat": 6.6111, "Long_": 20.9394 },{"Lat": 15.4542, "Long_": 18.7322 },{"Lat": -35.6751, "Long_": -71.543 },
        {"Lat": 30.5928, "Long_":114.3055 },{"Lat": 4.5709, "Long_": -74.2973 },{"Lat": -11.6455, "Long_": 43.3333 },{"Lat": -0.228, "Long_": 15.8277 },{"Lat": -4.0383, "Long_": 21.7587 },{"Lat": 9.7489, "Long_":-83.7534 },{"Lat": 7.54, "Long_": -5.5471 },{"Lat": 45.1, "Long_": 15.2 },{"Lat": 21.521757, "Long_":-77.781167 },{"Lat": 35.1264, "Long_": 33.4299 },{"Lat": 49.8175, "Long_": 15.473 },{"Lat": 56.2639, "Long_": 9.5018 },{"Lat": 41.6086, "Long_": 21.7453 },{"Lat": 11.8251, "Long_": 42.5903 },{"Lat": 15.415, "Long_": -61.371 },{"Lat": 18.7357, "Long_": -70.1627 },{"Lat": -1.8312, "Long_": -78.1834 },{"Lat": 26.820553, "Long_": 30.802498 },
        {"Lat": 13.7942, "Long_": -88.8965 },{"Lat": 1.6508, "Long_": 10.2679 },{"Lat": 15.1794, "Long_": 39.7823 },{"Lat": 58.5953, "Long_":25.0136 },{"Lat": -26.5225, "Long_": 31.4659 },{"Lat": 9.145, "Long_":40.4897 },{"Lat": -17.7134, "Long_": 178.065 },{"Lat": 61.9241, "Long_": 25.7482 },{"Lat": 46.2276, "Long_": 2.2137 },{"Lat": -0.8037, "Long_": 11.6094 },{"Lat": 13.4432, "Long_": -15.3101 },{"Lat": 42.3154, "Long_":43.3569 },{"Lat": 51.165691, "Long_": 10.451526 },{"Lat": 7.9465, "Long_": -1.0232 },{"Lat": 39.0742, "Long_":21.8243 },{"Lat": 12.1165, "Long_": -61.679 },{"Lat": 15.7835, "Long_": -90.2308 },{"Lat": 9.9456, "Long_": -9.6966 },
        {"Lat": 11.8037, "Long_": -15.1804 },{"Lat": 4.860416, "Long_": -58.93018 },{"Lat": 18.9712, "Long_": -72.2852 },{"Lat": 41.9029, "Long_": 12.4534 },{"Lat": 15.2, "Long_":-86.2419 },{"Lat": 47.1625, "Long_": 19.5033 },{"Lat": 64.9631, "Long_": -19.0208 },{"Lat": 20.593684, "Long_": 78.96288 },{"Lat": -0.7893, "Long_": 113.9213 },{"Lat": 32.427908, "Long_": 53.688046 },{"Lat": 33.223191, "Long_": 43.679291 },{"Lat": 53.1424, "Long_": -7.6921 },{"Lat": 31.046051, "Long_" :34.851612 },{"Lat": 41.8719, "Long_": 12.5674 },{"Lat": 18.1096, "Long_": -77.2975 },{"Lat": 36.204824, "Long_": 138.252924 },{"Lat": 31.24, "Long_": 36.51 },{"Lat": 48.0196, "Long_": 66.9237 },
        {"Lat": -0.0236, "Long_": 37.9062 },{"Lat": 35.907757, "Long_" :127.766922 },{"Lat": 42.602636, "Long_": 20.902977 },{"Lat": 29.31166, "Long_": 47.481766 },{"Lat": 41.20438, "Long_": 74.766098 },{"Lat": 19.85627, "Long_": 102.495496 },{"Lat": 56.8796, "Long_": 24.6032 },{"Lat": 33.8547, "Long_": 35.8623 },{"Lat": -29.61, "Long_" :28.2336 },{"Lat": 6.428055, "Long_": -9.429499 },{"Lat": 26.3351, "Long_": 17.228331 },{"Lat": 47.14, "Long_": 9.55 },{"Lat": 55.1694, "Long_": 23.8813 },{"Lat": 49.8153, "Long_": 6.1296 },{"Lat": null, "Long_": null },{"Lat": -18.766947, "Long_": 46.869107 },{"Lat": -13.2543, "Long_": 34.3015 },{"Lat": 4.210484 ,"Long_": 101.975766 },
        {"Lat": 3.2028, "Long_": 73.2207 },{"Lat": 17.570692, "Long_": -3.996166 },{"Lat": 35.9375, "Long_": 14.3754 },{"Lat": 7.1315, "Long_": 171.1845 },{"Lat": 21.0079, "Long_": -10.9408 },{"Lat": -20.348404, "Long_": 57.552152 },{"Lat": 23.6345 ,"Long_": -102.5528 },{"Lat": 7.4256, "Long_" :150.5508 },{"Lat": 47.4116 ,"Long_": 28.3699 },{"Lat": 43.7333, "Long_": 7.4167 },{"Lat": 46.8625 ,"Long_": 103.8467 },{"Lat": 42.708678, "Long_": 19.37439 },{"Lat": 31.7917, "Long_": -7.0926 },{"Lat": -18.665695, "Long_": 35.529562 },{"Lat": -22.9576, "Long_" :18.4904 },{"Lat": 28.1667, "Long_": 84.25 },{"Lat": 52.3167, "Long_": 5.55 },{"Lat": -40.9006, "Long_":174.886 },
        {"Lat": 12.865416, "Long_": -85.207229 },{"Lat": 17.607789,"Long_": 8.081666 },{"Lat": 9.082, "Long_":8.6753 },{"Lat": 41.6086, "Long_": 21.7453 },{"Lat": 60.472, "Long_": 8.4689 },{"Lat": 21.512583,"Long_" :55.923255 },{"Lat": 30.3753, "Long_": 69.3451 },{"Lat": 8.538, "Long_" :-80.7821 },{"Lat": -6.314993,"Long_": 143.95555 },{"Lat": -23.4425,"Long_": -58.4438 },{"Lat": -9.19 ,"Long_": -75.0152 },{"Lat": 12.879721, "Long_":121.774017 },{"Lat": 51.9194, "Long_": 19.1451 },{"Lat": 39.3999, "Long_": -8.2245 },{"Lat": 25.3548, "Long_": 51.1839 },{"Lat": 45.9432, "Long_": 24.9668 },{"Lat": 61.524, "Long_": 105.3188 },{"Lat": -1.9403, "Long_": 29.8739 },
        {"Lat": 17.357822, "Long_": -62.782998 },{"Lat": 13.9094, "Long_": -60.9789 },{"Lat": 12.9843, "Long_": -61.2872 },{"Lat": -13.759, "Long_" :-172.1046 },{"Lat": 43.9424, "Long_": 12.4578 },{"Lat": 0.1864,"Long_": 6.6131 },{"Lat": 23.885942, "Long_": 45.079162 },{"Lat": 14.4974, "Long_": -14.4524 },{"Lat": 44.0165, "Long_": 21.0059 },{"Lat": -4.6796, "Long_": 55.492 },{"Lat": 8.460555, "Long_": -11.779889 },{"Lat": 1.2833, "Long_": 103.8333 },{"Lat": 48.669, "Long_" :19.699 },{"Lat": 46.1512, "Long_" :14.9955 },{"Lat": -9.6457, "Long_" :160.1562 },{"Lat": 5.152149,"Long_": 46.199616 },{"Lat": -30.5595,"Long_" :22.9375 },{"Lat": 6.877, "Long_" :31.307 },
        {"Lat": 40.463667, "Long_": -3.74922 },{"Lat": 7.873054, "Long_": 80.771797 },{"Lat": 12.8628, "Long_": 30.2176 },{"Lat": 3.9193,"Long_": -56.0278 },{"Lat": 60.1282,"Long_" :18.6435 },{"Lat": 46.8182, "Long_": 8.2275 },{"Lat": 34.802075, "Long_": 38.996815 },{"Lat": 23.7, "Long_": 121 },{"Lat": 38.861, "Long_": 71.2761 },{"Lat": -6.369028, "Long_":34.888822 },{"Lat": 15.870032, "Long_": 100.992541 },{"Lat": -8.874217, "Long_" :125.727539 },{"Lat": 8.6195, "Long_" :0.8248 },{"Lat": 10.6918, "Long_": -61.2225 },{"Lat": 33.886917, "Long_": 9.537499 },{"Lat": 38.9637 ,"Long_": 35.2433 },{"Lat": 40, "Long_": -100 },{"Lat": 1.373333 ,"Long_": 32.290275 },
        {"Lat": 48.3794, "Long_": 31.1656 },{"Lat": 23.424076, "Long_": 53.847818 },{"Lat": 55, "Long_" :-3 },{"Lat": -32.5228, "Long_": -55.7658 },{"Lat": 41.377491, "Long_": 64.585262 },{"Lat": -15.3767, "Long_":166.9592 },{"Lat": 6.4238, "Long_": -66.5897 },{"Lat": 14.058324, "Long_": 108.277199 },{"Lat": 31.9522 ,"Long_": 35.2332 },{"Lat": 15.552727 ,"Long_": 48.516388 },{"Lat": -13.133897 ,"Long_": 27.849332 },{"Lat": -19.015438,"Long_": 29.154587  }     
    ]
    var l=a.length
    for(var i=0;i<l;i++){
        var TotalConfirmed=country[i].TotalConfirmed
        var latitude=a[i].Lat;
        var longitude=a[i].Long_;
        var marker = new mapboxgl.Marker({
            color: getColor(TotalConfirmed)
        }).setLngLat([longitude, latitude])
            .addTo(map); 
        }
        
        let table = document.querySelector("table");
        var l = Object.keys(data.Countries).length;
        var d=[]
        for(i=0;i<l;i++){
            d.push(data.Countries[i])
        }
        console.log(d)
        for(let element of d)
        {
            let row = table.insertRow();
            for (let k in element) {
                if(k=="TotalConfirmed"||k=="TotalDeaths"|| k=="Country" || k=="TotalRecovered" || k=="Date"){
                let cell = row.insertCell();
                if(element[k]!=0){
                    let text = document.createTextNode(element[k]);
                    cell.appendChild(text);
                }
                else{
                    let text = document.createTextNode("N/A");
                    cell.appendChild(text);
                }
                }
                        
            }
        }
        var search = document.getElementById('myInput');
        search.onkeyup = function(){
            // Declare variables
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("table");
            tr = table.getElementsByTagName("tr");
          
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
          }
    })
    .catch((error)=> {
        console.log(error)
    });
    
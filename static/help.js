var ss
fetch('https://api.rootnet.in/covid19-in/contacts')
.then((apidata)=>{
    return apidata.json();
})
.then((rsp) =>{
    var myLink = document.getElementById('mylink');
    var fblink = document.getElementById('fb');
    var arogyalink = document.getElementById('arogya');
    var twitterlink = document.getElementById('twitter');
    email=rsp.data.contacts.primary.email
    document.getElementById("mail").innerHTML=email
    fblink.onclick = function(){
        window.open("https://www.facebook.com/MoHFWIndia")
    }
    twitterlink.onclick = function(){
        window.open("https://twitter.com/MoHFW_INDIA")
    }
    arogyalink.onclick = function(){
        window.open("https://www.mygov.in/aarogya-setu-app/")
    }
        
    myLink.onclick = function(){
        var l = Object.keys(rsp.data.contacts.regional).length;
        ss=document.getElementById("text").value;
        words = ss.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        words=words.join(" ");
        for(i=0;i<l;i++)
        {
        
        if(words===rsp.data.contacts.regional[i].loc){
            d=rsp.data.contacts.regional[i].number
            document.getElementById("number").innerHTML=d
        }
    }
}
    
})

.catch((error)=> {
    console.log(error)
});
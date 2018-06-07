let json=[{
    "total": 30,
    "success": true,
    "rows": [{
        "hometeam": "水原",
        "guestteam": "浦和",
        "bf": "1:0",
        "status": "38'",
        "homephoto": "images/pic01.jpg",
        "guestphoto": "images/pic02.jpg",
        "homeranking": 3,
        "guestranking": 5,
        "gamename": "亚冠",
        "gameStatus":"进行中"
    },{
        "hometeam": "三星",
        "guestteam": "红钻",
        "bf": "0:0",
        "status": "15:00开赛'",
        "homephoto": "images/pic02.jpg",
        "guestphoto": "images/pic01.jpg",
        "homeranking": 1,
        "guestranking": "2",
        "gamename": "欧冠",
        "gameStatus":"未开赛"
    },{
        "hometeam": "水原三星",
        "guestteam": "浦和红钻",
        "bf": "2:0",
        "status": "17:00开赛'",
        "homephoto": "images/pic01.jpg",
        "guestphoto": "images/pic02.jpg",
        "homeranking":5,
        "guestranking": "2",
        "gamename": "欧冠",
        "gameStatus":"未开赛"
    },{
        "hometeam": "水星",
        "guestteam": "浦钻",
        "bf": "3:1",
        "status": "13:00开赛'",
        "homephoto": "images/pic02.jpg",
        "guestphoto": "images/pic01.jpg",
        "homeranking": 4,
        "guestranking": "2",
        "gamename": "欧冠",
        "gameStatus":"未开赛"
    },{
        "hometeam": "原三星",
        "guestteam": "浦和红",
        "bf": "4:4",
        "status": "23:00开赛'",
        "homephoto": "images/pic01.jpg",
        "guestphoto": "images/pic02.jpg",
        "homeranking": 1,
        "guestranking": "2",
        "gamename": "欧冠",
        "gameStatus":"未开赛"
    }]
}];
for(let i=0;i<json[0].rows.length;i++){
    let {hometeam,guestteam,bf,status,homephoto,guestphoto,homeranking,guestranking,gamename,gameStatus}=json[0].rows[i];
    console.log(hometeam,guestteam,bf,status,homephoto,guestphoto,homeranking,guestranking,gamename,gameStatus);
    var h1=document.createElement("li");
    document.getElementsByTagName("ul")[0].appendChild(h1);
    var h2=document.createElement("span")
    h1.appendChild(h2);
    h2.innerHTML=hometeam
    var h3=document.createElement("span")
    h1.appendChild(h3);
    h3.innerHTML=guestteam
    var h4=document.createElement("span")
    h1.appendChild(h4);
    var h12=document.createElement("img")
    h4.appendChild(h12);
    h12.src=homephoto
    var h5=document.createElement("span")
    h1.appendChild(h5);
    h5.innerHTML=status
    var h6=document.createElement("span")
    h1.appendChild(h6);
    h6.innerHTML=bf
    var h7=document.createElement("span")
    h1.appendChild(h7);
    h7.innerHTML=gameStatus
    var h8=document.createElement("span")
    h1.appendChild(h8);
    h8.innerHTML=homeranking
    var h9=document.createElement("span")
    h1.appendChild(h9);
    h9.innerHTML=guestranking
    var h10=document.createElement("span")
    h1.appendChild(h10);
    h10.innerHTML=gamename
    var h11=document.createElement("span")
    h1.appendChild(h11);
    var h13=document.createElement("img")
    h11.appendChild(h13);
    h13.src=guestphoto

}


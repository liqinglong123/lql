let json=[
    {
        "name":"小白",
        "age":10,
        "city":"北京"
    },
    {
        "name":"小红",
        "age":10,
        "city":"湖南"
    },
    {
        "name":"小黑",
        "age":20,
        "city":"山西"
    }
];
for(let i=0;i<json.length;i++){
    let name=json[i].name,age=json[i].age,city=json[i].city;
    console.log(name,age,city);
}

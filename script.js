const data = {
    name:"saro",
    lastName:"farzamnia",
    age:15,
    family: {
        fatherAge:38,
        sisterName:"Benita"
    },
    carMark: ["KMC", "Saipa"],
}

console.log(data);

const newData = {
    adrees:{
        country:"IR",
        provinces:{
            city:"Boukan"
        }
    }
}
const newData2="adress";
const data2={
    [newData2]:{
        adrees:{
            country:"IR",
            provinces:{
                city:"Boukan"
            }
        }
    },
}
console.log(data2);

const infoJson =`
{
    "name"     :"Aleix Melon",
    "id"       :"E00245",
    "Role"      :["Dev","DBA"],
    "Age"       :  23,
    "doj"       : "11-12-2019",
    "married"   :false,
    "address"   :{
        "street"  :"32, Laham St.",
        "city"    :"Innsbruck",
        "country" :"Austria"
    },
    "referred-by" : "E0012"
}
`
console.log(infoJson);

console.log(`======== Convert JSON to Object ===========`);
const infoObject=JSON.parse(infoJson);
console.log(typeof infoObject);
console.table(infoObject);
console.log(`======== Log on console role ===========`);
console.log(infoObject["Role"][0])

console.log(infoObject ["name"].split(" ")[1])
console.log(infoObject ["doj"].split("-")[2])


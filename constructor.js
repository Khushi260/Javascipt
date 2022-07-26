
function Bellboy (name, age, city, language, haspermit){
    this.name-=name;
    this.agr=age;
    this.city=city;
    this.haspermit=haspermit;
    this.language=language;
}

var bellboy1 = new Bellboy("Timmy",19,"Texas",["english","german","french"],"yes");

console.log(bellboy1.name);

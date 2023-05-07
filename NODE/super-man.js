class superhero {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        return this.name = name;
    }
}
module.exports= new superhero("batsman");


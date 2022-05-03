const Dinosaur = require("./dinosaur");

const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectOfDinos = [];
    
}

Park.prototype.addDino = function(Dino){
    this.collectOfDinos.push(Dino);
}

Park.prototype.countDinos = function(){
    return this.collectOfDinos.length;
}

Park.prototype.removeDino = function(dinoName){
    const indexOfDino = this.collectOfDinos.indexOf(dinoName);
    this.collectOfDinos.splice(indexOfDino, 1);
}

Park.prototype.findMostPopularDino = function(){
    //go through the array items in this.collectOfDinos
    
        return Math.max(Dinosaur.guestsAttractedPerDay);
    
    //look at the guestsAttractedPerDay
    //compare the guestsAttractedPerDay 
    //select the biggest guestsAttractedPerDay
    //return the item of this.collectOfDinos
}

Park.prototype.findDinosFromSpecies = function(wantedSpecies){
    
    //go through the array items in this.collectOfDinos
    //look at the species
    //compare it with wantedSpecies
    //make a new array const dinosFromSpecies = [] and return it
    
}

Park.prototype.calcNumOfVisitorsPerDay = function(){
    //go through the array items in this.collectOfDinos
    //look at the guestsAttractedPerDay
    //add up the guestsAttractedPerDay of all the dinosaurs in this.collectOfDinos
    return 500;
}

Park.prototype.calcNumOfVisitorsPerYear = function(){
    return this.calcNumOfVisitorsPerDay() * 365;
}

Park.prototype.calcTotalRevenuePerYear = function(){
    return this.calcNumOfVisitorsPerYear() * this.ticketPrice;
    //take calcNumOfVisitorsPerYear and multiply by this.ticketPrice
        //return the result
}

// const dinosaur_1 = new Dinosaur('Albertosaurus', 'herbivore', 50);
// const dinosaur_2 = new Dinosaur('T-Rex', 'carnivore', 150);
// const dinosaur_3 = new Dinosaur('Triceratops', 'omnivore', 80);
// const dinosaur_4 = new Dinosaur('Pterodactyl', 'herbivore', 60);

module.exports = Park;
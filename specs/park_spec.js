const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park;
  let dinosaur_1;
  let dinosaur_2;
  let dinosaur_3;
  let dinosaur_4;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dinosaur_1 = new Dinosaur('Albertosaurus', 'herbivore', 50);
    dinosaur_2 = new Dinosaur('T-Rex', 'carnivore', 150);
    dinosaur_3 = new Dinosaur('Triceratops', 'omnivore', 80);
    dinosaur_4 = new Dinosaur('Pterodactyl', 'herbivore', 60);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    park.collectOfDinos = [dinosaur_1, dinosaur_2, dinosaur_3, dinosaur_4]
    const actual = park.collectOfDinos;
    assert.deepEqual(actual, [dinosaur_1, dinosaur_2, dinosaur_3, dinosaur_4]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur_1);
    const actual = park.countDinos();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur_1);
    park.addDino(dinosaur_2);
    park.removeDino(dinosaur_2);
    const expected = [dinosaur_1];
    const actual = park.collectOfDinos;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.findMostPopularDino;
    assert.strictEqual(actual, dinosaur_2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){

  });

  it('should be able to calculate the total number of visitors per day', function(){
    actual = park.calcNumOfVisitorsPerDay()
    assert.strictEqual(actual, 500);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    actual = park.calcNumOfVisitorsPerYear();
    assert.strictEqual(actual, 182500);
  });

  it('should be able to calculate total revenue for one year', function(){
    actual = park.calcTotalRevenuePerYear();
    assert.strictEqual(actual, 1825000);
  });

});

var sharkCreator = createAnimal("Shark")
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
function bumpCounter(){
  let counter = 0;

  function getBumps(){
    return counter;
  }

  function addBump(){
    counter++;
  }

  return {
    getBumps,
    addBump
  }
}

function createAnimal(animalType){
  return function (deadlyDevice){
    return { animalType: animalType, deadlyDevice: deadlyDevice}
  }
}

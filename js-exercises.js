//Voting Station Calculation
const chooseStations = function(stations) {
  let goodStations = [];
  for(let station of stations){
    if(station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre'))
      goodStations.push(station[0]);
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

//X Marks the Perfect Shot
const finalPosition = function (moves) {
  let position = [0,0];
  for(let move of moves) {
    switch(move){
      case 'north':
        position[1] += 1;
        break;
      case 'east':
        position[0] += 1;
        break;
      case 'south':
        position[1] -= 1;
        break;
      case 'west':
        position[0] -= 1;
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);

//Age calculator
const ageCalculator = function(name, yearOfBirth, currentYear){
  if(currentYear - yearOfBirth != 1)
    return `${name} is ${currentYear - yearOfBirth} years old.`;
  else
    return `${name} is ${currentYear - yearOfBirth} year old.`;
}

//How many hundreds
const howManyHundreds = function(bottles) {
  bottles > 0
  return Math.floor(bottles / 100);
}

//Area Calculators
const calculateRectangleArea = function (length, width){
  if(length >= 0 && width >= 0)
    return length * width;
  else return undefined;
};

const calculateTriangleArea = function (base, height){
  if(base >= 0 && height >=0)
    return base * height / 2;
  else return undefined;
};

const calculateCircleArea = function (radius){
  if(radius >= 0)
    return Math.PI * radius ** 2;
  else return undefined;
};

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
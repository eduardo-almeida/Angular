const message = 'Help me, Obi-wan Kenobi';
console.log(message);

let episode = 4;
console.log('this is episode ' + episode);
episode = episode + 1;
console.log('O Novo é o ' + episode);

let favoriteDroid;
favoriteDroid = 'R2-D2';
console.log('My favodite droid is ' + favoriteDroid);

const isEnoughToBeatMF = function (parsecs: number): boolean {
  return parsecs < 12;
};

const distance = 10;
console.log(
  `Is ${distance} parsecs enough to beat MIllenium Falcon? ${
    isEnoughToBeatMF(distance) ? 'Yes' : 'No'
  }`,
);

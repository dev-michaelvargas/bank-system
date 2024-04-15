'use strict';

const calcAmplitude = function (temps) {
  let max = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof curtemp !== 'number') continue;
    if (temps[i] > max) {
      max = temps[i];
    }
  }

  console.log(max);
};

calcAmplitude([2, 4, 7]);

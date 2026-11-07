const tempCelsius = [30, 22.3, 40.5, 50, 44, 38.7, 12.6];

let tempFahrenheit = tempCelsius
  .map(function (temp) {
    return (temp * 9) / 5 + 32;
  })
  .forEach(function (temp) {
    console.log(`Temperatura ${temp}F`);
  });

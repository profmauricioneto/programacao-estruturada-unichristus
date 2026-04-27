let grausCelsius = [15, 18, 33, 35, -7, -20, 28];

function converterCelsiusParaFahrenheit() {
  let grausFahrenheit = grausCelsius
    .map(function (grau) {
      return (grau * 9) / 5 + 32;
    })
    .forEach(function (fah) {
      console.log(`Fahrenheit = ${fah}`);
    });
}

converterCelsiusParaFahrenheit();

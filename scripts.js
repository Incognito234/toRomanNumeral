let numbersAndNumerals = [
  {
    number: 1000,
    romanNumeral: 'M'
  },
  {
    number: 900,
    romanNumeral: 'CM'
  },
  {
    number: 500,
    romanNumeral: 'D'
  },
  {
    number: 400,
    romanNumeral: 'CD'
  },
  {
    number: 100,
    romanNumeral: 'C'
  },
  {
    number: 90,
    romanNumeral: 'XC'
  },
  {
    number: 50,
    romanNumeral: 'L'
  },
  {
    number: 40,
    romanNumeral: 'XL'
  },
  {
    number: 10,
    romanNumeral: 'X'
  },
  {
    number: 9,
    romanNumeral: 'IX'
  },
  {
    number: 5,
    romanNumeral: 'V'
  },
  {
    number: 4,
    romanNumeral: 'IV'
  },
  {
    number: 1,
    romanNumeral: 'I'
  },
];

function convert(arabicNumber) {
  let romanLetter = '';

  for( let i = 0; i < numbersAndNumerals.length; i++ ) {
    if(numbersAndNumerals[i].number <= arabicNumber) {
      arabicNumber = arabicNumber - numbersAndNumerals[i].number;
      romanLetter = romanLetter + numbersAndNumerals[i].romanNumeral;
      i--;

    }
  }
  document.getElementById('result').textContent = romanLetter;
};

document.getElementById('convert').addEventListener('click', function(e) {
  let number = document.getElementById('toConvert').value;

  convert(number);
})
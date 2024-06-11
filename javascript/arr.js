function exponent(base, power) {
    if (power === 0) {
      return 1;
    } else if (power % 2 === 0) {
      
      let temp = exponent(base, power / 2);
      return temp * temp;
    } else {
      
      return base * exponent(base, power - 1);
    }
  }

  console.log(exponent(4, 2));



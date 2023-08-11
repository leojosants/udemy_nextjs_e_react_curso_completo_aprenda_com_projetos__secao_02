export function mega(amount = 6, numbers = []) {
  amount = +amount;

  if (amount < 6 || amount > 60) {
    throw 'Inválid amount!'
  }

  if (numbers.length === amount) {
    return numbers.sort((number1, number2) => number1 - number2);
  }

  const randomNumber = parseInt(Math.random() * 60) + 1;

  if (!numbers.includes(randomNumber)) {
    return mega(amount, [...numbers, randomNumber]);
  } else {
    return mega(amount, numbers);
  }
}
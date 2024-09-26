form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.getElementById('height').value);
// const weight = parseInt(document.getElementById('weight').value);
result = document.querySelector('.results');
msg = document.getElementById('message');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  if (height < 0 || isNaN(height) || height === '') {
    result.innerHTML = `please enter a valid height ${height}`;
  } else if (weight < 0 || isNaN(weight) || weight === '') {
    result.innerHTML = `please enter a valid weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> ${bmi}</span>`;
    // Under Weight = Less than 18.6
    // Normal Range = 18.6 and 24.9
    // Overweight = Greater than 24.9
    if (bmi < 18.6) {
      msg.innerHTML = `<p>Under Weight</p>`;
    } else if (bmi < 24.9) {
      msg.innerHTML = `<span>Normal Range</span>`;
    } else {
      msg.innerHTML = `<p>Overweight</p>`;
    }
  }
});

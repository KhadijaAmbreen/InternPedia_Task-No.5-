
const temp = () => {
    let degree = document.getElementById('deg').value;
    let u = document.getElementById('unit').value;
    let result;
  
    if (u === 'C') {
      result = parseFloat((degree - 32) * 5 / 9);
    } else {
      result = parseFloat((degree * 9 / 5) + 32);
    }
  
    document.getElementById('results').value = result.toFixed(2);
  }
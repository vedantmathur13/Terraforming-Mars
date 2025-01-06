function calculateWeight() {
    var earthWeight = parseFloat(document.getElementById('earthWeight').value);
    
    if (isNaN(earthWeight) || earthWeight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }
  
    var gravityEarth = 9.81;  // Earth's gravity in m/s²
    var gravityMars = 3.71;   // Mars' gravity in m/s²
    var weightMars = earthWeight * (gravityMars / gravityEarth);
    
    document.getElementById('result').innerHTML = 
      "Your weight on Mars would be: " + weightMars.toFixed(2) + " kg";
  }
  
document.getElementById('calculatorForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const safetyLifespanYears = 7; // Lifespan of safety solution in years

  const safetyCostPerSqMeter = parseFloat(document.getElementById('safetyCostPerSqMeter').value);
  const safetySqMeters = parseFloat(document.getElementById('safetySqMeters').value);
  const paintedSqMeters = parseFloat(document.getElementById('paintedSqMeters').value);
  const paintedCostPerSqMeter = parseFloat(document.getElementById('paintedCostPerSqMeter').value);
  const paintedDuration = parseInt(document.getElementById('paintedDuration').value);

  const safetyTotalCost = safetyCostPerSqMeter * safetySqMeters;
  const paintedTotalCost = calculatePaintedTotalCost(paintedSqMeters, paintedCostPerSqMeter, paintedDuration, safetyLifespanYears);

  const safetyTotalSavings = paintedTotalCost - safetyTotalCost;
  const safetyPercentageSavings = (safetyTotalSavings / paintedTotalCost) * 100;

  document.getElementById('results').innerHTML = `
    <h2>ROI and Square Meter Cost Result</h2>
    <p><strong>Safety Solution Cost:</strong> £${safetyTotalCost.toFixed(2)}</p>
    <p><strong>Painted Solution Cost (Over 7 Years):</strong> £${paintedTotalCost.toFixed(2)}</p>
    <p><strong>Total Savings:</strong> £${safetyTotalSavings.toFixed(2)}</p>
    <p><strong>Percentage Savings:</strong> ${safetyPercentageSavings.toFixed(2)}%</p>
  `;
});

document.getElementById('costPerSqMeterForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const initialCost = parseFloat(document.getElementById('initialCost').value);
  const areaSqMeters = parseFloat(document.getElementById('areaSqMeters').value);

  const costPerSqMeter = initialCost / areaSqMeters;

  document.getElementById('results').innerHTML = `
    <h2>Cost per Square Meter Result</h2>
    <p><strong>Cost per Square Meter:</strong> £${costPerSqMeter.toFixed(2)}</p>
  `;
});

function calculatePaintedTotalCost(paintedSqMeters, paintedCostPerSqMeter, paintedDuration, safetyLifespanYears) {
  const monthsInOneYear = 12;
  const paintedCostPerYear = paintedCostPerSqMeter * paintedSqMeters * (monthsInOneYear / paintedDuration);
  const paintedTotalCost = paintedCostPerYear * safetyLifespanYears;
  return paintedTotalCost;
}

// JavaScript to handle showing and hiding the table
document.getElementById('toggleTableButton').addEventListener('click', function () {
  const table = document.getElementById('projectionTable');
  if (table.style.display === 'none') {
    table.style.display = 'table';
  } else {
    table.style.display = 'none';
  }
});


// ==========================================
//  Title:  ROI and Square Meter Cost Calculator
//  Author: Cameron Melville
//  Date:   25 July 2023 17:37
// ========================================== 

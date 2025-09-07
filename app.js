// Application data
const maintenanceData = {
  "wings": {
    "A": {
      "series": "All",
      "area": 1714.82,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 2572231.8,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 1607.67,
          "sinking_fund": 535.92,
          "water_charges": 2000.0,
          "service_charges": 3000.0,
          "total": 7143.58,
          "taps": 4
        },
        "2025-26": {
          "rm_fund": 1607.67,
          "sinking_fund": 535.92,
          "water_charges": 2710.0,
          "service_charges": 3494.75,
          "total": 8348.33,
          "taps": 5
        },
        "Projected": {
          "rm_fund": 1607.67,
          "sinking_fund": 535.92,
          "water_charges": 2140.0,
          "service_charges": 3236.0,
          "total": 7519.58,
          "taps": 5
        }
      }
    },
    "B": {
      "series": "01,02",
      "area": 1371.25,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 2056881.6,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 1285.58,
          "sinking_fund": 428.5,
          "water_charges": 1500.0,
          "service_charges": 3000.0,
          "total": 6214.08,
          "taps": 3
        },
        "2025-26": {
          "rm_fund": 1285.58,
          "sinking_fund": 428.5,
          "water_charges": 2168.0,
          "service_charges": 3494.75,
          "total": 7376.83,
          "taps": 4
        },
        "Projected": {
          "rm_fund": 1285.58,
          "sinking_fund": 428.5,
          "water_charges": 1712.0,
          "service_charges": 3236.0,
          "total": 6662.08,
          "taps": 4
        }
      }
    },
    "B.1": {
      "series": "03,04",
      "area": 923.96,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 1385941.8,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 866.25,
          "sinking_fund": 288.75,
          "water_charges": 1500.0,
          "service_charges": 3000.0,
          "total": 5655.0,
          "taps": 3
        },
        "2025-26": {
          "rm_fund": 866.25,
          "sinking_fund": 288.75,
          "water_charges": 1626.0,
          "service_charges": 3494.75,
          "total": 6275.75,
          "taps": 3
        },
        "Projected": {
          "rm_fund": 866.25,
          "sinking_fund": 288.75,
          "water_charges": 1284.0,
          "service_charges": 3236.0,
          "total": 5675.0,
          "taps": 3
        }
      }
    },
    "C": {
      "series": "01,02",
      "area": 1354.9,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 2032348.8,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 1270.25,
          "sinking_fund": 423.42,
          "water_charges": 1500.0,
          "service_charges": 3000.0,
          "total": 6193.67,
          "taps": 3
        },
        "2025-26": {
          "rm_fund": 1270.25,
          "sinking_fund": 423.42,
          "water_charges": 1626.0,
          "service_charges": 3494.75,
          "total": 6814.42,
          "taps": 3
        },
        "Projected": {
          "rm_fund": 1270.25,
          "sinking_fund": 423.42,
          "water_charges": 1284.0,
          "service_charges": 3236.0,
          "total": 6213.67,
          "taps": 3
        }
      }
    },
    "C.1": {
      "series": "03,04",
      "area": 864.67,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 1297010.4,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 810.67,
          "sinking_fund": 270.25,
          "water_charges": 1000.0,
          "service_charges": 3000.0,
          "total": 5080.92,
          "taps": 2
        },
        "2025-26": {
          "rm_fund": 810.67,
          "sinking_fund": 270.25,
          "water_charges": 1084.0,
          "service_charges": 3494.75,
          "total": 5659.67,
          "taps": 2
        },
        "Projected": {
          "rm_fund": 810.67,
          "sinking_fund": 270.25,
          "water_charges": 856.0,
          "service_charges": 3236.0,
          "total": 5172.92,
          "taps": 2
        }
      }
    },
    "D": {
      "series": "01,02",
      "area": 1160.79,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 1741183.2,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 1088.25,
          "sinking_fund": 362.75,
          "water_charges": 1500.0,
          "service_charges": 3000.0,
          "total": 5951.0,
          "taps": 3
        },
        "2025-26": {
          "rm_fund": 1088.25,
          "sinking_fund": 362.75,
          "water_charges": 1626.0,
          "service_charges": 3494.75,
          "total": 6571.75,
          "taps": 3
        },
        "Projected": {
          "rm_fund": 1088.25,
          "sinking_fund": 362.75,
          "water_charges": 1284.0,
          "service_charges": 3236.0,
          "total": 5971.0,
          "taps": 3
        }
      }
    },
    "D.1": {
      "series": "03,04",
      "area": 753.31,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 1129961.4,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 706.25,
          "sinking_fund": 235.42,
          "water_charges": 1000.0,
          "service_charges": 3000.0,
          "total": 4941.67,
          "taps": 2
        },
        "2025-26": {
          "rm_fund": 706.25,
          "sinking_fund": 235.42,
          "water_charges": 1084.0,
          "service_charges": 3494.75,
          "total": 5520.42,
          "taps": 2
        },
        "Projected": {
          "rm_fund": 706.25,
          "sinking_fund": 235.42,
          "water_charges": 856.0,
          "service_charges": 3236.0,
          "total": 5033.67,
          "taps": 2
        }
      }
    },
    "E": {
      "series": "1,6",
      "area": 1046.95,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 1570422.0,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 981.5,
          "sinking_fund": 327.17,
          "water_charges": 1500.0,
          "service_charges": 3000.0,
          "total": 5808.67,
          "taps": 3
        },
        "2025-26": {
          "rm_fund": 981.5,
          "sinking_fund": 327.17,
          "water_charges": 1626.0,
          "service_charges": 3494.75,
          "total": 6429.42,
          "taps": 3
        },
        "Projected": {
          "rm_fund": 981.5,
          "sinking_fund": 327.17,
          "water_charges": 1284.0,
          "service_charges": 3236.0,
          "total": 5828.67,
          "taps": 3
        }
      }
    },
    "E.1": {
      "series": "2,3,4,5,",
      "area": 735.98,
      "construction_cost_per_sqft": 1500.0,
      "total_construction_cost": 1103976.0,
      "maintenance_data": {
        "2024-25": {
          "rm_fund": 690.0,
          "sinking_fund": 230.0,
          "water_charges": 1000.0,
          "service_charges": 3000.0,
          "total": 4920.0,
          "taps": 2
        },
        "2025-26": {
          "rm_fund": 690.0,
          "sinking_fund": 230.0,
          "water_charges": 1084.0,
          "service_charges": 3494.75,
          "total": 5498.75,
          "taps": 2
        },
        "Projected": {
          "rm_fund": 690.0,
          "sinking_fund": 230.0,
          "water_charges": 856.0,
          "service_charges": 3236.0,
          "total": 5012.0,
          "taps": 2
        }
      }
    }
  },
  "bye_laws": {
    "rm_fund": "Bye-law 66.a.iii - Expenses on repairs and maintenance of the building/buildings of the Society : At the rate fixed at the general body from time to time, subject to the minimum of 0.75 percent per annum, of the construction cost of each flat for meeting expenses of normal recurring repairs.",
    "sinking_fund": "Bye-Law 13.c - The Sinking Fund at the rate decided at the meeting of the general body, subject to the minimum of 0.25 per cent per annum of the construction cost of each flat incurred during the construction of the building of the Society and certified by the Architect, excluding the proportionate cost of the land.",
    "water_charges": "Bye-law 66.a.ii - Water Charges : On the basis of total number and size of inlets provided in each flat.",
    "service_charges": "Bye-law 66.a.vi - Service Charges: Equally divided by number of flats / units."
  }
};

// Global variables
let overallChart, categoryChart, wingTrendChart;
let currentWing = 'A'; // Default to Wing A

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

function formatNumber(number) {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number);
}

function calculatePercentageChange(oldValue, newValue) {
  if (oldValue === 0) return 0;
  return ((newValue - oldValue) / oldValue * 100).toFixed(1);
}

// Updated chart creation functions to show individual wing data
function createOverallChart(wingKey) {
  const ctx = document.getElementById('overall-chart').getContext('2d');
  const wingData = maintenanceData.wings[wingKey];

  if (overallChart) {
    overallChart.destroy();
  }

  overallChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2024-25', '2025-26', 'Projected'],
      datasets: [{
        label: `Wing ${wingKey} Maintenance (₹)`,
        data: [
          wingData.maintenance_data['2024-25'].total,
          wingData.maintenance_data['2025-26'].total,
          wingData.maintenance_data['Projected'].total
        ],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return formatCurrency(context.raw);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '₹' + (value / 1000).toFixed(0) + 'K';
            }
          }
        }
      }
    }
  });
}

function createCategoryChart(wingKey) {
  const ctx = document.getElementById('category-chart').getContext('2d');
  const wingData = maintenanceData.wings[wingKey];

  if (categoryChart) {
    categoryChart.destroy();
  }

  categoryChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2024-25', '2025-26', 'Projected'],
      datasets: [
        {
          label: 'R&M Fund',
          data: [
            wingData.maintenance_data['2024-25'].rm_fund,
            wingData.maintenance_data['2025-26'].rm_fund,
            wingData.maintenance_data['Projected'].rm_fund
          ],
          backgroundColor: '#1FB8CD',
          borderColor: '#1FB8CD',
          borderWidth: 1
        },
        {
          label: 'Sinking Fund',
          data: [
            wingData.maintenance_data['2024-25'].sinking_fund,
            wingData.maintenance_data['2025-26'].sinking_fund,
            wingData.maintenance_data['Projected'].sinking_fund
          ],
          backgroundColor: '#FFC185',
          borderColor: '#FFC185',
          borderWidth: 1
        },
        {
          label: 'Water Charges',
          data: [
            wingData.maintenance_data['2024-25'].water_charges,
            wingData.maintenance_data['2025-26'].water_charges,
            wingData.maintenance_data['Projected'].water_charges
          ],
          backgroundColor: '#B4413C',
          borderColor: '#B4413C',
          borderWidth: 1
        },
        {
          label: 'Service Charges',
          data: [
            wingData.maintenance_data['2024-25'].service_charges,
            wingData.maintenance_data['2025-26'].service_charges,
            wingData.maintenance_data['Projected'].service_charges
          ],
          backgroundColor: '#ECEBD5',
          borderColor: '#ECEBD5',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + formatCurrency(context.raw);
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '₹' + (value / 1000).toFixed(0) + 'K';
            }
          }
        }
      }
    }
  });
}

function createWingTrendChart(wingKey) {
  const ctx = document.getElementById('wing-trend-chart').getContext('2d');
  const wingData = maintenanceData.wings[wingKey];

  if (wingTrendChart) {
    wingTrendChart.destroy();
  }

  wingTrendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2024-25', '2025-26', 'Projected'],
      datasets: [
        {
          label: 'R&M Fund',
          data: [wingData.maintenance_data['2024-25'].rm_fund, wingData.maintenance_data['2025-26'].rm_fund, wingData.maintenance_data['Projected'].rm_fund],
          borderColor: '#1FB8CD',
          backgroundColor: '#1FB8CD',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Sinking Fund',
          data: [wingData.maintenance_data['2024-25'].sinking_fund, wingData.maintenance_data['2025-26'].sinking_fund, wingData.maintenance_data['Projected'].sinking_fund],
          borderColor: '#FFC185',
          backgroundColor: '#FFC185',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Water Charges',
          data: [wingData.maintenance_data['2024-25'].water_charges, wingData.maintenance_data['2025-26'].water_charges, wingData.maintenance_data['Projected'].water_charges],
          borderColor: '#B4413C',
          backgroundColor: '#B4413C',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Service Charges',
          data: [wingData.maintenance_data['2024-25'].service_charges, wingData.maintenance_data['2025-26'].service_charges, wingData.maintenance_data['Projected'].service_charges],
          borderColor: '#5D878F',
          backgroundColor: '#5D878F',
          fill: false,
          tension: 0.1
        },
        {
          label: 'Total',
          data: [wingData.maintenance_data['2024-25'].total, wingData.maintenance_data['2025-26'].total, wingData.maintenance_data['Projected'].total],
          borderColor: '#DB4545',
          backgroundColor: '#DB4545',
          fill: false,
          tension: 0.1,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + formatCurrency(context.raw);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '₹' + (value / 1000).toFixed(1) + 'K';
            }
          }
        }
      }
    }
  });
}

// Updated UI update functions
function updateSummaryCards(wingKey) {
  const wing = maintenanceData.wings[wingKey];
  
  // Update titles
  document.getElementById('summary-title-1').textContent = `Wing ${wingKey} Maintenance (2024-25)`;
  document.getElementById('summary-title-2').textContent = `Wing ${wingKey} Maintenance (2025-26)`;
  document.getElementById('summary-title-3').textContent = `Wing ${wingKey} Projected Maintenance`;
  
  // Update amounts
  document.getElementById('total-2024').textContent = formatCurrency(wing.maintenance_data['2024-25'].total);
  document.getElementById('total-2025').textContent = formatCurrency(wing.maintenance_data['2025-26'].total);
  document.getElementById('total-projected').textContent = formatCurrency(wing.maintenance_data['Projected'].total);
  
  // Calculate changes from 2024-25 as base
  const change2025 = calculatePercentageChange(wing.maintenance_data['2024-25'].total, wing.maintenance_data['2025-26'].total);
  const changeProj = calculatePercentageChange(wing.maintenance_data['2024-25'].total, wing.maintenance_data['Projected'].total);
  
  // Update change indicators
  const change2025Element = document.getElementById('change-2025');
  const changeProjElement = document.getElementById('change-projected');
  
  change2025Element.textContent = `${change2025 > 0 ? '+' : ''}${change2025}%`;
  change2025Element.className = `change ${change2025 > 0 ? 'increase' : change2025 < 0 ? 'decrease' : 'neutral'}`;
  
  changeProjElement.textContent = `${changeProj > 0 ? '+' : ''}${changeProj}%`;
  changeProjElement.className = `change ${changeProj > 0 ? 'increase' : changeProj < 0 ? 'decrease' : 'neutral'}`;
}

function updateWingDetails(wingKey) {
  const wing = maintenanceData.wings[wingKey];
  
  document.getElementById('wing-title').textContent = `Wing ${wingKey} Details`;
  document.getElementById('wing-area').textContent = `${formatNumber(wing.area)} sq ft`;
  document.getElementById('wing-cost').textContent = formatCurrency(wing.total_construction_cost);
  document.getElementById('wing-series').textContent = wing.series;
}

function updateMaintenanceBreakdown(wingKey) {
  const wing = maintenanceData.wings[wingKey];
  const tbody = document.getElementById('breakdown-tbody');
  tbody.innerHTML = '';

  const categories = [
    { key: 'rm_fund', name: 'R&M Fund' },
    { key: 'sinking_fund', name: 'Sinking Fund' },
    { key: 'water_charges', name: 'Water Charges' },
    { key: 'service_charges', name: 'Service Charges' }
  ];

  categories.forEach(category => {
    const row = document.createElement('tr');
    const val2024 = wing.maintenance_data['2024-25'][category.key];
    const val2025 = wing.maintenance_data['2025-26'][category.key];
    const valProj = wing.maintenance_data['Projected'][category.key];
    
    // Both changes compared to 2024-25 as base
    const change2025 = calculatePercentageChange(val2024, val2025);
    const changeProj = calculatePercentageChange(val2024, valProj);
    
    row.innerHTML = `
      <td class="category-cell">${category.name}</td>
      <td class="amount-cell">${formatCurrency(val2024)}</td>
      <td class="amount-cell">${formatCurrency(val2025)}</td>
      <td class="change-cell ${change2025 > 0 ? 'positive-change' : change2025 < 0 ? 'negative-change' : 'zero-change'}">
        ${change2025 > 0 ? '+' : ''}${change2025}%
      </td>
      <td class="amount-cell">${formatCurrency(valProj)}</td>
      <td class="change-cell ${changeProj > 0 ? 'positive-change' : changeProj < 0 ? 'negative-change' : 'zero-change'}">
        ${changeProj > 0 ? '+' : ''}${changeProj}%
      </td>
    `;
    tbody.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement('tr');
  totalRow.className = 'total-row';
  const total2024 = wing.maintenance_data['2024-25'].total;
  const total2025 = wing.maintenance_data['2025-26'].total;
  const totalProj = wing.maintenance_data['Projected'].total;
  
  const totalChange2025 = calculatePercentageChange(total2024, total2025);
  const totalChangeProj = calculatePercentageChange(total2024, totalProj);
  
  totalRow.innerHTML = `
    <td class="category-cell"><strong>Total</strong></td>
    <td class="amount-cell"><strong>${formatCurrency(total2024)}</strong></td>
    <td class="amount-cell"><strong>${formatCurrency(total2025)}</strong></td>
    <td class="change-cell ${totalChange2025 > 0 ? 'positive-change' : totalChange2025 < 0 ? 'negative-change' : 'zero-change'}">
      <strong>${totalChange2025 > 0 ? '+' : ''}${totalChange2025}%</strong>
    </td>
    <td class="amount-cell"><strong>${formatCurrency(totalProj)}</strong></td>
    <td class="change-cell ${totalChangeProj > 0 ? 'positive-change' : totalChangeProj < 0 ? 'negative-change' : 'zero-change'}">
      <strong>${totalChangeProj > 0 ? '+' : ''}${totalChangeProj}%</strong>
    </td>
  `;
  tbody.appendChild(totalRow);

  // Update taps information
  const tapsInfo = document.getElementById('taps-info');
  tapsInfo.innerHTML = `
    <div class="tap-info-item">
      <div class="period">2024-25</div>
      <div class="count">${wing.maintenance_data['2024-25'].taps} taps</div>
    </div>
    <div class="tap-info-item">
      <div class="period">2025-26</div>
      <div class="count">${wing.maintenance_data['2025-26'].taps} taps</div>
    </div>
    <div class="tap-info-item">
      <div class="period">Projected</div>
      <div class="count">${wing.maintenance_data['Projected'].taps} taps</div>
    </div>
  `;
}

function updateChartTitles(wingKey) {
  document.getElementById('overall-chart-title').textContent = `Wing ${wingKey} Maintenance Comparison`;
  document.getElementById('category-chart-title').textContent = `Wing ${wingKey} Category-wise Breakdown`;
  document.getElementById('wing-trend-title').textContent = `Wing ${wingKey} Maintenance Trend`;
}

// Export functionality
function exportToCSV(wingKey) {
  const wing = maintenanceData.wings[wingKey];
  const csvData = [];
  
  // Header - updated to reflect new comparison logic
  csvData.push(['Wing', 'Category', '2024-25', '2025-26', 'Change from 2024-25 %', 'Projected', 'Change from 2024-25 %']);
  
  const categories = [
    { key: 'rm_fund', name: 'R&M Fund' },
    { key: 'sinking_fund', name: 'Sinking Fund' },
    { key: 'water_charges', name: 'Water Charges' },
    { key: 'service_charges', name: 'Service Charges' }
  ];

  categories.forEach(category => {
    const val2024 = wing.maintenance_data['2024-25'][category.key];
    const val2025 = wing.maintenance_data['2025-26'][category.key];
    const valProj = wing.maintenance_data['Projected'][category.key];
    
    const change2025 = calculatePercentageChange(val2024, val2025);
    const changeProj = calculatePercentageChange(val2024, valProj);
    
    csvData.push([
      wingKey,
      category.name,
      val2024.toFixed(2),
      val2025.toFixed(2),
      change2025,
      valProj.toFixed(2),
      changeProj
    ]);
  });

  // Add total row
  const total2024 = wing.maintenance_data['2024-25'].total;
  const total2025 = wing.maintenance_data['2025-26'].total;
  const totalProj = wing.maintenance_data['Projected'].total;
  
  csvData.push([
    wingKey,
    'Total',
    total2024.toFixed(2),
    total2025.toFixed(2),
    calculatePercentageChange(total2024, total2025),
    totalProj.toFixed(2),
    calculatePercentageChange(total2024, totalProj)
  ]);

  // Convert to CSV string
  const csvString = csvData.map(row => row.join(',')).join('\n');
  
  // Create download
  const blob = new Blob([csvString], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wing_${wingKey}_maintenance_breakdown.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing application...');
  
  // Initialize with Wing A by default
  setTimeout(() => {
    try {
      updateSummaryCards('A');
      updateWingDetails('A');
      updateMaintenanceBreakdown('A');
      updateChartTitles('A');
      createOverallChart('A');
      createCategoryChart('A');
      createWingTrendChart('A');
      
      console.log('Application initialized with Wing A data');
    } catch (error) {
      console.error('Error initializing application:', error);
    }
  }, 100);
  
  // Wing selector event listener
  const wingSelect = document.getElementById('wing-select');
  if (wingSelect) {
    wingSelect.addEventListener('change', function(e) {
      console.log('Wing selected:', e.target.value);
      const wingKey = e.target.value;
      currentWing = wingKey;
      
      if (wingKey) {
        try {
          updateSummaryCards(wingKey);
          updateWingDetails(wingKey);
          updateMaintenanceBreakdown(wingKey);
          updateChartTitles(wingKey);
          createOverallChart(wingKey);
          createCategoryChart(wingKey);
          createWingTrendChart(wingKey);
          
          console.log('Wing data updated successfully for wing:', wingKey);
        } catch (error) {
          console.error('Error updating wing data:', error);
        }
      }
    });
  } else {
    console.error('Wing select element not found');
  }

  // Export button event listener
  const exportBtn = document.getElementById('export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', function() {
      if (currentWing) {
        try {
          exportToCSV(currentWing);
          console.log('CSV export completed for wing:', currentWing);
        } catch (error) {
          console.error('Error exporting CSV:', error);
        }
      } else {
        alert('Please select a wing first to export data.');
      }
    });
  } else {
    console.error('Export button not found');
  }

  // Bye-law toggles event listeners
  const byeLawToggles = document.querySelectorAll('.bye-law-toggle');
  console.log('Found bye-law toggles:', byeLawToggles.length);
  
  byeLawToggles.forEach((button, index) => {
    console.log(`Setting up bye-law toggle ${index}:`, button);
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Bye-law toggle clicked:', this.dataset.category);
      
      const content = this.nextElementSibling;
      const isActive = this.classList.contains('active');
      
      // Close all other sections first
      byeLawToggles.forEach(btn => {
        if (btn !== this) {
          btn.classList.remove('active');
          const otherContent = btn.nextElementSibling;
          if (otherContent) {
            otherContent.classList.add('hidden');
          }
        }
      });
      
      // Toggle current section
      if (!isActive) {
        this.classList.add('active');
        if (content) {
          content.classList.remove('hidden');
        }
      } else {
        this.classList.remove('active');
        if (content) {
          content.classList.add('hidden');
        }
      }
    });
  });

  console.log('Application initialization completed successfully');
});
const apiUrl = "http://127.0.0.1:8000/status";

let tempChart;
const maxDataPoints = 10; // Limit the number of points shown

// Function to fetch and update data
async function fetchPrinterData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById("printer-status").textContent = data.status;
        document.getElementById("extruder-temp").textContent = data.extruder_temp;
        document.getElementById("heater-bed-temp").textContent = data.heater_bed_temp;

        document.getElementById("progress-percent").textContent = `${data.progress}%`;
        document.getElementById("progress-fill").style.width = `${data.progress}%`;

        updateChart(data.extruder_temp, data.heater_bed_temp);

    } catch (error) {
        console.error("Error fetching printer data:", error);
    }
}

// Function to update the chart dynamically
function updateChart(extruderTemp, heaterBedTemp) {
    const now = new Date().toLocaleTimeString();

    // Add new data points
    tempChart.data.labels.push(now);
    tempChart.data.datasets[0].data.push(extruderTemp);
    tempChart.data.datasets[1].data.push(heaterBedTemp);

    // Keep only the last 10 points
    if (tempChart.data.labels.length > maxDataPoints) {
        tempChart.data.labels.shift();
        tempChart.data.datasets[0].data.shift();
        tempChart.data.datasets[1].data.shift();
    }

    tempChart.update();
}

// Initialize Chart.js
function initializeChart() {
    const ctx = document.getElementById("tempChart").getContext("2d");
    tempChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Extruder Temp (°C)",
                    data: [],
                    borderColor: "red",
                    fill: false,
                    tension: 0.1
                },
                {
                    label: "Heater Bed Temp (°C)",
                    data: [],
                    borderColor: "blue",
                    fill: false,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: "Time" } },
                y: { title: { display: true, text: "Temperature (°C)" }, min: 0, max: 300 }
            }
        }
    });
}

// Initialize chart and fetch data
initializeChart();
setInterval(fetchPrinterData, 2000);
fetchPrinterData();


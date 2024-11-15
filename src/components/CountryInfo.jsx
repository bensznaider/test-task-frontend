"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CountryInfo({
  selectedCountry,
  setSelectedCountry,
  countryClick,
}) {
  const buttonStyles = {
    borderWidth: 0,
    margin: "5px",
    backgroundColor: "transparent",
    fontSize: "18px",
    cursor: "pointer",
  };

  const populationData = selectedCountry.population;

  const chartData = {
    labels: populationData.map((entry) => entry.year),
    datasets: [
      {
        label: "Population",
        data: populationData.map((entry) => entry.value),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
      },
    },
  };

  return (
    <div>
      <div>
        <button
          style={{
            padding: "6px",
            borderWidth: 0,
            borderRadius: "12px",
            backgroundColor: "lightgrey",
            fontSize: "10px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedCountry(null)}
        >
          BACK
        </button>
      </div>
      <span
        style={{
          fontSize: "30px",
          margin: "2rem 0 0 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        {selectedCountry.country.name}
        <img
          src={selectedCountry.flagURL}
          alt={`Flag of ${selectedCountry.country.name}`}
          style={{ width: "100px", height: "auto", margin: "2rem" }}
        />
      </span>

      <p
        style={{
          fontSize: "18px",
          margin: "2rem 0",
        }}
      >
        Border countries:
        {selectedCountry.borders.length === 0 ? (
          "NONE"
        ) : (
          <ol>
            {selectedCountry.borders.map((border) => (
              <li key={border.commonName}>
                <button
                  style={buttonStyles}
                  onClick={() =>
                    countryClick({
                      name: border.commonName,
                      countryCode: border.countryCode,
                    })
                  }
                >
                  {border.commonName}
                </button>
              </li>
            ))}
          </ol>
        )}
      </p>

      <h3>Population Over Time</h3>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

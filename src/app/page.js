"use client";
import CountryInfo from "@/components/CountryInfo";
import { getAvailableCountries, getCountryInfo } from "./requests/countries";
import { useState, useEffect } from "react";

export default function Home() {
  const [availableCountries, setAvailableCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const styles = {
    padding: "3rem",
  };

  const buttonStyles = {
    borderWidth: 0,
    margin: "5px",
    backgroundColor: "transparent",
    fontSize: "18px",
    cursor: "pointer",
  };

  useEffect(() => {
    const getCountries = async () => {
      const countries = await getAvailableCountries();
      setAvailableCountries(countries);
    };
    getCountries();
  }, []);

  const countryClick = async (country) => {
    const info = await getCountryInfo(country.countryCode);
    setSelectedCountry({
      country: country,
      borders: info.borderCountries,
      flagURL: info.flagURL,
      population: info.populationCounts,
    });
  };

  return (
    <div style={styles}>
      {!selectedCountry && (
        <main>
          <ol>
            {availableCountries.map((country) => (
              <li key={country.name}>
                <button
                  style={buttonStyles}
                  onClick={() => countryClick(country)}
                >
                  {country.name}
                </button>
              </li>
            ))}
          </ol>
        </main>
      )}
      {selectedCountry && (
        <CountryInfo
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          countryClick={countryClick}
        />
      )}
    </div>
  );
}

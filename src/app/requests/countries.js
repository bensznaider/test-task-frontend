export const getAvailableCountries = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/countries/available-countries`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const status = response.status;
      const ok = response.ok;
      const data = ok ? await response.json() : null;
  
      return data;
    } catch (e) {
      console.error("Error in getAvailableCountries service: ", e);
      return { error: e.message };
    }
  };

  export const getCountryInfo = async (code) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/countries/country-info/${code}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const status = response.status;
      const ok = response.ok;
      const data = ok ? await response.json() : null;
  
      return data;
    } catch (e) {
      console.error("Error in getCountryInfo service: ", e);
      return { error: e.message };
    }
  };
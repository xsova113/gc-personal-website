import axios from "axios";

const getWeather = async (lat: string, lon: string) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        lat,
        lon,
        units: "metric",
        appid: process.env.NEXT_PUBLIC_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getWeather;

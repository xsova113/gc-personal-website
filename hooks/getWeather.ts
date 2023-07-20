import axios from "axios";

const options = {
  method: "GET",
  url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
  params: {
    aggregateHours: "24",
    location: "Richmond,BC,Canada",
    contentType: "json",
    unitGroup: "metric",
    shortColumnNames: "0",
  },
  headers: {
    "X-RapidAPI-Key": "7c9a873c78msh985b21020dd268ap101d58jsn856fac66b1ec",
    "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
  },
};

const getWeather = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getWeather;

const axios = require('axios');

const getClima = async (lat, lon) => {
    console.log(`inside getClima: lat: ${lat}, ${lon}`);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=abf7f8d161cf64a1e05b934a857ed0a8&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
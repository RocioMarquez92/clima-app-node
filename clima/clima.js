const axios = require('axios');

const getClima = async(lat, lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2ddaaec68591eabb3befdf877657d290&units=metric`);
    return respuesta.data.main.temp;
}
module.exports = {
    getClima
}
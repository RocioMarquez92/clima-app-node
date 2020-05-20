const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir); //url segura con encodeURI
    // console.log(encodedURL);
    // Creamos instancia de axio para conectarnos con la API de Google
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': '3ee3e956b5msh20b24e2195d6e95p17b851jsn8a9f58170157' }
    });

    const resp = await instance.get();
    if (resp.data.Results === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}
const axios = require('axios');

const getLugarLatLong = async (direccion ) => {

    encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout: 1000,
        headers: {'X-RapidAPI-Key': 'ebfec9661fmsh4d3b86e731d24cap1492e8jsn382ea16cf87d'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0)
    {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir= data.name;    
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        dir,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLong
};
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

// lugar.getLugarLatLong(argv.direccion)
//      .then(console.log)
//      .catch(err => { console.log("Error: ", err)});

const getInfo = async (direccion) => {

    const coordenadas = await lugar.getLugarLatLong(direccion)
        //.then(console.log)
        //.catch(err => { console.log("Error coordenadas: ", err)});

    
    
    const data = await clima.getClima(coordenadas.latitud, coordenadas.longitud)
        //.then(console.log)
        //.catch(err => { console.log(`Error clima: ${err}`)});

    return {
        data
    }

};

getInfo( argv.direccion)
    .then(console.log)
    .catch((err) => { console.log(`Hubo un error al ejecutar get info: ${err}`)});


// clima.getClima(40.750000, -74.000000)
//      .then(console.log)
//      .catch(err => { console.log(`Error: ${err}`)});

     //http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=abf7f8d161cf64a1e05b934a857ed0a8
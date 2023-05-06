const fs = require('fs')
require('colors');

const crearArchivo = async (base, lista, hasta) => {

  try {

    let salida = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    };

    if (lista) {
      console.log('================================='.rainbow);
      console.log(`==========`.brightGreen, `Tabla del:`.yellow, base, `=========`.brightGreen);
      console.log('================================='.rainbow);

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;

  } catch (error) {
    throw error;
  }

};


module.exports = {
  crearArchivo,
}

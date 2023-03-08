// Importamos la biblioteca 'fs', que nos permite trabajar con archivos y directorios
import * as fs from 'fs';

// Importamos la clase 'Auto' desde el archivo 'Auto.js'
import Auto from './Auto';

// Creamos un nuevo objeto 'nuevoAuto' de la clase 'Auto', con ciertas propiedades
const nuevoAuto = new Auto({ marca: 'Fiat', modelo: 'Uno', anio: 2017, color: 'Blanco', patente: 'MNO123' });

// Leemos el archivo 'autos.json' y lo parseamos para obtener un objeto JavaScript
const autos = JSON.parse(fs.readFileSync('autos.json', 'utf-8'));

// Agregamos el objeto 'nuevoAuto' al array de objetos 'autos'
autos.push(nuevoAuto);

// Convertimos el array de objetos 'autos' a una cadena JSON con formato legible y lo escribimos en el archivo 'autos.json'
fs.writeFileSync('autos.json', JSON.stringify(autos, null, 2));

// Mostramos un mensaje en la consola para confirmar que el auto fue agregado correctamente
console.log('Auto agregado correctamente.');


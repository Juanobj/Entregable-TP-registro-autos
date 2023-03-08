// Importamos la clase Auto desde otro archivo y el módulo fs para trabajar con archivos
import Auto from "./Auto";
import fs from 'fs';



// Creamos una clase llamada RegistroAutomotor
export default class RegistroAutomotor {
  agregarAutosFromCollection(listaDeAutos: any) {
      throw new Error("Method not implemented.");
  }
  
  // Declaramos una propiedad llamada listaAutos, que será un array de objetos de tipo Auto
  private listaAutos: Auto[];

  // Creamos un constructor que inicializa el array de autos vacío
  constructor() {
    this.listaAutos = [];
  }

  // Método para agregar un objeto Auto al array listaAutos
  agregarAuto(auto: Auto): void {
    this.listaAutos.push(auto);
  }

  // Método para buscar un objeto Auto en el array listaAutos
  // Recibe el nombre del auto que queremos buscar
  buscarAuto(nombreAuto: string): Auto | undefined {
    // Utilizamos el método find() del array para buscar un objeto Auto que cumpla una determinada condición
    // En este caso, buscamos un objeto Auto cuya marca, modelo o patente coincida con el nombre recibido como parámetro
    return this.listaAutos.find((auto) => auto.getMarca() === nombreAuto || auto.getModelo() === nombreAuto || auto.getPatente() === nombreAuto);
  }

  // Método para buscar un objeto Auto en el array listaAutos mediante su índice
  buscarAutoPorIndice(indiceAuto: number): Auto {
    // Si el índice recibido es menor que cero o mayor o igual a la longitud del array, lanzamos un error
    if (indiceAuto < 0 || indiceAuto >= this.listaAutos.length) {
      throw new Error('Auto no encontrado');
    }
    // Si no, devolvemos el objeto Auto que está en la posición indicada por el índice
    return this.listaAutos[indiceAuto];
  }

  // Método para mostrar por consola la información de todos los objetos Auto del array listaAutos
  listarAutos(): void {
    this.listaAutos.forEach((auto, index) => {
      console.log(auto.aTexto());
      if (index === this.listaAutos.length - 1) {
        console.log("\n");
      }
    });
  }

  // Método para actualizar los datos de un objeto Auto
  // Recibe el nombre del auto a actualizar y un objeto con las propiedades que queremos modificar
  actualizarAuto(nombreAuto: string, {marca, modelo, anio, color, patente}: {marca?: string, modelo?: string, anio?: number, color?: string, patente?: string}): void {
    // Buscamos el objeto Auto que queremos actualizar
    const auto = this.buscarAuto(nombreAuto);
    // Si encontramos el objeto, actualizamos sus propiedades con los valores recibidos como parámetros
    if (auto) {
      if (marca) auto.setMarca(marca);
      if (modelo) auto.setModelo(modelo);
      if (anio) auto.setAnio(anio);
      if (color) auto.setColor(color);
      if (patente) auto.setPatente(patente);
    } else {
      // Si no encontramos el objeto, lanzamos un error
      throw new Error('Auto no encontrado');
    }
  }

  // Método para eliminar un objeto Auto del array listaAutos
  // Recibe el nombre del auto que queremos borrar
  borrarAuto(nombreAuto: string): void {
    // Utilizamos el método filter() del array para crear un nuevo array con todos los objetos Auto que no coincidan con el nombre recibido como parámetro
    this.listaAutos = this.listaAutos.filter((auto) => auto.getMarca() !== nombreAuto && auto.getModelo() !== nombreAuto && auto.getPatente() !== nombreAuto);
  }
}
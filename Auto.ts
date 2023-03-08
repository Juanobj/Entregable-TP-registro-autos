// Clase Auto que representa un vehículo.
export default class Auto {
    getNombre() {
        throw new Error("Method not implemented.");
    }
    // Atributos de la clase.
    private marca: string; // Marca del vehículo.
    private modelo: string; // Modelo del vehículo.
    private anio: number; // Año de fabricación del vehículo.
    private color: string; // Color del vehículo.
    private patente: string; // Patente del vehículo.

    // Constructor de la clase Auto. Recibe un objeto con los atributos opcionales del vehículo.
    constructor({marca, modelo, anio, color, patente}: {marca?: string, modelo?: string, anio?: number, color?: string, patente?: string}) {
        // Si el atributo es proporcionado, lo asignamos a la propiedad correspondiente. Si no, le asignamos un valor por defecto.
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.anio = anio ? anio : 0;
        this.color = color ? color : "";
        this.patente = patente ? patente : "";
    }

    // Métodos getter para obtener los valores de los atributos de la clase.
    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    getColor(): string {
        return this.color;
    }

    getPatente(): string {
        return this.patente;
    }

    // Métodos setter para asignar nuevos valores a los atributos de la clase.
    setMarca(marca: string): void {
        this.marca = marca;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    setAnio(anio: number): void {
        this.anio = anio;
    }

    setColor(color: string): void {
        this.color = color;
    }

    setPatente(patente: string): void {
        this.patente = patente;
    }

    // Método que actualiza los valores de los atributos de la clase. Recibe un objeto con los atributos opcionales del vehículo.
    actualizarAuto({marca, modelo, anio, color, patente}: {marca?: string, modelo?: string, anio?: number, color?: string, patente?: string}) {
        // Si el atributo es proporcionado, actualizamos el valor correspondiente.
        if (marca != null) this.marca = marca;
        if (modelo != null) this.modelo = modelo;
        if (anio != null) this.anio = anio;
        if (color != null) this.color = color;
        if (patente != null) this.patente = patente;
    }

    // Método que devuelve una cadena con los valores de los atributos de la clase.
    aTexto(): string {
        return `${this.marca}, ${this.modelo}, ${this.anio}, ${this.color}, ${this.patente}`;
    }
}

class Usuario {

    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullname(){
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(libros, autor){
        this.libros.push({libros, autor}) 
    }
    getBookNames() {
        return this.libros.map(libro => libro.nombre); 
    }
}
const user = new Usuario('Luna', 'Gatica',[],[]);
user.getFullname()

user.addMascota('perro');
user.addMascota('gato');
user.countMascotas();

user.addBook('Coraline', 'Neil Gaiman');
user.addBook('La batalla del futuro', 'Mateo & Augusto Salvatto');
user.getBooksNames();
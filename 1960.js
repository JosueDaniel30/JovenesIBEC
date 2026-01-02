class BibliaRVR1960 {
    constructor() {
        // Ruta base correcta para GitHub Pages
        this.basePath = '/JovenesIBEC/biblia';

        // MAPA FIJO libro → carpeta (SIN tildes, con mayúscula inicial)
        this.librosMap = {
            "Génesis": "Genesis",
            "Éxodo": "Exodo",
            "Levítico": "Levitico",
            "Números": "Numeros",
            "Deuteronomio": "Deuteronomio",

            "Josué": "Josue",
            "Jueces": "Jueces",
            "Rut": "Rut",
            "1 Samuel": "1Samuel",
            "2 Samuel": "2Samuel",
            "1 Reyes": "1Reyes",
            "2 Reyes": "2Reyes",
            "1 Crónicas": "1Cronicas",
            "2 Crónicas": "2Cronicas",

            "Esdras": "Esdras",
            "Nehemías": "Nehemias",
            "Ester": "Ester",
            "Job": "Job",
            "Salmos": "Salmos",
            "Proverbios": "Proverbios",
            "Eclesiastés": "Eclesiastes",
            "Cantares": "Cantares",

            "Isaías": "Isaias",
            "Jeremías": "Jeremias",
            "Lamentaciones": "Lamentaciones",
            "Ezequiel": "Ezequiel",
            "Daniel": "Daniel",

            "Oseas": "Oseas",
            "Joel": "Joel",
            "Amós": "Amos",
            "Abdías": "Abdias",
            "Jonás": "Jonas",
            "Miqueas": "Miqueas",
            "Nahúm": "Nahum",
            "Habacuc": "Habacuc",
            "Sofonías": "Sofonias",
            "Hageo": "Hageo",
            "Zacarías": "Zacarias",
            "Malaquías": "Malaquias"
        };
    }

    // === DEVUELVE LA CARPETA REAL ===
    getCarpetaLibro(nombreLibro) {
        return this.librosMap[nombreLibro];
    }

    // === DEVUELVE EL ARCHIVO REAL ===
    getNombreArchivo(nombreLibro, capitulo) {
        const base = this.librosMap[nombreLibro].toLowerCase();
        return `${base}_${capitulo}.json`;
    }

    // === CARGA UN CAPÍTULO ===
    async cargarCapitulo(libro, capitulo) {
        try {
            const carpeta = this.getCarpetaLibro(libro.nombre);
            const archivo = this.getNombreArchivo(libro.nombre, capitulo);

            if (!carpeta) {
                throw new Error(`Libro no mapeado: ${libro.nombre}`);
            }

            const url = `${this.basePath}/${carpeta}/${archivo}`;
            console.log('Cargando:', url);

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error cargando el capítulo:', error);
            throw error;
        }
    }
}

// Instancia global (si ya la usas así)
const bibliaRVR1960 = new BibliaRVR1960();

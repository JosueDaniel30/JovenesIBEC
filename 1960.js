/* ============================
   📖 BIBLIA RVR1960 COMPLETA - CARGADA DESDE ARCHIVOS JSON
   VERSIÓN CORREGIDA PARA GITHUB PAGES
============================ */

const BASE_PATH = "/JovenesIBEC";

class BibliaRVR1960 {
    constructor() {
        // Para GitHub Pages, la ruta debe ser relativa
        this.basePath = '/JovenesIBEC/biblia';
        this.libros = [
            // Antiguo Testamento
            { id: 1, nombre: "Génesis", abrev: "GEN", testament: "AT", cap: 50 },
            { id: 2, nombre: "Éxodo", abrev: "EXO", testament: "AT", cap: 40 },
            { id: 3, nombre: "Levítico", abrev: "LEV", testament: "AT", cap: 27 },
            { id: 4, nombre: "Números", abrev: "NUM", testament: "AT", cap: 36 },
            { id: 5, nombre: "Deuteronomio", abrev: "DEU", testament: "AT", cap: 34 },
            { id: 6, nombre: "Josué", abrev: "JOS", testament: "AT", cap: 24 },
            { id: 7, nombre: "Jueces", abrev: "JDG", testament: "AT", cap: 21 },
            { id: 8, nombre: "Rut", abrev: "RUT", testament: "AT", cap: 4 },
            { id: 9, nombre: "1 Samuel", abrev: "1SA", testament: "AT", cap: 31 },
            { id: 10, nombre: "2 Samuel", abrev: "2SA", testament: "AT", cap: 24 },
            { id: 11, nombre: "1 Reyes", abrev: "1KI", testament: "AT", cap: 22 },
            { id: 12, nombre: "2 Reyes", abrev: "2KI", testament: "AT", cap: 25 },
            { id: 13, nombre: "1 Crónicas", abrev: "1CH", testament: "AT", cap: 29 },
            { id: 14, nombre: "2 Crónicas", abrev: "2CH", testament: "AT", cap: 36 },
            { id: 15, nombre: "Esdras", abrev: "EZR", testament: "AT", cap: 10 },
            { id: 16, nombre: "Nehemías", abrev: "NEH", testament: "AT", cap: 13 },
            { id: 17, nombre: "Ester", abrev: "EST", testament: "AT", cap: 10 },
            { id: 18, nombre: "Job", abrev: "JOB", testament: "AT", cap: 42 },
            { id: 19, nombre: "Salmos", abrev: "PSA", testament: "AT", cap: 150 },
            { id: 20, nombre: "Proverbios", abrev: "PRO", testament: "AT", cap: 31 },
            { id: 21, nombre: "Eclesiastés", abrev: "ECC", testament: "AT", cap: 12 },
            { id: 22, nombre: "Cantares", abrev: "SNG", testament: "AT", cap: 8 },
            { id: 23, nombre: "Isaías", abrev: "ISA", testament: "AT", cap: 66 },
            { id: 24, nombre: "Jeremías", abrev: "JER", testament: "AT", cap: 52 },
            { id: 25, nombre: "Lamentaciones", abrev: "LAM", testament: "AT", cap: 5 },
            { id: 26, nombre: "Ezequiel", abrev: "EZK", testament: "AT", cap: 48 },
            { id: 27, nombre: "Daniel", abrev: "DAN", testament: "AT", cap: 12 },
            { id: 28, nombre: "Oseas", abrev: "HOS", testament: "AT", cap: 14 },
            { id: 29, nombre: "Joel", abrev: "JOL", testament: "AT", cap: 3 },
            { id: 30, nombre: "Amós", abrev: "AMO", testament: "AT", cap: 9 },
            { id: 31, nombre: "Abdías", abrev: "OBA", testament: "AT", cap: 1 },
            { id: 32, nombre: "Jonás", abrev: "JON", testament: "AT", cap: 4 },
            { id: 33, nombre: "Miqueas", abrev: "MIC", testament: "AT", cap: 7 },
            { id: 34, nombre: "Nahúm", abrev: "NAM", testament: "AT", cap: 3 },
            { id: 35, nombre: "Habacuc", abrev: "HAB", testament: "AT", cap: 3 },
            { id: 36, nombre: "Sofonías", abrev: "ZEP", testament: "AT", cap: 3 },
            { id: 37, nombre: "Hageo", abrev: "HAG", testament: "AT", cap: 2 },
            { id: 38, nombre: "Zacarías", abrev: "ZEC", testament: "AT", cap: 14 },
            { id: 39, nombre: "Malaquías", abrev: "MAL", testament: "AT", cap: 4 },
            
            // Nuevo Testamento
            { id: 40, nombre: "Mateo", abrev: "MAT", testament: "NT", cap: 28 },
            { id: 41, nombre: "Marcos", abrev: "MRK", testament: "NT", cap: 16 },
            { id: 42, nombre: "Lucas", abrev: "LUK", testament: "NT", cap: 24 },
            { id: 43, nombre: "Juan", abrev: "JHN", testament: "NT", cap: 21 },
            { id: 44, nombre: "Hechos", abrev: "ACT", testament: "NT", cap: 28 },
            { id: 45, nombre: "Romanos", abrev: "ROM", testament: "NT", cap: 16 },
            { id: 46, nombre: "1 Corintios", abrev: "1CO", testament: "NT", cap: 16 },
            { id: 47, nombre: "2 Corintios", abrev: "2CO", testament: "NT", cap: 13 },
            { id: 48, nombre: "Gálatas", abrev: "GAL", testament: "NT", cap: 6 },
            { id: 49, nombre: "Efesios", abrev: "EPH", testament: "NT", cap: 6 },
            { id: 50, nombre: "Filipenses", abrev: "PHP", testament: "NT", cap: 4 },
            { id: 51, nombre: "Colosenses", abrev: "COL", testament: "NT", cap: 4 },
            { id: 52, nombre: "1 Tesalonicenses", abrev: "1TH", testament: "NT", cap: 5 },
            { id: 53, nombre: "2 Tesalonicenses", abrev: "2TH", testament: "NT", cap: 3 },
            { id: 54, nombre: "1 Timoteo", abrev: "1TI", testament: "NT", cap: 6 },
            { id: 55, nombre: "2 Timoteo", abrev: "2TI", testament: "NT", cap: 4 },
            { id: 56, nombre: "Tito", abrev: "TIT", testament: "NT", cap: 3 },
            { id: 57, nombre: "Filemón", abrev: "PHM", testament: "NT", cap: 1 },
            { id: 58, nombre: "Hebreos", abrev: "HEB", testament: "NT", cap: 13 },
            { id: 59, nombre: "Santiago", abrev: "JAS", testament: "NT", cap: 5 },
            { id: 60, nombre: "1 Pedro", abrev: "1PE", testament: "NT", cap: 5 },
            { id: 61, nombre: "2 Pedro", abrev: "2PE", testament: "NT", cap: 3 },
            { id: 62, nombre: "1 Juan", abrev: "1JN", testament: "NT", cap: 5 },
            { id: 63, nombre: "2 Juan", abrev: "2JN", testament: "NT", cap: 1 },
            { id: 64, nombre: "3 Juan", abrev: "3JN", testament: "NT", cap: 1 },
            { id: 65, nombre: "Judas", abrev: "JUD", testament: "NT", cap: 1 },
            { id: 66, nombre: "Apocalipsis", abrev: "REV", testament: "NT", cap: 22 }
        ];
        
        this.versiculosCache = new Map();
        this.libroActual = null;
        this.capituloActual = null;
        
        // Mapeo de nombres a carpetas
        this.nombreACarpeta = this.crearMapeoNombres();
    }

    // Crear mapeo de nombres de libros a carpetas
    crearMapeoNombres() {
        return {
            // Antiguo Testamento
            "Génesis": "Genesis",
            "Éxodo": "Exodo",
            "Levítico": "Levitico",
            "Números": "Numeros",
            "Deuteronomio": "Deuteronomio",
            "Josué": "Josue",
            "Jueces": "Jueces",
            "Rut": "Rut",
            "1 Samuel": "1_Samuel",
            "2 Samuel": "2_Samuel",
            "1 Reyes": "1_Reyes",
            "2 Reyes": "2_Reyes",
            "1 Crónicas": "1_Cronicas",
            "2 Crónicas": "2_Cronicas",
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
            "Malaquías": "Malaquias",
            
            // Nuevo Testamento
            "Mateo": "Mateo",
            "Marcos": "Marcos",
            "Lucas": "Lucas",
            "Juan": "Juan",
            "Hechos": "Hechos",
            "Romanos": "Romanos",
            "1 Corintios": "1_Corintios",
            "2 Corintios": "2_Corintios",
            "Gálatas": "Galatas",
            "Efesios": "Efesios",
            "Filipenses": "Filipenses",
            "Colosenses": "Colosenses",
            "1 Tesalonicenses": "1_Tesalonicenses",
            "2 Tesalonicenses": "2_Tesalonicenses",
            "1 Timoteo": "1_Timoteo",
            "2 Timoteo": "2_Timoteo",
            "Tito": "Tito",
            "Filemón": "Filemon",
            "Hebreos": "Hebreos",
            "Santiago": "Santiago",
            "1 Pedro": "1_Pedro",
            "2 Pedro": "2_Pedro",
            "1 Juan": "1_Juan",
            "2 Juan": "2_Juan",
            "3 Juan": "3_Juan",
            "Judas": "Judas",
            "Apocalipsis": "Apocalipsis"
        };
    }

    // Obtener archivo JSON de un capítulo
    async obtenerCapitulo(nombreLibro, capitulo) {
        console.log(`Intentando cargar: ${nombreLibro} capítulo ${capitulo}`);
        
        const libro = this.libros.find(l => l.nombre === nombreLibro);
        if (!libro) {
            console.error('Libro no encontrado:', nombreLibro);
            return null;
        }

        const carpeta = this.nombreACarpeta[nombreLibro];
        if (!carpeta) {
            console.error('No se encontró carpeta para:', nombreLibro);
            return null;
        }

        // Generar nombre de archivo - IMPORTANTE: en tu repositorio los archivos tienen primera letra mayúscula
        const nombreArchivo = this.getNombreArchivo(nombreLibro, capitulo);
        const url = `${this.basePath}/${carpeta}/${nombreArchivo}`;
        
        console.log('URL completa:', url);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                console.error(`Error HTTP ${response.status} para URL: ${url}`);
                return null;
            }
            
            const chapterData = await response.json();
            console.log('Datos recibidos:', chapterData);
            
            // Convertir la estructura del JSON a la esperada
            const versiculos = {};
            
            // Los archivos JSON tienen formato: [[1, "texto1"], [2, "texto2"], ...]
            if (Array.isArray(chapterData)) {
                chapterData.forEach(verse => {
                    if (Array.isArray(verse) && verse.length >= 2) {
                        const [numero, texto] = verse;
                        versiculos[numero] = texto;
                    }
                });
            } else if (chapterData.verses) {
                // Formato alternativo
                chapterData.verses.forEach(verse => {
                    versiculos[verse.verse] = verse.text;
                });
            }
            
            console.log('Versículos procesados:', Object.keys(versiculos).length);
            return versiculos;
            
        } catch (error) {
            console.error('Error cargando capítulo:', error);
            console.error('URL que falló:', url);
            return null;
        }
    }

    // Generar nombre de archivo para un capítulo específico
    getNombreArchivo(nombreLibro, capitulo) {
        const carpeta = this.nombreACarpeta[nombreLibro];
        if (!carpeta) return null;
        
        // Los archivos en tu repositorio tienen formato: "Genesis_1.json"
        // La primera letra es mayúscula en el nombre del archivo
        let nombreArchivo = carpeta;
        
        // Convertir primera letra a mayúscula si no lo está
        if (nombreArchivo && nombreArchivo.length > 0) {
            nombreArchivo = nombreArchivo.charAt(0).toUpperCase() + nombreArchivo.slice(1);
        }
        
        return `${nombreArchivo}_${capitulo}.json`;
    }

    // Obtener versículo aleatorio
    async obtenerVersiculoAleatorio() {
        // Elegir libro aleatorio
        const libro = this.libros[Math.floor(Math.random() * this.libros.length)];
        const capitulo = Math.floor(Math.random() * libro.cap) + 1;
        
        console.log(`Obteniendo versículo aleatorio de ${libro.nombre} ${capitulo}`);
        
        const data = await this.obtenerCapitulo(libro.nombre, capitulo);
        if (!data || Object.keys(data).length === 0) {
            console.error('No se pudieron obtener datos para versículo aleatorio');
            return null;
        }
        
        // Obtener versículo aleatorio del capítulo
        const versiculos = Object.keys(data).map(Number);
        const versiculoNum = versiculos[Math.floor(Math.random() * versiculos.length)];
        
        return {
            libro: libro.nombre,
            capitulo: capitulo,
            versiculo: versiculoNum,
            texto: data[versiculoNum],
            referencia: `${libro.nombre} ${capitulo}:${versiculoNum}`
        };
    }

    // Obtener versículo por referencia exacta
    async obtenerPorReferencia(referencia) {
        // Parsear referencia (ej: "Juan 3:16" o "1 Juan 2:1")
        const match = referencia.match(/(\d*\s*\w+)\s+(\d+):(\d+)/);
        if (!match) {
            console.error('Formato de referencia inválido:', referencia);
            return null;
        }

        const [, libroStr, capituloStr, versiculoStr] = match;
        
        console.log(`Buscando: ${libroStr} ${capituloStr}:${versiculoStr}`);
        
        // Encontrar libro
        const libro = this.libros.find(l => 
            l.nombre.toLowerCase() === libroStr.toLowerCase() ||
            l.abrev.toLowerCase() === libroStr.toLowerCase()
        );
        
        if (!libro) {
            console.error('Libro no encontrado para referencia:', referencia);
            return null;
        }
        
        const capitulo = parseInt(capituloStr);
        const versiculo = parseInt(versiculoStr);
        
        const data = await this.obtenerCapitulo(libro.nombre, capitulo);
        if (!data || !data[versiculo]) {
            console.error('Versículo no encontrado:', referencia);
            return null;
        }
        
        return {
            libro: libro.nombre,
            capitulo: capitulo,
            versiculo: versiculo,
            texto: data[versiculo],
            referencia: `${libro.nombre} ${capitulo}:${versiculo}`
        };
    }

    // Obtener lista de libros por testamento
    obtenerLibrosPorTestamento(testamento) {
        return this.libros.filter(libro => libro.testament === testamento);
    }
}

// Instancia global
const biblia = new BibliaRVR1960();

/* ============================
   📖 FUNCIONALIDAD DE INTERFAZ - MEJORADA
============================ */

// Variable global para controlar secciones
let seccionActual = 'versiculo';

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Biblia.js inicializando...');
    
    // Cargar versículo del día
    await cargarVersiculoDelDia();
    
    // Inicializar búsqueda rápida
    inicializarBusquedaRapida();
    
    // Cargar libros en la interfaz
    cargarLibrosInterfaz();
    
    // Configurar event listeners
    configurarEventListeners();
    
    console.log('Biblia.js inicializado correctamente');
});

// Cargar versículo del día
async function cargarVersiculoDelDia() {
    console.log('Cargando versículo del día...');
    
    // Verificar si hay versículo guardado para hoy
    const hoy = new Date().toDateString();
    const versiculoGuardado = localStorage.getItem('versiculoDelDia');
    
    if (versiculoGuardado) {
        try {
            const data = JSON.parse(versiculoGuardado);
            if (data.fecha === hoy && data.texto) {
                console.log('Usando versículo guardado:', data.referencia);
                mostrarVersiculo(data.texto, data.referencia);
                return;
            }
        } catch (e) {
            console.error('Error al parsear versículo guardado:', e);
        }
    }
    
    // Obtener nuevo versículo aleatorio
    console.log('Generando nuevo versículo aleatorio...');
    const versiculo = await biblia.obtenerVersiculoAleatorio();
    
    if (versiculo && versiculo.texto) {
        console.log('Versículo obtenido:', versiculo.referencia);
        mostrarVersiculo(versiculo.texto, versiculo.referencia);
        
        // Guardar para hoy
        localStorage.setItem('versiculoDelDia', JSON.stringify({
            ...versiculo,
            fecha: hoy
        }));
    } else {
        console.error('No se pudo obtener versículo aleatorio');
        mostrarVersiculo("Jehová es mi pastor; nada me faltará.", "Salmos 23:1");
    }
}

// Mostrar versículo en la interfaz
function mostrarVersiculo(texto, referencia) {
    const verseTextEl = document.getElementById('daily-verse-text');
    const verseRefEl = document.getElementById('daily-verse-ref');
    
    if (verseTextEl) verseTextEl.textContent = `"${texto}"`;
    if (verseRefEl) verseRefEl.textContent = referencia;
}

// Inicializar búsqueda rápida
function inicializarBusquedaRapida() {
    const quickSearchInput = document.querySelector('.quick-search-input');
    if (quickSearchInput) {
        quickSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                buscarPorReferencia(this.value.trim());
            }
        });
    }
}

// Buscar por referencia rápida
async function buscarPorReferencia(referencia) {
    if (!referencia) return;
    
    const versiculo = await biblia.obtenerPorReferencia(referencia);
    if (versiculo) {
        mostrarVersiculo(versiculo.texto, versiculo.referencia);
        mostrarSeccion('versiculo');
        showNotification(`Versículo encontrado: ${versiculo.referencia}`, '✅');
    } else {
        showNotification('No se encontró la referencia', '❌');
    }
}

// Cargar libros en la interfaz
function cargarLibrosInterfaz() {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) {
        console.error('No se encontró el contenedor de libros');
        return;
    }
    
    // Cargar Antiguo Testamento por defecto
    const librosAT = biblia.obtenerLibrosPorTestamento('AT');
    let html = '';
    
    librosAT.forEach(libro => {
        html += `
            <div class="book-card" onclick="abrirLibro('${libro.nombre}')">
                <div class="book-icon">📖</div>
                <h3>${libro.nombre}</h3>
                <p>${libro.cap} capítulos</p>
            </div>
        `;
    });
    
    booksGrid.innerHTML = html;
    console.log('Libros cargados en interfaz:', librosAT.length);
}

// Mostrar testamento específico
function mostrarTestamento(testamento) {
    // Actualizar botones activos
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) return;
    
    const libros = biblia.obtenerLibrosPorTestamento(testamento);
    let html = '';
    
    libros.forEach(libro => {
        html += `
            <div class="book-card" onclick="abrirLibro('${libro.nombre}')">
                <div class="book-icon">📖</div>
                <h3>${libro.nombre}</h3>
                <p>${libro.cap} capítulos</p>
            </div>
        `;
    });
    
    booksGrid.innerHTML = html;
}

// Abrir libro para lectura
async function abrirLibro(nombreLibro) {
    console.log(`Abriendo libro: ${nombreLibro}`);
    
    const libro = biblia.libros.find(l => l.nombre === nombreLibro);
    if (!libro) {
        showNotification('Libro no encontrado', '❌');
        return;
    }
    
    // Crear sección de lectura si no existe
    let readingSection = document.getElementById('reading-section');
    if (!readingSection) {
        crearSeccionLectura();
        readingSection = document.getElementById('reading-section');
    }
    
    // Mostrar sección de lectura
    mostrarSeccion('lectura');
    
    // Cargar información del libro
    document.getElementById('reading-book-title').textContent = libro.nombre;
    document.getElementById('reading-book-chapters').textContent = `${libro.cap} capítulos`;
    
    // Cargar lista completa de capítulos
    const chaptersGrid = document.getElementById('reading-chapters-grid');
    let chaptersHTML = '';

    for (let i = 1; i <= libro.cap; i++) {
        chaptersHTML += `
            <button class="chapter-btn" onclick="cargarCapitulo('${libro.nombre}', ${i})">
                Capítulo ${i}
            </button>
        `;
    }
    
    chaptersGrid.innerHTML = chaptersHTML;
    
    // Cargar primer capítulo por defecto
    await cargarCapitulo(libro.nombre, 1);
}

// Crear sección de lectura
function crearSeccionLectura() {
    const main = document.querySelector('main');
    if (!main) return;
    
    const readingSection = document.createElement('section');
    readingSection.id = 'reading-section';
    readingSection.className = 'card-premium';
    readingSection.style.display = 'none';
    
    readingSection.innerHTML = `
        <div class="reading-header">
            <button onclick="mostrarSeccion('versiculo')" class="btn-back">← Volver</button>
            <div class="reading-book-info">
                <h2 id="reading-book-title">Libro</h2>
                <p id="reading-book-chapters">Capítulos</p>
            </div>
        </div>
        
        <div class="reading-content">
            <div class="chapters-section">
                <h3>Capítulos</h3>
                <div id="reading-chapters-grid" class="chapters-grid"></div>
            </div>
            
            <div class="chapter-section">
                <div class="chapter-header">
                    <h3 id="chapter-title">Capítulo 1</h3>
                    <div class="chapter-nav">
                        <button onclick="navegarCapitulo('prev')" class="btn-icon">◀</button>
                        <input type="number" id="chapter-input" min="1" value="1" class="chapter-input">
                        <button onclick="navegarCapitulo('next')" class="btn-icon">▶</button>
                    </div>
                </div>
                <div id="chapter-content" class="chapter-content">
                    <p>Selecciona un capítulo para leer</p>
                </div>
            </div>
        </div>
    `;
    
    main.appendChild(readingSection);
}

// Cargar capítulo específico
async function cargarCapitulo(nombreLibro, numeroCapitulo) {
    console.log(`Cargando capítulo: ${nombreLibro} ${numeroCapitulo}`);
    
    const libro = biblia.libros.find(l => l.nombre === nombreLibro);
    if (!libro) {
        showNotification('Libro no encontrado', '❌');
        return;
    }
    
    // Validar número de capítulo
    if (numeroCapitulo < 1 || numeroCapitulo > libro.cap) {
        showNotification(`Capítulo ${numeroCapitulo} no existe en ${libro.nombre}`, '❌');
        return;
    }
    
    // Actualizar UI
    document.getElementById('chapter-title').textContent = `${libro.nombre} ${numeroCapitulo}`;
    document.getElementById('chapter-input').value = numeroCapitulo;
    
    // Mostrar loading
    const chapterContent = document.getElementById('chapter-content');
    chapterContent.innerHTML = '<div class="loading">Cargando capítulo...</div>';
    
    // Obtener datos del capítulo
    const data = await biblia.obtenerCapitulo(nombreLibro, numeroCapitulo);
    
    if (!data || Object.keys(data).length === 0) {
        chapterContent.innerHTML = `
            <p class="error">Error cargando el capítulo ${numeroCapitulo}</p>
            <button onclick="cargarCapitulo('${nombreLibro}', ${numeroCapitulo})" class="btn-secondary">
                Reintentar
            </button>
        `;
        return;
    }
    
    // Mostrar versículos
    let html = '';
    Object.entries(data).forEach(([versiculo, texto]) => {
        html += `
            <div class="verse-item" id="verse-${versiculo}">
                <span class="verse-number">${versiculo}</span>
                <span class="verse-text">${texto}</span>
                <button onclick="marcarVersiculo('${nombreLibro}', ${numeroCapitulo}, ${versiculo})" 
                        class="btn-verse-action" title="Marcar versículo">
                    ⭐
                </button>
            </div>
        `;
    });
    
    chapterContent.innerHTML = html;
    
    // Guardar último capítulo leído
    biblia.libroActual = nombreLibro;
    biblia.capituloActual = numeroCapitulo;
    
    // Guardar en historial
    guardarEnHistorialLectura(nombreLibro, numeroCapitulo);
    
    console.log(`Capítulo cargado: ${Object.keys(data).length} versículos`);
}

// Navegar entre capítulos
async function navegarCapitulo(direccion) {
    if (!biblia.libroActual || !biblia.capituloActual) {
        showNotification('No hay libro seleccionado', 'ℹ️');
        return;
    }
    
    const libro = biblia.libros.find(l => l.nombre === biblia.libroActual);
    if (!libro) return;
    
    let nuevoCapitulo = biblia.capituloActual;
    
    if (direccion === 'prev' && nuevoCapitulo > 1) {
        nuevoCapitulo--;
    } else if (direccion === 'next' && nuevoCapitulo < libro.cap) {
        nuevoCapitulo++;
    } else {
        return; // No hacer nada si no se puede navegar
    }
    
    await cargarCapitulo(biblia.libroActual, nuevoCapitulo);
}

// Marcar versículo como favorito
function marcarVersiculo(libro, capitulo, versiculo) {
    const versiculoData = {
        libro: libro,
        capitulo: capitulo,
        versiculo: versiculo,
        referencia: `${libro} ${capitulo}:${versiculo}`,
        fecha: new Date().toISOString()
    };
    
    let favoritos = JSON.parse(localStorage.getItem('versiculosFavoritos') || '[]');
    
    // Verificar si ya existe
    const existe = favoritos.some(fav => 
        fav.libro === libro && fav.capitulo === capitulo && fav.versiculo === versiculo
    );
    
    if (!existe) {
        favoritos.push(versiculoData);
        localStorage.setItem('versiculosFavoritos', JSON.stringify(favoritos));
        showNotification('Versículo marcado ⭐', '✅');
    } else {
        showNotification('Versículo ya marcado', 'ℹ️');
    }
}

// Guardar en historial de lectura
function guardarEnHistorialLectura(libro, capitulo) {
    let historial = JSON.parse(localStorage.getItem('historialLectura') || '[]');
    
    historial.unshift({
        libro: libro,
        capitulo: capitulo,
        fecha: new Date().toISOString()
    });
    
    // Mantener solo últimos 50
    if (historial.length > 50) {
        historial = historial.slice(0, 50);
    }
    
    localStorage.setItem('historialLectura', JSON.stringify(historial));
}

// Mostrar/ocultar secciones
function mostrarSeccion(seccion) {
    console.log(`Mostrando sección: ${seccion}`);
    
    // Ocultar todas las secciones
    const secciones = [
        'verse-section',
        'search-section', 
        'favorites-section',
        'quiz-section',
        'books-section'
    ];
    
    secciones.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    const readingSection = document.getElementById('reading-section');
    if (readingSection) {
        readingSection.style.display = 'none';
    }
    
    // Mostrar sección solicitada
    switch(seccion) {
        case 'versiculo':
            const verseSection = document.getElementById('verse-section');
            const booksSection = document.getElementById('books-section');
            if (verseSection) verseSection.style.display = 'block';
            if (booksSection) booksSection.style.display = 'block';
            break;
        case 'busqueda':
            document.getElementById('search-section').style.display = 'block';
            break;
        case 'favoritos':
            document.getElementById('favorites-section').style.display = 'block';
            cargarFavoritos();
            break;
        case 'quiz':
            document.getElementById('quiz-section').style.display = 'block';
            break;
        case 'lectura':
            if (readingSection) {
                readingSection.style.display = 'block';
            }
            break;
    }
    
    seccionActual = seccion;
}

// Configurar event listeners
function configurarEventListeners() {
    // Configurar búsqueda avanzada
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', realizarBusquedaAvanzada);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') realizarBusquedaAvanzada();
        });
    }
    
    // Configurar input de capítulo
    const chapterInput = document.getElementById('chapter-input');
    if (chapterInput) {
        chapterInput.addEventListener('change', function() {
            const valor = parseInt(this.value);
            if (valor && biblia.libroActual) {
                cargarCapitulo(biblia.libroActual, valor);
            }
        });
    }
}

// Función para compartir versículo
function shareVerse() {
    const text = document.getElementById('daily-verse-text')?.textContent || '';
    const ref = document.getElementById('daily-verse-ref')?.textContent || '';
    
    if (navigator.share) {
        navigator.share({
            title: 'Versículo Bíblico',
            text: `${text} ${ref}`,
            url: window.location.href
        });
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(`${text} ${ref}`);
        showNotification('Versículo copiado al portapapeles', '📋');
    } else {
        showNotification('No se puede compartir en este dispositivo', '❌');
    }
}

// Cargar favoritos
function cargarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('versiculosFavoritos') || '[]');
    const favoritesList = document.getElementById('favorites-list');
    
    if (!favoritesList) return;
    
    if (favoritos.length === 0) {
        favoritesList.innerHTML = '<p class="empty-state">No tienes versículos favoritos aún.</p>';
        return;
    }
    
    let html = '';
    favoritos.forEach(fav => {
        html += `
            <div class="favorite-item">
                <div class="favorite-content">
                    <blockquote>${fav.libro} ${fav.capitulo}:${fav.versiculo}</blockquote>
                    <div class="favorite-meta">
                        <span>Agregado: ${new Date(fav.fecha).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="favorite-actions">
                    <button onclick="buscarPorReferencia('${fav.libro} ${fav.capitulo}:${fav.versiculo}')" class="btn-icon">👁️</button>
                    <button onclick="eliminarFavorito('${fav.libro}', ${fav.capitulo}, ${fav.versiculo})" class="btn-icon">🗑️</button>
                </div>
            </div>
        `;
    });
    
    favoritesList.innerHTML = html;
}

// Eliminar favorito
function eliminarFavorito(libro, capitulo, versiculo) {
    let favoritos = JSON.parse(localStorage.getItem('versiculosFavoritos') || '[]');
    favoritos = favoritos.filter(fav => 
        !(fav.libro === libro && fav.capitulo === capitulo && fav.versiculo === versiculo)
    );
    localStorage.setItem('versiculosFavoritos', JSON.stringify(favoritos));
    cargarFavoritos();
    showNotification('Versículo eliminado de favoritos', '🗑️');
}

// Función de notificación
function showNotification(message, icon = 'ℹ️') {
    // Verificar si ya existe una función showNotification
    if (typeof window.showNotification === 'function' && window.showNotification !== showNotification) {
        window.showNotification(message, icon);
        return;
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `${icon} ${message}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #22c55e;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar estilos CSS para notificaciones si no existen
if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Exportar funciones al ámbito global
window.mostrarSeccion = mostrarSeccion;
window.mostrarTestamento = mostrarTestamento;
window.abrirLibro = abrirLibro;
window.cargarCapitulo = cargarCapitulo;
window.navegarCapitulo = navegarCapitulo;
window.buscarPorReferencia = buscarPorReferencia;
window.shareVerse = shareVerse;
window.marcarVersiculo = marcarVersiculo;
window.loadRandomVerse = cargarVersiculoDelDia;
window.showNotification = showNotification;

// Funciones para compatibilidad
function showSearch() {
    mostrarSeccion('busqueda');
    document.getElementById('search-input')?.focus();
}

function showFavorites() {
    mostrarSeccion('favoritos');
}

function addToFavorites() {
    const text = document.getElementById('daily-verse-text')?.textContent.replace(/"/g, '') || '';
    const ref = document.getElementById('daily-verse-ref')?.textContent || '';
    
    if (text && ref) {
        const match = ref.match(/(\d*\s*\w+)\s+(\d+):(\d+)/);
        if (match) {
            const [, libro, capitulo, versiculo] = match;
            marcarVersiculo(libro.trim(), parseInt(capitulo), parseInt(versiculo));
        }
    }
}

// Asegurar que las funciones existentes estén disponibles
window.showSearch = showSearch;
window.showFavorites = showFavorites;
window.addToFavorites = addToFavorites;
/* ============================
   📖 BIBLIA RVR1960 COMPLETA - CARGADA DESDE ARCHIVOS JSON
============================ */

class BibliaRVR1960 {
    constructor() {
        this.basePath = './biblia'; // Ruta base de los archivos JSON
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
    }

    // Obtener archivo JSON de un capítulo
    async obtenerCapitulo(nombreLibro, capitulo) {
        const libro = this.libros.find(l => l.nombre === nombreLibro);
        if (!libro) {
            console.error('Libro no encontrado:', nombreLibro);
            return null;
        }

        // Nombre de carpeta según tu estructura
        const carpeta = this.getCarpetaLibro(libro.nombre);
        const url = `${this.basePath}/${carpeta}/${capitulo}.json`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error HTTP ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error cargando capítulo:', error);
            return null;
        }
    }

    // Mapear nombre del libro a carpeta (ajusta según tu estructura)
    getCarpetaLibro(nombreLibro) {
        // Remover números si existen (ej: "1 Samuel" -> "Samuel")
        return nombreLibro.replace(/^\d+\s+/, '');
    }

    // Obtener versículo aleatorio
    async obtenerVersiculoAleatorio() {
        // Elegir libro aleatorio
        const libro = this.libros[Math.floor(Math.random() * this.libros.length)];
        const capitulo = Math.floor(Math.random() * libro.cap) + 1;
        
        const data = await this.obtenerCapitulo(libro.nombre, capitulo);
        if (!data) return null;
        
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

    // Buscar versículos por texto
    async buscarVersiculos(texto, libroFiltro = null, testamentoFiltro = null) {
        const resultados = [];
        const busqueda = texto.toLowerCase();
        
        // Limitar búsqueda para mejor rendimiento
        const librosABuscar = libroFiltro 
            ? this.libros.filter(l => l.nombre === libroFiltro)
            : testamentoFiltro
                ? this.libros.filter(l => l.testament === testamentoFiltro)
                : this.libros.slice(0, 5); // Limitar a 5 libros para búsqueda general
        
        for (const libro of librosABuscar) {
            // Solo revisar algunos capítulos por libro para no sobrecargar
            const capitulos = Math.min(libro.cap, 5);
            
            for (let cap = 1; cap <= capitulos; cap++) {
                const data = await this.obtenerCapitulo(libro.nombre, cap);
                if (data) {
                    Object.entries(data).forEach(([versiculo, textoVersiculo]) => {
                        if (textoVersiculo.toLowerCase().includes(busqueda)) {
                            resultados.push({
                                libro: libro.nombre,
                                capitulo: cap,
                                versiculo: parseInt(versiculo),
                                texto: textoVersiculo,
                                referencia: `${libro.nombre} ${cap}:${versiculo}`,
                                testamento: libro.testament
                            });
                        }
                    });
                }
                
                // Limitar resultados
                if (resultados.length >= 50) break;
            }
            if (resultados.length >= 50) break;
        }
        
        return resultados;
    }

    // Obtener versículo por referencia exacta
    async obtenerPorReferencia(referencia) {
        // Parsear referencia (ej: "Juan 3:16" o "1 Juan 2:1")
        const match = referencia.match(/(\d*\s*\w+)\s+(\d+):(\d+)/);
        if (!match) return null;
        
        const [, libroStr, capituloStr, versiculoStr] = match;
        
        // Encontrar libro
        const libro = this.libros.find(l => 
            l.nombre.toLowerCase() === libroStr.toLowerCase() ||
            l.abrev.toLowerCase() === libroStr.toLowerCase()
        );
        
        if (!libro) return null;
        
        const capitulo = parseInt(capituloStr);
        const versiculo = parseInt(versiculoStr);
        
        const data = await this.obtenerCapitulo(libro.nombre, capitulo);
        if (!data || !data[versiculo]) return null;
        
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
   📖 FUNCIONALIDAD DE INTERFAZ
============================ */

// Variable global para controlar secciones
let seccionActual = 'versiculo';

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', async function() {
    // Cargar versículo del día
    await cargarVersiculoDelDia();
    
    // Inicializar búsqueda rápida
    inicializarBusquedaRapida();
    
    // Cargar libros en la interfaz
    cargarLibrosInterfaz();
    
    // Configurar event listeners
    configurarEventListeners();
});

// Cargar versículo del día
async function cargarVersiculoDelDia() {
    // Verificar si hay versículo guardado para hoy
    const hoy = new Date().toDateString();
    const versiculoGuardado = localStorage.getItem('versiculoDelDia');
    
    if (versiculoGuardado) {
        const data = JSON.parse(versiculoGuardado);
        if (data.fecha === hoy) {
            mostrarVersiculo(data.texto, data.referencia);
            return;
        }
    }
    
    // Obtener nuevo versículo aleatorio
    const versiculo = await biblia.obtenerVersiculoAleatorio();
    if (versiculo) {
        mostrarVersiculo(versiculo.texto, versiculo.referencia);
        
        // Guardar para hoy
        localStorage.setItem('versiculoDelDia', JSON.stringify({
            ...versiculo,
            fecha: hoy
        }));
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
                buscarPorReferencia(this.value);
            }
        });
    }
}

// Buscar por referencia rápida
async function buscarPorReferencia(referencia) {
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
    if (!booksGrid) return;
    
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
}

// Mostrar testamento específico
function mostrarTestamento(testamento) {
    // Actualizar botones activos
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const booksGrid = document.getElementById('books-grid');
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
    const libro = biblia.libros.find(l => l.nombre === nombreLibro);
    if (!libro) return;
    
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
    
    // Cargar lista de capítulos
    const chaptersGrid = document.getElementById('reading-chapters-grid');
    let chaptersHTML = '';
    
    for (let i = 1; i <= Math.min(libro.cap, 10); i++) {
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
    const libro = biblia.libros.find(l => l.nombre === nombreLibro);
    if (!libro) return;
    
    // Actualizar UI
    document.getElementById('chapter-title').textContent = `${libro.nombre} ${numeroCapitulo}`;
    document.getElementById('chapter-input').value = numeroCapitulo;
    
    // Mostrar loading
    const chapterContent = document.getElementById('chapter-content');
    chapterContent.innerHTML = '<div class="loading">Cargando capítulo...</div>';
    
    // Obtener datos del capítulo
    const data = await biblia.obtenerCapitulo(nombreLibro, numeroCapitulo);
    
    if (!data) {
        chapterContent.innerHTML = '<p class="error">Error cargando el capítulo</p>';
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
}

// Navegar entre capítulos
async function navegarCapitulo(direccion) {
    if (!biblia.libroActual || !biblia.capituloActual) return;
    
    const libro = biblia.libros.find(l => l.nombre === biblia.libroActual);
    if (!libro) return;
    
    let nuevoCapitulo = biblia.capituloActual;
    
    if (direccion === 'prev' && nuevoCapitulo > 1) {
        nuevoCapitulo--;
    } else if (direccion === 'next' && nuevoCapitulo < libro.cap) {
        nuevoCapitulo++;
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
    // Ocultar todas las secciones
    document.getElementById('verse-section').style.display = 'none';
    document.getElementById('search-section').style.display = 'none';
    document.getElementById('favorites-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    
    const readingSection = document.getElementById('reading-section');
    if (readingSection) {
        readingSection.style.display = 'none';
    }
    
    // Mostrar sección solicitada
    switch(seccion) {
        case 'versiculo':
            document.getElementById('verse-section').style.display = 'block';
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

// Realizar búsqueda avanzada
async function realizarBusquedaAvanzada() {
    const query = document.getElementById('search-input')?.value || '';
    const book = document.getElementById('book-select')?.value || '';
    const testament = document.getElementById('testament-select')?.value || '';
    
    // Mostrar loading
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '<div class="loading-results"><div class="loading-spinner"></div><p>Buscando...</p></div>';
    
    // Realizar búsqueda
    const resultados = await biblia.buscarVersiculos(query, book || null, testament || null);
    
    // Mostrar resultados
    mostrarResultadosBusqueda(resultados);
}

// Mostrar resultados de búsqueda
function mostrarResultadosBusqueda(resultados) {
    const resultsDiv = document.getElementById('search-results');
    
    if (resultados.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No se encontraron resultados</h3>
                <p>Intenta con otras palabras o ajusta los filtros</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="results-header">
            <h3>📚 ${resultados.length} resultado${resultados.length !== 1 ? 's' : ''} encontrado${resultados.length !== 1 ? 's' : ''}</h3>
        </div>
        <div class="results-list">
    `;
    
    resultados.forEach((versiculo, index) => {
        html += `
            <div class="result-item">
                <div class="result-content">
                    <div class="result-text">
                        <blockquote>"${versiculo.texto}"</blockquote>
                        <cite class="result-ref">${versiculo.referencia}</cite>
                    </div>
                    <div class="result-meta">
                        <span class="result-book">${versiculo.libro}</span>
                        <span class="result-testament">${versiculo.testamento === 'AT' ? 'Antiguo Testamento' : 'Nuevo Testamento'}</span>
                    </div>
                </div>
                <div class="result-actions">
                    <button onclick="mostrarVersiculo('${versiculo.texto.replace(/'/g, "\\'")}', '${versiculo.referencia}'); mostrarSeccion('versiculo')" 
                            class="btn-icon" title="Ver versículo">
                        👁️
                    </button>
                    <button onclick="marcarVersiculo('${versiculo.libro}', ${versiculo.capitulo}, ${versiculo.versiculo})" 
                            class="btn-icon" title="Agregar a favoritos">
                        ❤️
                    </button>
                    <button onclick="abrirLibro('${versiculo.libro}'); setTimeout(() => cargarCapitulo('${versiculo.libro}', ${versiculo.capitulo}), 100)" 
                            class="btn-icon" title="Leer contexto">
                        📖
                    </button>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    resultsDiv.innerHTML = html;
}

// Cargar favoritos
function cargarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('versiculosFavoritos') || '[]');
    const favoritesList = document.getElementById('favorites-list');
    
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
    } else {
        navigator.clipboard.writeText(`${text} ${ref}`);
        showNotification('Versículo copiado al portapapeles', '📋');
    }
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

// Funciones existentes que deben permanecer
function showSearch() {
    mostrarSeccion('busqueda');
    document.getElementById('search-input')?.focus();
}

function showFavorites() {
    mostrarSeccion('favoritos');
}

function startQuiz() {
    mostrarSeccion('quiz');
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
window.startQuiz = startQuiz;
window.addToFavorites = addToFavorites;
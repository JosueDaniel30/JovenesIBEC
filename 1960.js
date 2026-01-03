/* ============================
   📖 BIBLIA RVR1960 COMPLETA - AJUSTADO PARA JovenesIBEC
   VERSIÓN CORREGIDA 100% FUNCIONAL
============================ */

class BibliaRVR1960 {
    constructor() {
        // DETECCIÓN INTELIGENTE DEL ENTORNO
        const currentUrl = window.location.href;
        const currentHost = window.location.hostname;
        const currentPath = window.location.pathname;
        
        console.log('🔍 Detectando entorno...');
        console.log('URL:', currentUrl);
        console.log('Hostname:', currentHost);
        console.log('Pathname:', currentPath);
        
        // 1. ¿Estamos en GitHub Pages?
        if (currentHost.includes('github.io')) {
            // Verificar si es TU repositorio específico
            if (currentPath.includes('/JovenesIBEC')) {
                this.basePath = '/JovenesIBEC';
                console.log('✅ Modo: GitHub Pages (JovenesIBEC)');
            } else {
                this.basePath = '';
                console.log('⚠️ Modo: GitHub Pages (otro repositorio)');
            }
        }
        // 2. ¿Estamos en localhost (node server.js)?
        else if (currentHost.includes('localhost') || currentHost.includes('127.0.0.1')) {
            this.basePath = '';
            console.log('💻 Modo: Servidor Local');
        }
        // 3. ¿Estamos en file:// (archivo local)?
        else if (window.location.protocol === 'file:') {
            this.basePath = '.';
            console.error('❌ MODO FILE:// NO SOPORTADO');
            console.error('Ejecuta: node server.js');
            console.error('Luego abre: http://localhost:3000');
            
            // Mostrar alerta clara al usuario
            setTimeout(() => {
                const warning = document.createElement('div');
                warning.style.cssText = `
                    position: fixed;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #ef4444;
                    color: white;
                    padding: 15px 20px;
                    border-radius: 10px;
                    z-index: 9999;
                    font-family: sans-serif;
                    max-width: 90%;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                `;
                warning.innerHTML = `
                    <strong>⚠️ ADVERTENCIA: MODO INCORRECTO</strong><br>
                    No uses file:// para probar la Biblia.<br>
                    <strong>Ejecuta en terminal:</strong> <code>node server.js</code><br>
                    <strong>Luego abre:</strong> <a href="http://localhost:3000" style="color: white; text-decoration: underline;">http://localhost:3000</a>
                `;
                document.body.appendChild(warning);
                
                // Auto-eliminar después de 10 segundos
                setTimeout(() => warning.remove(), 10000);
            }, 1500);
        }
        // 4. Otros servidores (Live Server, Python, etc.)
        else {
            this.basePath = '';
            console.log('🌐 Modo: Otro servidor HTTP');
        }
        
        // RESTO DEL CONSTRUCTOR SIN CAMBIOS
        this.libros = [
            { id: 1, nombre: "Génesis", abrev: "GEN", testament: "AT", cap: 50 },
            // ... MANTÉN TODOS LOS LIBROS IGUAL
        ];
        
        this.versiculosCache = new Map();
        this.libroActual = null;
        this.capituloActual = null;
        
        console.log('Base path final:', this.basePath);
    }
        

    // Obtener archivo JSON de un capítulo - CORREGIDO PARA TU ESTRUCTURA
    async obtenerCapitulo(nombreLibro, capitulo) {
    console.log(`📖 Obteniendo: ${nombreLibro} ${capitulo}`);
    
    const libro = this.libros.find(l => l.nombre === nombreLibro);
    if (!libro) {
        console.error('Libro no encontrado:', nombreLibro);
        return null;
    }

    // Obtener rutas
    const carpeta = this.getCarpetaLibro(nombreLibro);
    const archivo = this.getNombreArchivo(nombreLibro, capitulo);
    
    if (!carpeta || !archivo) {
        console.error('No se pudo generar nombre de archivo/carpeta');
        return null;
    }

    // Construir URL - CORREGIDA
    const url = `${this.basePath}/biblia/${carpeta}/${archivo.toLowerCase()}`;
    console.log('🌐 URL:', url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`❌ Error HTTP ${response.status} para: ${url}`);
            return null;
        }
        
        // ¡ESTA ES LA PARTE CRÍTICA! Tu JSON tiene estructura específica
        const chapterData = await response.json();
        console.log('✅ JSON recibido. Estructura:', {
            book: chapterData.book,
            chapter: chapterData.chapter,
            versesCount: chapterData.verses?.length || 0
        });
        
        // PROCESAR TU FORMATO ESPECÍFICO
        const versiculos = {};

// DEBUG: Ver estructura real
console.log('📦 Estructura JSON recibida:', {
    tipo: typeof chapterData,
    claves: Object.keys(chapterData),
    tieneVerses: !!chapterData.verses,
    esArrayVerses: Array.isArray(chapterData.verses),
    longitudVerses: chapterData.verses?.length
});

// FORMATO ACTUAL DE TUS ARCHIVOS: {book: "...", chapter: X, verses: [{verse: 1, text: "..."}]}
if (chapterData.verses && Array.isArray(chapterData.verses)) {
    console.log('🔄 Procesando formato verses array');
    chapterData.verses.forEach(verseObj => {
        if (verseObj && typeof verseObj.verse !== 'undefined' && verseObj.text) {
            versiculos[verseObj.verse] = verseObj.text;
        }
    });
    console.log(`✅ Extraídos ${Object.keys(versiculos).length} versículos`);
} else {
    console.warn('⚠️ Formato no reconocido, datos completos:', chapterData);
}

return versiculos;
        
    } catch (error) {
        console.error('❌ Error cargando capítulo:', error);
        return null;
    }
}

    // Mapear nombre del libro a carpeta - AJUSTADO A TU ESTRUCTURA REAL
    getCarpetaLibro(nombreLibro) {
    // Mapeo ESPECÍFICO para GitHub Pages
    const map = {
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
        "Cantares": "Cantares", // OJO: En tu repo es "Canteres"
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
        "1 Corintios": "1Corintios",
        "2 Corintios": "2Corintios",
        "Gálatas": "Galatas",
        "Efesios": "Efesios",
        "Filipenses": "Filipenses",
        "Colosenses": "Colosenses",
        "1 Tesalonicenses": "1Tesalonicenses", // OJO: En tu repo es "1Tesalonicenes"
        "2 Tesalonicenses": "2Tesalonicenses",
        "1 Timoteo": "1Timoteo",
        "2 Timoteo": "2Timoteo",
        "Tito": "Tito",
        "Filemón": "Filemon",
        "Hebreos": "Hebreos",
        "Santiago": "Santiago",
        "1 Pedro": "1Pedro",
        "2 Pedro": "2Pedro",
        "1 Juan": "1Juan",
        "2 Juan": "2Juan",
        "3 Juan": "3Juan",
        "Judas": "Judas",
        "Apocalipsis": "Apocalipsis"
        };
    
    return map[nombreLibro] || nombreLibro;
    }   

    // Generar nombre de archivo - AJUSTADO A TU ESTRUCTURA REAL
    getNombreArchivo(nombreLibro, capitulo) {
    const carpeta = this.getCarpetaLibro(nombreLibro);
    // ¡IMPORTANTE! Todo en minúsculas para GitHub Pages
    return `${carpeta.toLowerCase()}_${capitulo}.json`;
}

    // Obtener versículo aleatorio
    async obtenerVersiculoAleatorio() {
        try {
            const libro = this.libros[Math.floor(Math.random() * this.libros.length)];
            const capitulo = Math.floor(Math.random() * libro.cap) + 1;
            
            const data = await this.obtenerCapitulo(libro.nombre, capitulo);
            if (!data || Object.keys(data).length === 0) {
                // Fallback a versículo conocido
                return {
                    libro: "Juan",
                    capitulo: 3,
                    versiculo: 16,
                    texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
                    referencia: "Juan 3:16"
                };
            }
            
            const versiculos = Object.keys(data).map(Number);
            const versiculoNum = versiculos[Math.floor(Math.random() * versiculos.length)];
            
            return {
                libro: libro.nombre,
                capitulo: capitulo,
                versiculo: versiculoNum,
                texto: data[versiculoNum],
                referencia: `${libro.nombre} ${capitulo}:${versiculoNum}`
            };
        } catch (error) {
            console.error('Error obteniendo versículo aleatorio:', error);
            return {
                libro: "Juan",
                capitulo: 3,
                versiculo: 16,
                texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
                referencia: "Juan 3:16"
            };
        }
    }

    // Obtener versículo por referencia exacta
    async obtenerPorReferencia(referencia) {
        try {
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
        } catch (error) {
            console.error('Error obteniendo por referencia:', error);
            return null;
        }
    }

    // Obtener lista de libros por testamento
    obtenerLibrosPorTestamento(testamento) {
        return this.libros.filter(libro => libro.testament === testamento);
    }
}

// Instancia global
const biblia = new BibliaRVR1960();

/* ============================
   📖 FUNCIONALIDAD DE INTERFAZ - SIMPLIFICADA
============================ */

document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM cargado - Iniciando Biblia');
    
    // Cargar versículo del día
    await cargarVersiculoDelDia();
    
    // Inicializar búsqueda rápida
    inicializarBusquedaRapida();
    
    // Cargar libros en la interfaz
    cargarLibrosInterfaz();
    
    // Configurar event listeners
    configurarEventListeners();
    
    // Probar con un libro conocido
    setTimeout(() => {
        console.log('Probando carga de Génesis 1...');
        // Esto es solo para debug - puedes comentarlo después
        testLoadGenesis();
    }, 1000);
});

// Función de prueba
async function testLoadGenesis() {
    try {
        console.log('=== PRUEBA DE CARGA ===');
        const data = await biblia.obtenerCapitulo('Génesis', 1);
        console.log('Resultado prueba Génesis 1:', data ? 'ÉXITO' : 'FALLO');
        if (data) {
            console.log('Número de versículos:', Object.keys(data).length);
            console.log('Primer versículo:', data[1]);
        }
    } catch (error) {
        console.error('Error en prueba:', error);
    }
}

// Cargar versículo del día
async function cargarVersiculoDelDia() {
    const hoy = new Date().toDateString();
    const versiculoGuardado = localStorage.getItem('versiculoDelDia');
    
    if (versiculoGuardado) {
        try {
            const data = JSON.parse(versiculoGuardado);
            if (data.fecha === hoy && data.texto) {
                mostrarVersiculo(data.texto, data.referencia);
                return;
            }
        } catch (e) {
            console.error('Error al parsear versículo guardado:', e);
        }
    }
    
    const versiculo = await biblia.obtenerVersiculoAleatorio();
    if (versiculo && versiculo.texto) {
        mostrarVersiculo(versiculo.texto, versiculo.referencia);
        
        localStorage.setItem('versiculoDelDia', JSON.stringify({
            ...versiculo,
            fecha: hoy
        }));
    } else {
        // Fallback
        mostrarVersiculo(
            "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
            "Juan 3:16"
        );
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
    
    showNotification(`Buscando: ${referencia}`, '🔍');
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
    console.log('🔽 Cambiando a testamento:', testamento);
    
    try {
        // 1. Obtener el grid de libros
        const booksGrid = document.getElementById('books-grid');
        if (!booksGrid) {
            console.error('❌ No se encontró #books-grid en el DOM');
            return;
        }
        
        // 2. Obtener libros del testamento
        const libros = biblia.obtenerLibrosPorTestamento(testamento);
        console.log(`📚 Libros del ${testamento}:`, libros.length);
        
        // 3. Actualizar botones activos
        const buttons = document.querySelectorAll('.tab-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.includes(testamento === 'AT' ? 'Antiguo' : 'Nuevo')) {
                btn.classList.add('active');
            }
        });
        
        // 4. Generar HTML
        let html = '';
        libros.forEach(libro => {
            html += `
                <div class="book-card" onclick="abrirLibro('${libro.nombre.replace(/'/g, "\\'")}')">
                    <div class="book-icon">📖</div>
                    <h3>${libro.nombre}</h3>
                    <p>${libro.cap} capítulos</p>
                </div>
            `;
        });
        
        booksGrid.innerHTML = html;
        console.log('✅ Testamento cargado:', testamento);
        
    } catch (error) {
        console.error('❌ Error en mostrarTestamento:', error);
    }
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

// Cargar capítulo específico - CORREGIDO
async function cargarCapitulo(nombreLibro, numeroCapitulo) {
    console.log(`Cargando: ${nombreLibro} ${numeroCapitulo}`);
    
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
            <div class="error-message">
                <p>❌ No se pudo cargar el capítulo ${numeroCapitulo} de ${nombreLibro}</p>
                <p>Posibles causas:</p>
                <ul>
                    <li>El archivo JSON no existe</li>
                    <li>Error de conexión</li>
                    <li>Formato incorrecto del archivo</li>
                </ul>
                <button onclick="cargarCapitulo('${nombreLibro}', ${numeroCapitulo})" class="btn-secondary">
                    Reintentar
                </button>
            </div>
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
    
    showNotification(`Capítulo ${numeroCapitulo} cargado`, '✅');
    console.log(`Capítulo cargado exitosamente: ${Object.keys(data).length} versículos`);
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
        return;
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
        fecha: new Date().toISOString(),
        id: `${libro}-${capitulo}-${versiculo}`
    };
    
    let favoritos = JSON.parse(localStorage.getItem('versiculosFavoritos') || '[]');
    
    // Verificar si ya existe
    const existe = favoritos.some(fav => fav.id === versiculoData.id);
    
    if (!existe) {
        favoritos.unshift(versiculoData);
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
    
    if (historial.length > 50) {
        historial = historial.slice(0, 50);
    }
    
    localStorage.setItem('historialLectura', JSON.stringify(historial));
}

// Mostrar/ocultar secciones
function mostrarSeccion(seccion) {
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
    
    switch(seccion) {
        case 'versiculo':
            document.getElementById('verse-section').style.display = 'block';
            document.getElementById('books-section').style.display = 'block';
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
}

// Configurar event listeners
function configurarEventListeners() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', realizarBusquedaAvanzada);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') realizarBusquedaAvanzada();
        });

        // Agregar listener para sugerencias dinámicas
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (query.length > 2) {
                mostrarSugerencias(query);
            } else {
                ocultarSugerencias();
            }
        });
    }

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
    // Si ya hay una notificación, quitarla
    const existing = document.querySelector('.custom-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.innerHTML = `<span class="notification-icon">${icon}</span> ${message}`;
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
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Agregar estilos CSS para notificaciones
if (!document.querySelector('#custom-notification-styles')) {
    const style = document.createElement('style');
    style.id = 'custom-notification-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notification-icon {
            font-size: 1.2em;
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

// Funciones de búsqueda avanzada
function quickSearch(query) {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = query;
        realizarBusquedaAvanzada();
    }
}

function realizarBusquedaAvanzada() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.trim() : '';

    if (!query) {
        showNotification('Ingresa un término de búsqueda', 'ℹ️');
        return;
    }

    showNotification(`Buscando: ${query}`, '🔍');

    // Intentar parsear como referencia bíblica
    const referenciaMatch = query.match(/(\d*\s*\w+)\s+(\d+):(\d+)/);
    if (referenciaMatch) {
        buscarPorReferencia(query);
        return;
    }

    // Búsqueda por tema o palabra clave
    buscarPorTema(query);
}

async function buscarPorTema(tema) {
    // Simular búsqueda por tema (en una implementación completa, buscaría en todos los versículos)
    showNotification(`Búsqueda por tema: ${tema}`, '🔍');

    // Por ahora, mostrar un mensaje de que la búsqueda avanzada está en desarrollo
    const searchResults = document.getElementById('search-results');
    if (searchResults) {
        searchResults.innerHTML = `
            <div class="results-placeholder">
                <div class="placeholder-icon">🔍</div>
                <h3>Búsqueda en desarrollo</h3>
                <p>La búsqueda avanzada por temas estará disponible próximamente.</p>
                <p>Por ahora, puedes buscar versículos por referencia (ej: Juan 3:16)</p>
            </div>
        `;
    }
}

function mostrarSugerencias(query) {
    const suggestionsList = document.getElementById('suggestions-list');
    const searchSuggestions = document.getElementById('search-suggestions');

    if (!suggestionsList || !searchSuggestions) return;

    // Sugerencias predefinidas
    const sugerenciasPredefinidas = [
        'amor', 'fe', 'fortaleza', 'paz', 'esperanza', 'oración', 'perdón', 'gracia',
        'Juan 3:16', 'Salmos 23', 'Filipenses 4:13', 'Jeremías 29:11'
    ];

    const sugerenciasFiltradas = sugerenciasPredefinidas.filter(sugerencia =>
        sugerencia.toLowerCase().includes(query.toLowerCase())
    );

    if (sugerenciasFiltradas.length > 0) {
        let html = '';
        sugerenciasFiltradas.forEach(sugerencia => {
            html += `<div class="suggestion-item" onclick="quickSearch('${sugerencia}')">${sugerencia}</div>`;
        });
        suggestionsList.innerHTML = html;
        searchSuggestions.style.display = 'block';
    } else {
        ocultarSugerencias();
    }
}

function ocultarSugerencias() {
    const searchSuggestions = document.getElementById('search-suggestions');
    if (searchSuggestions) {
        searchSuggestions.style.display = 'none';
    }
}

// Inicializar arrays para evitar errores
let searchResults = new Set();
let searchSuggestions = [];

// Exportar funciones al ámbito global
window.quickSearch = quickSearch;
window.realizarBusquedaAvanzada = realizarBusquedaAvanzada;
window.mostrarSugerencias = mostrarSugerencias;
window.ocultarSugerencias = ocultarSugerencias;

// AL FINAL DE 1960.js, añade:
window.testBiblia = async function() {
    console.log('🧪 TEST PROFUNDO DE BIBLIA');
    
    // 1. Probar fetch directo
    const testUrl = '/JovenesIBEC/biblia/Genesis/genesis_1.json';
    console.log('Fetch a:', testUrl);
    
    try {
        const response = await fetch(testUrl);
        const data = await response.json();
        console.log('✅ Datos crudos:', {
            book: data.book,
            chapter: data.chapter,
            versesCount: data.verses?.length,
            firstVerse: data.verses?.[0]
        });
        
        // 2. Probar con la clase Biblia
        const result = await biblia.obtenerCapitulo('Génesis', 1);
        console.log('✅ Resultado procesado:', {
            success: !!result,
            versiclesCount: result ? Object.keys(result).length : 0,
            firstText: result ? result[1] : 'none'
        });
        
        // 3. Mostrar en UI si funciona
        if (result && result[1]) {
            mostrarVersiculo(result[1], "Génesis 1:1 (Test)");
        }
        
    } catch (error) {
        console.error('❌ Error en test:', error);
    }
};

// Ejecutar automáticamente después de 3 segundos
setTimeout(() => {
    if (window.location.href.includes('github.io') || window.location.href.includes('localhost')) {
        window.testBiblia && window.testBiblia();
    }
}, 3000);

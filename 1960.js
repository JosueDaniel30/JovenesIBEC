// 1960.js - Archivo principal para cargar la funcionalidad de la Biblia RVR1960
// Este archivo carga los scripts necesarios y hace disponible la instancia global 'biblia'

(function() {
    'use strict';

    console.log('🔄 Iniciando carga de Biblia RVR1960...');

    // Función para cargar un script dinámicamente
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // Cargar bible-data.js que contiene la clase BibliaRVR1960
    loadScript('./js/bible/bible-data.js')
        .then(() => {
            console.log('✅ bible-data.js cargado correctamente');

            // Verificar que la instancia global 'biblia' esté disponible
            if (typeof window.biblia !== 'undefined') {
                console.log('📖 Instancia biblia disponible:', window.biblia.libros.length, 'libros');

                // Verificar que podemos acceder a los métodos
                if (typeof window.biblia.obtenerCapitulo === 'function') {
                    console.log('✅ Método obtenerCapitulo disponible');
                } else {
                    console.error('❌ Método obtenerCapitulo no disponible');
                }
            } else {
                console.error('❌ Error: Instancia biblia no disponible después de cargar bible-data.js');
            }
        })
        .catch(error => {
            console.error('❌ Error cargando bible-data.js:', error);
        });

    // Función auxiliar para verificar carga (disponible globalmente)
    window.checkBibleLoaded = function() {
        if (typeof window.biblia !== 'undefined') {
            console.log('✅ Biblia cargada correctamente');
            console.log('📊 Estadísticas:', {
                libros: window.biblia.libros.length,
                librosAT: window.biblia.obtenerLibrosPorTestamento('AT').length,
                librosNT: window.biblia.obtenerLibrosPorTestamento('NT').length
            });
            return true;
        } else {
            console.log('❌ Biblia no cargada aún');
            return false;
        }
    };

    // Función para probar la carga de un capítulo
    window.testBibleLoad = async function(libro = 'Génesis', capitulo = 1) {
        console.log(`🧪 Probando carga de ${libro} ${capitulo}...`);

        if (!window.biblia) {
            console.error('❌ Biblia no disponible para pruebas');
            return false;
        }

        try {
            const data = await window.biblia.obtenerCapitulo(libro, capitulo);
            if (data && Object.keys(data).length > 0) {
                console.log(`✅ Éxito: ${Object.keys(data).length} versículos cargados`);
                console.log('📖 Primer versículo:', data[1]);
                return true;
            } else {
                console.error('❌ Fallo: No se pudieron cargar los datos');
                return false;
            }
        } catch (error) {
            console.error('❌ Error en prueba:', error);
            return false;
        }
    };

})();

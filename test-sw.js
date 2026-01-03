// Test script for Service Worker registration
// Run this in the browser console on http://localhost:3000/biblia.html

console.log('🔧 Testing Service Worker Registration...');

// Check if service workers are supported
if ('serviceWorker' in navigator) {
    console.log('✅ Service Workers are supported');

    // Get current environment info
    const currentHost = window.location.hostname;
    const currentPath = window.location.pathname;
    console.log('🌐 Current environment:', { host: currentHost, path: currentPath });

    // Determine expected SW path
    let expectedSwPath = '/sw.js'; // Default
    if (currentHost.includes('github.io') || currentPath.includes('/JovenesIBEC')) {
        expectedSwPath = '/JovenesIBEC/sw.js';
    }
    console.log('📁 Expected SW path:', expectedSwPath);

    // Check if SW is already registered
    navigator.serviceWorker.getRegistrations().then(registrations => {
        console.log('📋 Current registrations:', registrations.length);
        registrations.forEach(reg => {
            console.log('  - Scope:', reg.scope);
            console.log('  - State:', reg.active ? reg.active.state : 'inactive');
        });
    });

    // Try to register SW
    navigator.serviceWorker.register(expectedSwPath)
        .then(registration => {
            console.log('✅ Service Worker registered successfully!');
            console.log('📍 Registration scope:', registration.scope);
            console.log('🔄 Registration state:', registration.active ? 'active' : 'installing');

            // Listen for updates
            registration.addEventListener('updatefound', () => {
                console.log('🔄 Service Worker update found');
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', () => {
                    console.log('🔄 New SW state:', newWorker.state);
                });
            });

            // Check cache status
            caches.keys().then(cacheNames => {
                console.log('💾 Cache names:', cacheNames);
                cacheNames.forEach(name => {
                    caches.open(name).then(cache => {
                        cache.keys().then(requests => {
                            console.log(`  📦 ${name}: ${requests.length} items`);
                        });
                    });
                });
            });

        })
        .catch(error => {
            console.error('❌ Service Worker registration failed:', error);
        });

} else {
    console.error('❌ Service Workers are not supported in this browser');
}

// Test Bible loading
console.log('📖 Testing Bible loading...');
if (typeof biblia !== 'undefined') {
    console.log('✅ Biblia object available');

    // Test loading a chapter
    biblia.obtenerCapitulo('Génesis', 1).then(data => {
        if (data && Object.keys(data).length > 0) {
            console.log('✅ Bible chapter loaded successfully');
            console.log('📊 Verses count:', Object.keys(data).length);
        } else {
            console.error('❌ Failed to load Bible chapter');
        }
    }).catch(error => {
        console.error('❌ Error loading Bible chapter:', error);
    });
} else {
    console.error('❌ Biblia object not found');
}

console.log('🏁 Test completed. Check console for results.');

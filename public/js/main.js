if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        const items = localStorage.getItem('cacheItems')
        navigator.serviceWorker
            .register('../js/sw_cached_pages.js?values=' + encodeURIComponent(items))
            .then(reg => console.log('service worker registerd'))
            .catch(e => console.log(`service worker error: ${e}`))
        
        
    })
}
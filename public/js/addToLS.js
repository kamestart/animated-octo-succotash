const bb = window.location.toString()
const abc = bb.split('/')
const id = abc[4]

if (localStorage.getItem(`videoId-${id}`) == null) {
    localStorage.setItem(`videoId-${id}`, id)
}


if (localStorage.getItem('videoIods') != null) {
    let n;
    n = []
    
    for (var i = 0; i < localStorage.length; i++){
        const avc = localStorage.key(i).toString()
        if (avc.includes('videoId')) {
            n.push(localStorage.getItem(avc))
        }
    }
    localStorage.setItem('videoIods', JSON.stringify(n))
    
} else {
    const abc = []
    abc[0] = id
    localStorage.setItem('videoIods', JSON.stringify(abc))
}

if (localStorage.getItem('cacheItems') != null) {
    const items = []
    var tg = localStorage.getItem('videoIods')
    tg = JSON.parse(tg)

    var i

    for(i = 0; i < tg.length; i++) {
        if (window.location.protocol === 'http:') {
            items.push("http://localhost:5500/videos/get_one/" + tg[i])
        } else {
            items.push('https://youtube-backend-123/videos/get_one/' + tg[i])
        }
        
    }


    const hh = JSON.stringify(items)
    localStorage.setItem('cacheItems', hh)
} else {
    const items = []
    var tg = localStorage.getItem('videoIods')
    tg = JSON.parse(tg)

    var i

    for(i = 0; i < tg.length; i++) {
        
        if (window.location.protocol === 'http:') {
            items.push("http://localhost:5500/videos/get_one/" + tg[i])
        } else {
            items.push('https://youtube-backend-123/videos/get_one/' + tg[i])
        }
        
    }

    
    const hh = JSON.stringify(items)
    localStorage.setItem('cacheItems', hh)
}

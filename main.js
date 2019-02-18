(() => {
    const n = document.querySelector('header')
    var no = n.offsetTop
    var o = window.innerHeight - 80
    const h = document.getElementById('scrolltop')
    const m = document.querySelector('main')

    window.onscroll = () => {
        if (window.pageYOffset >= no) {
            n.classList.add('sticky')
            m.classList.add('adjust')
        } else {
            n.classList.remove('sticky')
            m.classList.remove('adjust')
        }

        if (document.body.scrollTop > o / 2 || document.documentElement.scrollTop > o / 2)
            h.setAttribute('style', ``)
        else
            h.setAttribute('style', `display:none`)
    }

    window.onresize = () => {
        no = n.offsetTop
        o = window.innerHeight - 80
    }

    if (location.search.includes('dark')) {
        document.querySelector('body').classList.add('dark')
        document.querySelector('html').classList.add('dark')
    }

    /* deel van https://stackoverflow.com/a/33124043 */
    if (location.search.startsWith('?')) {
        document.querySelectorAll('a').forEach(el => {
            if (!el.classList.contains('not')) {
                var elUrl = el.getAttribute('href')
                if (elUrl) {
                    if (elUrl.indexOf('?') > -1)
                        elUrl += '&'
                    else
                        elUrl += '?'
                    elUrl += location.search.substr(1)
                    el.setAttribute('href', elUrl)
                }
            }
        })
    }

    document.getElementById('open').onclick = () => document.querySelector('menu').classList.add('show')
    document.getElementById('close').onclick = () => document.querySelector('menu').classList.remove('show')
    document.getElementById('scrolltop').onclick = e => { e.preventDefault();document.body.scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'}); }
    document.getElementById('dc').onclick = e => { e.preventDefault();document.getElementById('add-discord').style.display='inherit' }
    document.getElementById('close-dc').onclick = e => { e.preventDefault();document.getElementById('add-discord').style.display='none' }
})()

const viewImage = (imagePath, description) => {
    const v = document.getElementById('viewImage')
    const i = document.getElementById('i')
    const d = document.getElementById('d')
    const c = document.getElementById('c')

    i.innerHTML = `<img src="${imagePath}" alt="${description}">`
    d.innerHTML = `<div class="container">${description.toString()
        .replace('<script', '&lt;nein')
        .replace('</script', '&lt;/nein')}</div>`
    v.style.display = 'grid'
    c.onclick = e => {
        e.preventDefault()
        document.getElementById('viewImage').style.display = 'none'
    }
}

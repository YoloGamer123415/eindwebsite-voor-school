(function(){
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

    //if (window.location.hash == '#top')
    //    document.querySelector('main').scrollIntoView({
    //        behavior: 'auto',
    //        block: 'start',
    //        inline: 'nearest'
    //    })

    document.getElementById('open').onclick = () => document.querySelector('menu').classList.add('show')
    document.getElementById('close').onclick = () => document.querySelector('menu').classList.remove('show')
    document.getElementById('scrolltop').onclick = e => { e.preventDefault();document.body.scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'}); }
    document.getElementById('dc').onclick = e => { e.preventDefault();document.getElementById('add-discord').style.display='inherit' }
    document.getElementById('close-dc').onclick = e => { e.preventDefault();document.getElementById('add-discord').style.display='none' }
})()

const viewImage = (imagePath, description) => {
    /**
     * Niet van mij:
     * https://stackoverflow.com/a/4770179
     */
    const k = {37: 1, 38: 1, 39: 1, 40: 1}

    function preventDefault(e) {
        e = e || window.event
        if (e.preventDefault)
            e.preventDefault()
        e.returnValue = false
    }

    function preventDefaultForScrollKeys(e) {
        if (k[e.keyCode]) {
            preventDefault(e)
            return false
        }
    }

    function disableScroll() {
        if (window.addEventListener)
            window.addEventListener('DOMMouseScroll', preventDefault, false)
        window.onwheel = preventDefault
        window.onmousewheel = document.onmousewheel = preventDefault
        window.ontouchmove = preventDefault
        document.onkeydown = preventDefaultForScrollKeys
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false)
        window.onmousewheel = document.onmousewheel = null
        window.onwheel = null
        window.ontouchmove = null
        document.onkeydown = null
    }
    /* Rest is weer van mij :) */

    const v = document.getElementById('viewImage')
    const i = document.getElementById('i')
    const d = document.getElementById('d')
    const c = document.getElementById('c')

    i.innerHTML = `<img src="${imagePath}" alt="${description}">`
    d.innerHTML = description.toString()
        .replace('<script', '&lt;nein')
        .replace('</script', '&lt;/nein')
    v.style.display = 'grid'
    disableScroll()
    c.onclick = e => {
        e.preventDefault()
        document.getElementById('viewImage').style.display = 'none'
        enableScroll()
    }
}

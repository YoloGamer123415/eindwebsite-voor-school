(function(){
    const n = document.querySelector('header')
    var o = window.innerHeight - 80
    const h = document.getElementById('scrolltop')
    const m = document.querySelector('main')
    window.onscroll = () => {
        if (window.pageYOffset >= o) {
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
        o = window.innerHeight - 80
    }

    document.getElementById('open').onclick = () => document.querySelector('menu').classList.add('show')
    document.getElementById('close').onclick = () => document.querySelector('menu').classList.remove('show')
    document.getElementById('scrolltop').onclick = e => { e.preventDefault();document.body.scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'}); }
    document.getElementById('dc').onclick = e => { e.preventDefault();document.getElementById('add-discord').style.display = 'inherit' }
    document.getElementById('close-dc').onclick = e => { e.preventDefault();document.getElementById('add-discord').style.display = 'none' }
})()

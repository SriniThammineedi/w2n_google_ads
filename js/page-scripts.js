var reg = location.search.match(/ts=([^&]*)/),
        ts = (reg && reg[1]) || 'flipClock',
        a = new pageSwitch('imgs', {
            duration: 1000,
            start: 0,
            direction: 1,
            autoplay: true,
            interval: 300,
            loop: true,
            ease: /flip(?!Paper)/.test(ts) ? 'bounce' : 'ease',
            transition: ts,
            mouse: true,
            mousewheel: false,
            arrowkey: false
        })
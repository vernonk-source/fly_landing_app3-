paceOptions = {
    ajax: true, // Checks AJAX requests
    document: true // Doc ready
}

Pace.on('done', () => {
    gsap.timeline()
    .add('p')
    .to('.pace', {
        transform: 'scale(10,1)',
        duration: 4
    }, " +=.2")
    .to('.pace', {
        duration: 1,
        height: "100%"
    }, "-=2.5")
    .to('.loading_text', {
        delay: .2,
        duration: 3,
        opacity: 0,
        yPercent: -400,
        ease: "BezierEasing(0.19.1,0,0.22,1)"
    }, 'p')
    .to('.title', {
        duration: 1,
        delay: .1,
        y: 2,
        opacity: 1,
        ease: Expo.easeInOut
    })
})


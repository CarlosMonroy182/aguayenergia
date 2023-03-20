$(document).ready(function () {
    


$(".close").click(function () { 
    $(".menu-res").addClass("hiding");
    $(".offcanvas-backdrop").remove();   
});

$(".contenedor").click(function () { 
    $(".menu-res").removeClass("hiding");
    $(".menu-res").removeClass("show");
    
});

$(".banner-a").mouseenter(function () {
    $(".banner-a").css({
        "background-image": "linear-gradient(to right, #06509C, #69AEF5)",
    })

    $(".banner-b").css({
        "background-image": "unset"
    })
    $(".banner-c").css({
        "background-image": "unset"
    })

    $(".banner-d").css({
        "background-image": "unset"
    })

    $(".banner-e").css({
        "background-image": "unset"
    })

    $(".banner-f").css({
        "background-image": "unset"
    })

    $(".div-banner").css({
        "background-image": "url(./Assets/industria_construccion.png)"
    })
});



$(".banner-b").mouseenter(function () {
    $(".banner-b").css({
        "background-image": "linear-gradient(to right, #06509C, #69AEF5)",
    })
    $(".banner-a").css({
        "background-image": "unset"
    })
    $(".banner-c").css({
        "background-image": "unset"
    })

    $(".banner-d").css({
        "background-image": "unset"
    })
    
    $(".banner-e").css({
        "background-image": "unset"
    })

    $(".banner-f").css({
        "background-image": "unset"
    })
    $(".div-banner").css({
        "background-image": "url(./Assets/ejemplo.jpg)"
    })
});


$(".banner-c").mouseenter(function () {
    $(".banner-c").css({
        "background-image": "linear-gradient(to right, #06509C, #69AEF5)",
    })
    $(".banner-a").css({
        "background-image": "unset"
    })
    $(".banner-b").css({
        "background-image": "unset"
    })

    $(".banner-d").css({
        "background-image": "unset"
    })
    
    $(".banner-e").css({
        "background-image": "unset"
    })

    $(".banner-f").css({
        "background-image": "unset"
    })
    $(".div-banner").css({
        "background-image": "url(./Assets/ejemplo1.jpg)",
    })
});

$(".banner-d").mouseenter(function () {
    $(".banner-d").css({
        "background-image": "linear-gradient(to right, #06509C, #69AEF5)",
    })
    $(".banner-a").css({
        "background-image": "unset"
    })
    $(".banner-b").css({
        "background-image": "unset"
    })

    $(".banner-c").css({
        "background-image": "unset"
    })

    $(".banner-e").css({
        "background-image": "unset"
    })

    $(".banner-f").css({
        "background-image": "unset"
    })
    $(".div-banner").css({
        "background-image": "url(./Assets/industria_construccion.png)",
    })
});

$(".banner-e").mouseenter(function () {
    $(".banner-e").css({
        "background-image": "linear-gradient(to right, #06509C, #69AEF5)",
    })
    $(".banner-a").css({
        "background-image": "unset"
    })
    $(".banner-b").css({
        "background-image": "unset"
    })

    $(".banner-c").css({
        "background-image": "unset"
    })

    $(".banner-d").css({
        "background-image": "unset"
    })

    $(".banner-f").css({
        "background-image": "unset"
    })
    $(".div-banner").css({
        "background-image": "url(./Assets/ejemplo.jpg)",
    })
});


$(".banner-f").mouseenter(function () {
    $(".banner-f").css({
        "background-image": "linear-gradient(to right, #06509C, #69AEF5)",
    })
    $(".banner-a").css({
        "background-image": "unset"
    })
    $(".banner-b").css({
        "background-image": "unset"
    })

    $(".banner-c").css({
        "background-image": "unset"
    })

    $(".banner-d").css({
        "background-image": "unset"
    })

    $(".banner-e").css({
        "background-image": "unset"
    })
    $(".div-banner").css({
        "background-image": "url(./Assets/ejemplo1.jpg)",
    })
});


});


gsap.from(".hero-2", {
    duration:2,
    x: "100vw",
    delay: .5,
    opacity: 0,
    ease: "power4.out",
    
    });
    
    
    gsap.from(".hero-1", {
        duration: 2,
        y: 800,
        delay: .5,
        opacity: 0,
        ease: "power4.out",
        });




gsap.registerPlugin(ScrollTrigger);


let mm = gsap.matchMedia();

mm.add("(min-width: 991.98px)", () => {
    

gsap.from('.slideC',{
    opacity: 1,
    duration: 10,
    x: -1200,
    ease: "power4.ease",
    scrollTrigger: {
        trigger: '#servicios',
        start: '-100 center',
        end: '+=420',
        scrub: true,
        markers: false,
        id: 'servicio1',
        
    }
});


gsap.to('.servicio',{
    opacity: 1,
    duration: 1,
    marginBottom: 0,
    scrollTrigger: {
        trigger: '#servicios',
        start: '180 center',
        end: '+=100',
        scrub: true,
        markers: false,
        id: 'servicio1'
    }
});


gsap.to('.accordion',{
    opacity: 1,
    duration: 1,
    marginBottom: 0,
    scrollTrigger: {
        trigger: '#servicios',
        start: '180 center',
        end: '+=100',
        scrub: true,
        markers: false,
        id: 'servicio1'
    }
});


gsap.from('.fact',{
    opacity: 0,
     y: -250,
    duration: 1,
    scrollTrigger: {
        trigger: '#facts',
        start: '-200 center',
        end: '+=200',
        scrub: true,
        markers: false,
        id: 'fact1'
    }
});

gsap.from('.line',{
    opacity: 0,
    y:-20,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#facts',
        start: '70 center',
        end: '+=100',
        scrub: true,
        markers: false,
        id: 'line1'
    }
});


gsap.from('.facts-izq',{
    opacity: 0,
    y: -50,
    scrollTrigger: {
        trigger: '#facts',
        start: '200 center',
        end: '+=120',
        scrub: true,
        markers: false,
        id: 'fact2'
    }
});

return () => {

    gsap.from(".hero-2", {
        duration:1.5,
        x: "100vw",
        delay: .5,
        opacity: 0,
        ease: "power1.easeOut",
        
        });

};
});


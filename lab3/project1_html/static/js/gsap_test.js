import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"

gsap.from(
    ".test", {
        opacity: 0, 
        duration: 1, 
        y: -50
    }
)

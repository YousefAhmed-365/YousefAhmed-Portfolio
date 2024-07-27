import anime from "animejs"

export function animate_hoverEffectEnter(element){
    anime({
        targets: element.currentTarget,
        rotate: -3,
        duration: 300,
        easing: "easeOutElastic"
    })
}

export function animate_hoverEffectLeave(element){
    anime({
        targets: element.currentTarget,
        rotate: 0,
        duration: 300,
        easing: "easeOutElastic"
    })
}
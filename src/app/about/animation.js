export const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 0.6}
    }
}

export const text = {
    initial: {
        y: "100%"
    },
    open: {
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 }
    },
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}
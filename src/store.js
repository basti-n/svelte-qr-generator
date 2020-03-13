import { readable } from 'svelte/store';

let initialValue = Math.floor(Math.random() * 100)

let counter = readable(initialValue, set => {
    let incrementTimer = setInterval(() => {
        let nextValue = Math.floor(Math.random() * 100);
        set(nextValue)
    }, 1000);
    return () => clearInterval(incrementTimer)
})

export {counter}
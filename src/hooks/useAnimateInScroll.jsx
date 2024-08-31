// src/useFadeInOnScroll.js
import { useEffect } from 'react';
import anime from 'animejs';
import { useState } from 'react';

function useAnimateInScroll(elementRef, animation) {
    const [ended, setEnded] = useState(false)

    useEffect(() => {
        if (!elementRef.current || ended == true){
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animation(entry)
                    observer.unobserve(entry.target);
                    setEnded(true)
                }
            })
        }, {
            threshold: 0.3
        })

        observer.observe(elementRef.current);

        return () => {
            observer.disconnect();
        }
    }, [elementRef, animation, ended]);
}

export default useAnimateInScroll;

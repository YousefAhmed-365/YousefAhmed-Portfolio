// src/useFadeInOnScroll.js
import { useEffect } from 'react';
import anime from 'animejs';

function useAnimateInScroll(elementRef, animation) {
    useEffect(() => {
        if (!elementRef.current) {
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animation(entry)
                    observer.unobserve(entry.target);
                }
            })
        }, {
            rootMargin: "-130px"
        })

        observer.observe(elementRef.current);

        return () => {
            observer.disconnect();
        }
    }, [elementRef, animation]);
}

export default useAnimateInScroll;

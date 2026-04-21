import { useEffect, useRef } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = () => {
      const animatedEls = section.querySelectorAll('.anim-up, .anim-left, .anim-right');
      animatedEls.forEach((el) => {
        el.classList.remove('in-view');
        void el.offsetWidth; // force reflow to restart animation
        el.classList.add('in-view');
      });
    };

    const reset = () => {
      const animatedEls = section.querySelectorAll('.anim-up, .anim-left, .anim-right');
      animatedEls.forEach((el) => el.classList.remove('in-view'));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trigger();
          } else {
            reset();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);

    // Also check immediately in case section is already in viewport on mount
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) trigger();

    return () => observer.disconnect();
  }, [threshold]);

  return sectionRef;
};

export default useScrollAnimation;

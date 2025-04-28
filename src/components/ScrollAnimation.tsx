
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-right' | 'scale-in';
}

const ScrollAnimation = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  animation = 'fade-in'
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial style
    element.style.opacity = '0';
    element.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

    if (animation === 'fade-in') {
      element.style.transform = 'translateY(20px)';
    } else if (animation === 'slide-up') {
      element.style.transform = 'translateY(40px)';
    } else if (animation === 'slide-right') {
      element.style.transform = 'translateX(-40px)';
    } else if (animation === 'scale-in') {
      element.style.transform = 'scale(0.9)';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'none';
            observer.unobserve(element);
          }
        });
      }, 
      { threshold }
    );

    observer.observe(element);
    
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollAnimation;

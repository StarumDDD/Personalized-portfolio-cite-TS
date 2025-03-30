import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Global GSAP initialization
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Kill any existing timeline and ScrollTrigger
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    // Set initial state
    gsap.set(section, { opacity: 0, clearProps: 'all' });

    // Define animation properties based on animation type
    let fromProps = {};
    switch (animation) {
      case 'fade-up':
        fromProps = { y: 30, opacity: 0 };
        break;
      case 'fade-in':
        fromProps = { opacity: 0 };
        break;
      case 'slide-left':
        fromProps = { x: -30, opacity: 0 };
        break;
      case 'slide-right':
        fromProps = { x: 30, opacity: 0 };
        break;
    }

    // Create the animation timeline
    const tl = gsap.timeline({
      paused: true, // Start paused
      onStart: () => {
        console.log('Animation started for section:', section);
      },
      onComplete: () => {
        console.log('Animation completed for section:', section);
      }
    });

    // Store timeline reference
    timelineRef.current = tl;

    // Animate the section itself
    tl.fromTo(
      section,
      fromProps,
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out'
      }
    );

    // Animate all direct children with a stagger effect
    const children = section.children;
    if (children.length > 0) {
      tl.fromTo(
        children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: duration * 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.4'
      );
    }

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      onEnter: () => {
        console.log('Section entered viewport:', section);
        tl.play();
      },
      onEnterBack: () => {
        console.log('Section re-entered viewport:', section);
        tl.play();
      },
      onLeave: () => {
        console.log('Section left viewport:', section);
        tl.pause();
      },
      onLeaveBack: () => {
        console.log('Section left viewport (back):', section);
        tl.pause();
      },
      toggleActions: 'play none none none'
    });

    // Store ScrollTrigger reference
    scrollTriggerRef.current = scrollTrigger;

    // Force a refresh of ScrollTrigger
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      console.log('Cleaning up section:', section);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [animation, delay, duration, threshold]);

  return (
    <div 
      ref={sectionRef} 
      className={className} 
      style={{ opacity: 0 }}
      data-animation-type={animation}
      data-delay={delay}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

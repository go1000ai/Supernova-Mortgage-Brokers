'use client';

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  isLogo?: boolean;
  children?: ReactNode;
}

// --- Floating Particle ---
function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#d29e4a]"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

const PARTICLES_DESKTOP = [
  { delay: 0, x: "10%", y: "20%", size: 4 },
  { delay: 1.2, x: "85%", y: "15%", size: 3 },
  { delay: 0.5, x: "25%", y: "75%", size: 5 },
  { delay: 2, x: "70%", y: "80%", size: 3 },
  { delay: 0.8, x: "50%", y: "10%", size: 4 },
  { delay: 1.5, x: "90%", y: "50%", size: 3 },
  { delay: 0.3, x: "15%", y: "45%", size: 5 },
  { delay: 1.8, x: "60%", y: "90%", size: 4 },
  { delay: 2.5, x: "40%", y: "30%", size: 3 },
  { delay: 0.7, x: "75%", y: "60%", size: 4 },
  { delay: 1.1, x: "35%", y: "85%", size: 3 },
  { delay: 2.2, x: "55%", y: "40%", size: 5 },
];

// Fewer particles on mobile for performance
const PARTICLES_MOBILE = [
  { delay: 0, x: "10%", y: "20%", size: 4 },
  { delay: 1.2, x: "85%", y: "15%", size: 3 },
  { delay: 0.5, x: "25%", y: "75%", size: 5 },
  { delay: 2, x: "70%", y: "80%", size: 3 },
  { delay: 0.8, x: "50%", y: "10%", size: 4 },
];

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  isLogo,
  children,
}: ScrollExpandMediaProps) => {
  // Use refs for scroll-driven values to avoid re-renders on every touch event
  const scrollProgressRef = useRef<number>(0);
  const showContentRef = useRef<boolean>(false);
  const mediaFullyExpandedRef = useRef<boolean>(false);
  const touchStartYRef = useRef<number>(0);
  const isMobileRef = useRef<boolean>(false);

  // State only for values that need React re-render
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [, forceRender] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const bottomTextRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // --- Mouse parallax (desktop only) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    isMobileRef.current = isMobile;

    if (isMobile) return; // Skip parallax on mobile

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 20);
      mouseY.set(y * 15);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    scrollProgressRef.current = 0;
    showContentRef.current = false;
    mediaFullyExpandedRef.current = false;
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // Direct DOM updates for scroll-driven properties (no React re-render)
  const applyScrollProgress = useCallback((progress: number) => {
    const isMobile = isMobileRef.current;
    const mediaWidth = 300 + progress * (isMobile ? 650 : 1250);
    const mediaHeight = 400 + progress * (isMobile ? 200 : 400);
    const titleOpacity = Math.max(1 - progress * 2.5, 0);
    const titleY = progress * -60;
    const bottomTextOpacity = Math.max(1 - progress * 3, 0);

    if (mediaRef.current) {
      mediaRef.current.style.width = `${mediaWidth}px`;
      mediaRef.current.style.height = `${mediaHeight}px`;
    }
    if (titleRef.current) {
      titleRef.current.style.opacity = String(titleOpacity);
      titleRef.current.style.transform = `translateY(${titleY}px)`;
    }
    if (bottomTextRef.current) {
      bottomTextRef.current.style.opacity = String(bottomTextOpacity);
    }
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress * 100}%`;
    }
  }, []);

  useEffect(() => {
    const checkIfMobile = (): void => {
      isMobileRef.current = window.innerWidth < 768;
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        mediaFullyExpandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpandedRef.current) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgressRef.current + scrollDelta, 0),
          1
        );
        scrollProgressRef.current = newProgress;
        applyScrollProgress(newProgress);

        if (newProgress >= 1) {
          mediaFullyExpandedRef.current = true;
          showContentRef.current = true;
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          if (showContentRef.current) {
            showContentRef.current = false;
            setShowContent(false);
          }
        }
      }
    };

    const handleTouchStart = (e: globalThis.TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!touchStartYRef.current) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY;

      if (mediaFullyExpandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        mediaFullyExpandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpandedRef.current) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgressRef.current + scrollDelta, 0),
          1
        );
        scrollProgressRef.current = newProgress;

        // Use rAF to batch DOM updates
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          applyScrollProgress(newProgress);
        });

        if (newProgress >= 1) {
          mediaFullyExpandedRef.current = true;
          showContentRef.current = true;
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          if (showContentRef.current) {
            showContentRef.current = false;
            setShowContent(false);
          }
        }

        touchStartYRef.current = touchY;
      }
    };

    const handleTouchEnd = (): void => {
      touchStartYRef.current = 0;
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpandedRef.current) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('touchstart', handleTouchStart as EventListener, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false });
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel as EventListener);
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyScrollProgress]);

  const isMobileState = isMobileRef.current;
  const scrollProgress = scrollProgressRef.current;
  const PARTICLES = isMobileState ? PARTICLES_MOBILE : PARTICLES_DESKTOP;

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);

  // Title fades out and moves up as media expands
  const titleOpacity = Math.max(1 - scrollProgress * 2.5, 0);
  const titleY = scrollProgress * -60;

  // Bottom text fades out as media expands
  const bottomTextOpacity = Math.max(1 - scrollProgress * 3, 0);

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          {/* Background with mouse parallax (desktop only) */}
          <motion.div
            className='absolute inset-[-20px] z-0 h-[calc(100%+40px)]'
            style={
              !isMobileState
                ? { x: smoothMouseX, y: smoothMouseY }
                : undefined
            }
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-full h-full'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <div className='absolute inset-0 bg-black/40' />
          </motion.div>

          {/* Floating gold particles (fewer on mobile) */}
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            {PARTICLES.map((p, i) => (
              <FloatingParticle key={`${p.x}-${p.y}`} {...p} />
            ))}
          </div>

          {/* Scroll progress indicator */}
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3"
            animate={{ opacity: mediaFullyExpanded ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] rounded-full"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>

              {/* Title text — sits ABOVE the expanding media, fades out on scroll */}
              <div
                ref={titleRef}
                className='absolute z-20 top-[12%] left-0 right-0 text-center transition-none pointer-events-none'
                style={{
                  opacity: titleOpacity,
                  transform: `translateY(${titleY}px)`,
                  willChange: 'opacity, transform',
                }}
              >
                {title && (
                  <h1
                    className='text-5xl md:text-6xl lg:text-8xl font-bold text-white'
                    style={{
                      textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(210,158,74,0.15)',
                    }}
                  >
                    {title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className='bg-gradient-to-r from-[#d29e4a] to-[#e8c47a] bg-clip-text text-transparent'>
                      {title.split(' ').slice(-1)}
                    </span>
                  </h1>
                )}
                {date && (
                  <p
                    className='text-lg md:text-xl text-white/60 mt-4 font-medium'
                    style={{
                      textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                    }}
                  >
                    {date}
                  </p>
                )}
              </div>

              {/* Expanding media — the transparent logo grows on scroll */}
              <div
                ref={mediaRef}
                className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  willChange: 'width, height',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : isLogo ? (
                  <div className='relative w-full h-full flex items-center justify-center'>
                    {/* Subtle glow behind transparent logo */}
                    <motion.div
                      className='absolute inset-0 rounded-xl'
                      animate={{
                        boxShadow: [
                          '0 0 40px rgba(210, 158, 74, 0.08)',
                          '0 0 80px rgba(210, 158, 74, 0.15)',
                          '0 0 40px rgba(210, 158, 74, 0.08)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className='relative z-10 flex items-center justify-center'
                      style={{
                        width: '70%',
                        height: '70%',
                      }}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Image
                        src={mediaSrc}
                        alt={title || 'Logo'}
                        width={800}
                        height={800}
                        className='w-full h-full object-contain drop-shadow-[0_0_40px_rgba(210,158,74,0.35)]'
                        unoptimized
                      />
                    </motion.div>
                  </div>
                ) : (
                  <div className='relative w-full h-full'>
                    <Image
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      width={1280}
                      height={720}
                      className='w-full h-full object-cover rounded-xl'
                    />
                    <motion.div
                      className='absolute inset-0 bg-black/50 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              {/* Bottom hint text — fades out quickly */}
              <div
                ref={bottomTextRef}
                className='absolute z-20 bottom-[8%] left-0 right-0 text-center transition-none pointer-events-none'
                style={{ opacity: bottomTextOpacity, willChange: 'opacity' }}
              >
                {scrollToExpand && (
                  <motion.p
                    className='text-sm text-[#d29e4a]/70 font-medium tracking-widest uppercase'
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {scrollToExpand}
                  </motion.p>
                )}
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;

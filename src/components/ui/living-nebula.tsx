'use client';

import React, { useRef, useEffect } from 'react';

export interface LivingNebulaProps {
  particleCount?: number;
  trailLength?: number;
  hueSpeed?: number;
  canvasGlow?: number;
  pulseFrequency?: number;
  emissionRate?: number;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}

const LivingNebula: React.FC<LivingNebulaProps> = ({
  particleCount = 1500,
  trailLength = 0.2,
  hueSpeed = 0.1,
  canvasGlow = 10,
  pulseFrequency = 0.0015,
  emissionRate = 2,
  width,
  height,
  className = '',
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d')!;
    let w = (canvas.width = width ?? container.offsetWidth);
    let h = (canvas.height = height ?? container.offsetHeight);

    const emission = { x: w / 2, y: h / 2 };
    const mouse = { x: 0, y: 0 };
    let stopped = false;
    let visible = true;

    // Pause animation when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / w - 0.5) * 2;
      mouse.y = (e.clientY / h - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle data stored as flat arrays for better performance
    const count = particleCount;
    const px = new Float32Array(count);
    const py = new Float32Array(count);
    const vx = new Float32Array(count);
    const vy = new Float32Array(count);
    const life = new Float32Array(count);
    const age = new Float32Array(count);

    function rebirth(i: number) {
      px[i] = emission.x + (Math.random() - 0.5) * 10;
      py[i] = emission.y + (Math.random() - 0.5) * 10;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 0.8;
      vx[i] = Math.cos(angle) * speed;
      vy[i] = Math.sin(angle) * speed;
      life[i] = Math.random() * 220 + 180;
      age[i] = 0;
    }

    for (let i = 0; i < count; i++) rebirth(i);

    let time = 0;
    let rafId: number;

    const animate = () => {
      if (stopped) return;
      if (!visible) { rafId = requestAnimationFrame(animate); return; }

      // Dark trail overlay
      ctx.fillStyle = `rgba(0,0,0,${trailLength})`;
      ctx.fillRect(0, 0, w, h);

      // Smoothly shift emission center toward mouse for parallax
      emission.x += ((w / 2 + mouse.x * 30) - emission.x) * 0.02;
      emission.y += ((h / 2 + mouse.y * 20) - emission.y) * 0.02;

      // Parallax shift on the canvas container
      container.style.transform = `translate(${mouse.x * -15}px, ${mouse.y * -10}px)`;

      // Draw a soft radial core glow at emission center (NO shadowBlur)
      const coreGlow = ctx.createRadialGradient(
        emission.x, emission.y, 0,
        emission.x, emission.y, 120
      );
      const corePulse = (Math.sin(time * 0.03) + 1) / 2;
      coreGlow.addColorStop(0, `rgba(232, 196, 122, ${0.08 + corePulse * 0.06})`);
      coreGlow.addColorStop(0.5, `rgba(210, 158, 74, ${0.03 + corePulse * 0.03})`);
      coreGlow.addColorStop(1, 'rgba(210, 158, 74, 0)');
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, w, h);

      // Pulse-based extra rebirths
      const pulse = (Math.sin(time * pulseFrequency) + 1) / 2;
      const extra = Math.floor(pulse * emissionRate);
      for (let i = 0; i < extra; i++) {
        const idx = Math.floor(Math.random() * count);
        if (age[idx] > life[idx]) rebirth(idx);
      }

      // Update & draw particles — no shadowBlur, no per-particle object overhead
      for (let i = 0; i < count; i++) {
        age[i]++;
        if (age[i] > life[i]) rebirth(i);
        vx[i] *= 0.99;
        vy[i] *= 0.99;
        px[i] += vx[i];
        py[i] += vy[i];

        const ratio = age[i] / life[i];
        const opacity = Math.sin(ratio * Math.PI) * 0.9;
        const dist = Math.hypot(px[i] - emission.x, py[i] - emission.y);
        const hue = 45 - dist * 0.06;
        const sat = Math.min(85 + dist * 0.05, 100);
        const lit = Math.max(70 - dist * 0.08, 40);

        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue},${sat}%,${lit}%,${opacity})`;
        ctx.arc(px[i], py[i], 1.5 + (1 - ratio) * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      time++;
      rafId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (stopped) return;
      cancelAnimationFrame(rafId);
      w = canvas.width = width ?? container.offsetWidth;
      h = canvas.height = height ?? container.offsetHeight;
      emission.x = w / 2;
      emission.y = h / 2;
      for (let i = 0; i < count; i++) rebirth(i);
      time = 0;
      animate();
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      stopped = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [
    particleCount,
    trailLength,
    hueSpeed,
    canvasGlow,
    pulseFrequency,
    emissionRate,
    width,
    height,
  ]);

  return (
    <div
      className={`relative overflow-hidden bg-black ${className}`}
      style={{ width: width ?? '100vw', height: height ?? '100vh' }}
    >
      <div
        ref={containerRef}
        className="absolute inset-[-30px] transition-transform duration-100 ease-out"
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default LivingNebula;

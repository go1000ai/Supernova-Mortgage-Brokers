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
    let w = (canvas.width = width ?? window.innerWidth);
    let h = (canvas.height = height ?? window.innerHeight);

    // Emission center (follows mouse slightly for parallax)
    const emission = { x: w / 2, y: h / 2 };
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / w - 0.5) * 2;
      mouse.y = (e.clientY / h - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      lifetime: number;
      age: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.lifetime = 0;
        this.age = 0;
        this.rebirth();
      }

      rebirth() {
        // Spawn from emission center with slight spread
        this.x = emission.x + (Math.random() - 0.5) * 10;
        this.y = emission.y + (Math.random() - 0.5) * 10;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 0.8;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.lifetime = Math.random() * 220 + 180;
        this.age = 0;
      }

      update() {
        this.age++;
        if (this.age > this.lifetime) this.rebirth();
        this.vx *= 0.99;
        this.vy *= 0.99;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        const ratio = this.age / this.lifetime;
        const opacity = Math.sin(ratio * Math.PI) * 0.9;
        const dist = Math.hypot(this.x - emission.x, this.y - emission.y);
        // Gold supernova: hot white-gold core, amber/orange edges
        const hue = 45 - dist * 0.06;
        const saturation = 85 + dist * 0.05;
        const lightness = 70 - dist * 0.08;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue},${Math.min(saturation, 100)}%,${Math.max(lightness, 40)}%,${opacity})`;
        ctx.arc(this.x, this.y, 1.5 + (1 - ratio) * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particles = Array.from(
      { length: particleCount },
      () => new Particle()
    );
    let time = 0;
    let rafId: number;

    const animate = () => {
      // Dark trail overlay
      ctx.fillStyle = `rgba(0,0,0,${trailLength})`;
      ctx.fillRect(0, 0, w, h);

      // Smoothly shift emission center toward mouse for parallax
      emission.x += ((w / 2 + mouse.x * 30) - emission.x) * 0.02;
      emission.y += ((h / 2 + mouse.y * 20) - emission.y) * 0.02;

      // Parallax shift on the canvas container
      if (container) {
        container.style.transform = `translate(${mouse.x * -15}px, ${mouse.y * -10}px)`;
      }

      // Glowing gold effect
      ctx.shadowBlur = canvasGlow;
      ctx.shadowColor = `hsla(${40 + time * 0.02},90%,55%,1)`;

      // Draw a soft radial core glow at emission center
      const coreGlow = ctx.createRadialGradient(
        emission.x, emission.y, 0,
        emission.x, emission.y, 120
      );
      const corePulse = (Math.sin(time * 0.03) + 1) / 2;
      coreGlow.addColorStop(0, `rgba(232, 196, 122, ${0.06 + corePulse * 0.04})`);
      coreGlow.addColorStop(0.5, `rgba(210, 158, 74, ${0.02 + corePulse * 0.02})`);
      coreGlow.addColorStop(1, 'rgba(210, 158, 74, 0)');
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, w, h);

      // Pulse-based extra rebirths
      const pulse = (Math.sin(time * pulseFrequency) + 1) / 2;
      const extra = Math.floor(pulse * emissionRate);
      for (let i = 0; i < extra; i++) {
        const p = particles[Math.floor(Math.random() * particles.length)];
        if (p.age > p.lifetime) p.rebirth();
      }

      // Update & draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      ctx.shadowBlur = 0;
      time++;
      rafId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      cancelAnimationFrame(rafId);
      w = canvas.width = width ?? window.innerWidth;
      h = canvas.height = height ?? window.innerHeight;
      emission.x = w / 2;
      emission.y = h / 2;
      particles = Array.from(
        { length: particleCount },
        () => new Particle()
      );
      time = 0;
      animate();
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(rafId);
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
          style={{ display: 'block', width: 'calc(100% + 60px)', height: 'calc(100% + 60px)' }}
        />
      </div>
      {children}
    </div>
  );
};

export default LivingNebula;

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 80);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance (30fps)
      if (frameCount % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          // Mouse interaction (only for every 5th particle for performance)
          if (i % 5 === 0) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              const force = (150 - dist) / 150;
              particle.vx -= (dx / dist) * force * 0.02;
              particle.vy -= (dy / dist) * force * 0.02;
            }
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(45, 212, 191, ${particle.opacity})`;
          ctx.fill();
        });

        // Draw connections (limited for performance)
        ctx.strokeStyle = 'rgba(45, 212, 191, 0.1)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i += 2) {
          let connections = 0;
          for (let j = i + 1; j < particles.length && connections < 3; j += 2) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
              connections++;
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}

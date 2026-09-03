import React, { useEffect, useRef } from 'react';

interface NeuronNode {
  x: number; // 0 to 1 normalized
  y: number; // 0 to 1 normalized
  radius: number;
  baseRadius: number;
  hemisphere: 'left' | 'right' | 'center';
  color: string;
  glowColor: string;
  firePhase: number;
  fireSpeed: number;
  activity: number; // 0 to 1
  connectedTo: number[];
}

interface ActionPotential {
  fromNode: number;
  toNode: number;
  progress: number; // 0 to 1
  speed: number;
  hemisphere: 'left' | 'right';
  color: string;
  size: number;
  trail: { x: number; y: number }[];
}

interface CircuitTraceParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  size: number;
  color: string;
  glowColor: string;
  hemisphere: 'left' | 'right';
  life: number;
  maxLife: number;
  history: { x: number; y: number }[];
}

interface FissureSpark {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  life: number;
  maxLife: number;
  color: string;
}

export const NeuronMotionCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animIdRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth || 900;
    let height = container.clientHeight || 500;

    const resize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth || 900;
      height = container.clientHeight || 500;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Track mouse interactions to excite neurons
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Generate accurate neuron topology mapping the dual-hemisphere brain
    // Center is (0.5, 0.5). Left hemisphere: x ~ 0.28 to 0.48. Right hemisphere: x ~ 0.52 to 0.72.
    const rawNodes: { x: number; y: number; hemisphere: 'left' | 'right' | 'center' }[] = [];

    // Left Hemisphere Neurons (Electric Cyan & Neon Blue)
    const leftCoords = [
      // Outer frontal and parietal perimeter
      { x: 0.32, y: 0.22 }, { x: 0.38, y: 0.16 }, { x: 0.44, y: 0.15 },
      { x: 0.26, y: 0.32 }, { x: 0.34, y: 0.30 }, { x: 0.42, y: 0.28 },
      { x: 0.23, y: 0.44 }, { x: 0.31, y: 0.42 }, { x: 0.39, y: 0.40 }, { x: 0.46, y: 0.38 },
      { x: 0.25, y: 0.58 }, { x: 0.33, y: 0.56 }, { x: 0.41, y: 0.54 }, { x: 0.47, y: 0.52 },
      { x: 0.28, y: 0.72 }, { x: 0.36, y: 0.70 }, { x: 0.43, y: 0.68 },
      { x: 0.35, y: 0.82 }, { x: 0.42, y: 0.80 },
      // Inner sulci and gyri nodes
      { x: 0.37, y: 0.36 }, { x: 0.30, y: 0.50 }, { x: 0.38, y: 0.48 }, { x: 0.45, y: 0.46 },
      { x: 0.35, y: 0.62 }, { x: 0.42, y: 0.60 }, { x: 0.47, y: 0.26 }, { x: 0.47, y: 0.64 }
    ];

    leftCoords.forEach((c) => rawNodes.push({ ...c, hemisphere: 'left' }));

    // Right Hemisphere Neurons (Fiery Amber & Neon Orange/Gold)
    // Symmetrical to left across x = 0.5
    leftCoords.forEach((c) => {
      const mirroredX = 1.0 - c.x;
      rawNodes.push({ x: mirroredX, y: c.y, hemisphere: 'right' });
    });

    // Central Fissure Bridging Neurons
    rawNodes.push({ x: 0.485, y: 0.25, hemisphere: 'center' });
    rawNodes.push({ x: 0.515, y: 0.25, hemisphere: 'center' });
    rawNodes.push({ x: 0.485, y: 0.45, hemisphere: 'center' });
    rawNodes.push({ x: 0.515, y: 0.45, hemisphere: 'center' });
    rawNodes.push({ x: 0.485, y: 0.65, hemisphere: 'center' });
    rawNodes.push({ x: 0.515, y: 0.65, hemisphere: 'center' });

    // Build interconnected network
    const nodes: NeuronNode[] = rawNodes.map((n, idx) => {
      const isLeft = n.hemisphere === 'left';
      const isRight = n.hemisphere === 'right';
      const color = isLeft
        ? '#00FFFF'
        : isRight
        ? '#FF9E1B'
        : '#FFF2B2';
      const glowColor = isLeft ? '#00C2B3' : isRight ? '#F0C84E' : '#FFFFFF';

      return {
        x: n.x,
        y: n.y,
        radius: 2.5 + Math.random() * 2,
        baseRadius: 2.2 + Math.random() * 1.5,
        hemisphere: n.hemisphere,
        color,
        glowColor,
        firePhase: Math.random() * Math.PI * 2,
        fireSpeed: 0.03 + Math.random() * 0.04,
        activity: 0.2 + Math.random() * 0.8,
        connectedTo: [],
      };
    });

    // Connect nodes by proximity (synaptic links)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Same hemisphere connections
        if (
          nodes[i].hemisphere === nodes[j].hemisphere &&
          dist < 0.12 &&
          nodes[i].connectedTo.length < 4
        ) {
          nodes[i].connectedTo.push(j);
          nodes[j].connectedTo.push(i);
        }
        // Central cross-hemisphere bridge connections
        else if (
          nodes[i].hemisphere !== nodes[j].hemisphere &&
          dist < 0.08 &&
          Math.random() < 0.6
        ) {
          nodes[i].connectedTo.push(j);
          nodes[j].connectedTo.push(i);
        }
      }
    }

    // Action potentials in motion along synaptic links
    let actionPotentials: ActionPotential[] = [];
    const maxActionPotentials = 35;

    const spawnActionPotential = () => {
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const fromNode = nodes[fromIdx];
      if (!fromNode || fromNode.connectedTo.length === 0) return;

      const toIdx = fromNode.connectedTo[Math.floor(Math.random() * fromNode.connectedTo.length)];
      const toNode = nodes[toIdx];
      if (!toNode) return;

      const isLeft = fromNode.hemisphere === 'left' || toNode.hemisphere === 'left';
      const color = isLeft ? '#00FFFF' : '#FFA834';

      actionPotentials.push({
        fromNode: fromIdx,
        toNode: toIdx,
        progress: 0,
        speed: 0.018 + Math.random() * 0.024,
        hemisphere: isLeft ? 'left' : 'right',
        color,
        size: 2.2 + Math.random() * 1.5,
        trail: [],
      });
    };

    for (let i = 0; i < 20; i++) {
      spawnActionPotential();
    }

    // Circuit board trace particles (flowing horizontally out to edges like in reference image)
    let circuitParticles: CircuitTraceParticle[] = [];
    const maxCircuitParticles = 70;

    const spawnCircuitParticle = (): CircuitTraceParticle => {
      const isLeft = Math.random() < 0.5;
      const hemisphere = isLeft ? 'left' : 'right';

      // Start either from the brain hemisphere outer boundary, or from the outer edge inward
      const flowOutward = Math.random() < 0.75;
      const yNorm = 0.15 + Math.random() * 0.7;

      let xNorm: number;
      let vxNorm: number;

      if (isLeft) {
        if (flowOutward) {
          // Starts near left lobe, travels leftward into circuitry
          xNorm = 0.32 - Math.random() * 0.05;
          vxNorm = -(0.002 + Math.random() * 0.0035);
        } else {
          // Inbound from left edge toward left lobe
          xNorm = 0.02 + Math.random() * 0.1;
          vxNorm = 0.002 + Math.random() * 0.003;
        }
      } else {
        if (flowOutward) {
          // Starts near right lobe, travels rightward into circuitry
          xNorm = 0.68 + Math.random() * 0.05;
          vxNorm = 0.002 + Math.random() * 0.0035;
        } else {
          // Inbound from right edge toward right lobe
          xNorm = 0.98 - Math.random() * 0.1;
          vxNorm = -(0.002 + Math.random() * 0.003);
        }
      }

      // PCB trace stepped angles (mostly horizontal with occasional 45 deg bends)
      const vyNorm = (Math.random() < 0.2 ? (Math.random() - 0.5) * 0.0015 : 0);

      const color = isLeft ? '#00FFFF' : '#FF991A';
      const glowColor = isLeft ? '#00C2B3' : '#F0C84E';

      return {
        x: xNorm,
        y: yNorm,
        vx: vxNorm,
        vy: vyNorm,
        speed: 1,
        size: 1.5 + Math.random() * 1.5,
        color,
        glowColor,
        hemisphere,
        life: 0,
        maxLife: 140 + Math.random() * 90,
        history: [],
      };
    };

    for (let i = 0; i < maxCircuitParticles; i++) {
      circuitParticles.push(spawnCircuitParticle());
    }

    // Fissure electrical sparks (between left and right hemispheres)
    let fissureSparks: FissureSpark[] = [];

    const spawnFissureSpark = () => {
      const y1 = 0.2 + Math.random() * 0.6;
      const y2 = y1 + (Math.random() - 0.5) * 0.08;
      fissureSparks.push({
        x1: 0.485,
        y1,
        x2: 0.515,
        y2,
        life: 0,
        maxLife: 5 + Math.floor(Math.random() * 6),
        color: Math.random() < 0.5 ? '#00FFFF' : '#FFD700',
      });
    };

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const mouseNormX = mouse.x / width;
      const mouseNormY = mouse.y / height;

      // 1. Draw Synaptic Dendrite Connections (glowing neural pathways)
      ctx.save();
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (const targetIdx of n1.connectedTo) {
          if (targetIdx > i) {
            const n2 = nodes[targetIdx];
            const avgActivity = (n1.activity + n2.activity) / 2;

            ctx.beginPath();
            ctx.moveTo(n1.x * width, n1.y * height);
            ctx.lineTo(n2.x * width, n2.y * height);

            const isLeft = n1.hemisphere === 'left' && n2.hemisphere === 'left';
            const isRight = n1.hemisphere === 'right' && n2.hemisphere === 'right';

            if (isLeft) {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 + avgActivity * 0.35})`;
            } else if (isRight) {
              ctx.strokeStyle = `rgba(255, 160, 30, ${0.1 + avgActivity * 0.35})`;
            } else {
              // Bridging connection
              ctx.strokeStyle = `rgba(255, 240, 180, ${0.15 + avgActivity * 0.4})`;
            }

            ctx.lineWidth = 0.8 + avgActivity * 1.4;
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // 2. Animate Action Potentials (Light Impulses traveling along the synapses)
      if (actionPotentials.length < maxActionPotentials && Math.random() < 0.25) {
        spawnActionPotential();
      }

      ctx.save();
      for (let i = actionPotentials.length - 1; i >= 0; i--) {
        const ap = actionPotentials[i];
        ap.progress += ap.speed;

        const n1 = nodes[ap.fromNode];
        const n2 = nodes[ap.toNode];

        if (!n1 || !n2 || ap.progress >= 1) {
          // Trigger activity pulse on target node
          if (n2) {
            n2.activity = 1.0;
          }
          actionPotentials.splice(i, 1);
          continue;
        }

        const curX = (n1.x + (n2.x - n1.x) * ap.progress) * width;
        const curY = (n1.y + (n2.y - n1.y) * ap.progress) * height;

        ap.trail.unshift({ x: curX, y: curY });
        if (ap.trail.length > 8) ap.trail.pop();

        // Draw glowing light trail
        if (ap.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(ap.trail[0].x, ap.trail[0].y);
          for (let t = 1; t < ap.trail.length; t++) {
            ctx.lineTo(ap.trail[t].x, ap.trail[t].y);
          }
          ctx.strokeStyle = ap.color;
          ctx.lineWidth = ap.size * 0.8;
          ctx.globalAlpha = 0.6;
          ctx.shadowBlur = 8;
          ctx.shadowColor = ap.color;
          ctx.stroke();
        }

        // Draw glowing photon core
        ctx.beginPath();
        ctx.arc(curX, curY, ap.size, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 10;
        ctx.shadowColor = ap.color;
        ctx.globalAlpha = 0.95;
        ctx.fill();
      }
      ctx.restore();

      // 3. Animate and Draw Synapse Nodes (Pulsing Neurons)
      ctx.save();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.firePhase += n.fireSpeed;
        n.activity = Math.max(0.2, n.activity * 0.97);

        // Interactive mouse hover excitation
        if (mouse.active) {
          const distToMouse = Math.hypot(n.x - mouseNormX, n.y - mouseNormY);
          if (distToMouse < 0.12) {
            n.activity = Math.min(1.0, n.activity + (0.12 - distToMouse) * 3);
            if (Math.random() < 0.1) {
              spawnActionPotential();
            }
          }
        }

        const pulseScale = 1 + Math.sin(n.firePhase) * 0.25 + n.activity * 0.5;
        const r = n.baseRadius * pulseScale;

        const posX = n.x * width;
        const posY = n.y * height;

        // Outer synaptic glow halo
        ctx.beginPath();
        ctx.arc(posX, posY, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.12 + n.activity * 0.28;
        ctx.fill();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(posX, posY, r, 0, Math.PI * 2);
        ctx.fillStyle = n.activity > 0.7 ? '#FFFFFF' : n.color;
        ctx.shadowBlur = 6 + n.activity * 12;
        ctx.shadowColor = n.glowColor;
        ctx.globalAlpha = 0.85 + n.activity * 0.15;
        ctx.fill();
      }
      ctx.restore();

      // 4. Animate Circuit Board Trace Currents (streaming outwards horizontally)
      ctx.save();
      for (let i = circuitParticles.length - 1; i >= 0; i--) {
        const cp = circuitParticles[i];
        cp.life++;

        cp.x += cp.vx;
        cp.y += cp.vy;

        const posX = cp.x * width;
        const posY = cp.y * height;

        cp.history.unshift({ x: posX, y: posY });
        if (cp.history.length > 12) cp.history.pop();

        // Stepped horizontal-diagonal PCB track simulation
        if (cp.life % 25 === 0 && Math.random() < 0.3) {
          cp.vy = (Math.random() - 0.5) * 0.0018;
        }

        // Check bounds
        if (
          cp.x < -0.05 ||
          cp.x > 1.05 ||
          cp.y < -0.05 ||
          cp.y > 1.05 ||
          cp.life >= cp.maxLife
        ) {
          circuitParticles[i] = spawnCircuitParticle();
          continue;
        }

        // Draw circuit particle comet stream
        if (cp.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(cp.history[0].x, cp.history[0].y);
          for (let h = 1; h < cp.history.length; h++) {
            ctx.lineTo(cp.history[h].x, cp.history[h].y);
          }
          ctx.strokeStyle = cp.color;
          ctx.lineWidth = cp.size * 0.75;
          ctx.globalAlpha = (1 - cp.life / cp.maxLife) * 0.6;
          ctx.shadowBlur = 6;
          ctx.shadowColor = cp.glowColor;
          ctx.stroke();
        }

        // Head particle
        ctx.beginPath();
        ctx.arc(posX, posY, cp.size, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 8;
        ctx.shadowColor = cp.glowColor;
        ctx.globalAlpha = 0.9;
        ctx.fill();
      }
      ctx.restore();

      // 5. Central Sagittal Fissure Electric Sparks (Cyan meets Amber)
      if (Math.random() < 0.12) {
        spawnFissureSpark();
      }

      ctx.save();
      fissureSparks = fissureSparks.filter((s) => s.life < s.maxLife);
      for (const spark of fissureSparks) {
        spark.life++;
        const alpha = 1 - spark.life / spark.maxLife;

        const x1 = spark.x1 * width;
        const y1 = spark.y1 * height;
        const x2 = spark.x2 * width;
        const y2 = spark.y2 * height;

        const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 10;
        const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 8;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(midX, midY);
        ctx.lineTo(x2, y2);

        ctx.strokeStyle = spark.color;
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = spark.color;
        ctx.stroke();

        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      ctx.restore();

      animIdRef.current = requestAnimationFrame(render);
    };

    animIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      ro.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-auto z-20 overflow-hidden select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

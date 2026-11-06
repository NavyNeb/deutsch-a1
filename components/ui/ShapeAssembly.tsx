'use client';
import { motion, useReducedMotion } from 'framer-motion';

const SPRING = { type: 'spring' as const, stiffness: 240, damping: 17 };

/** The reward: der, die and das snap together. Static under prefers-reduced-motion. */
export function ShapeAssembly({ size = 260 }: { size?: number }) {
  const reduce = useReducedMotion();
  const k = size / 260;
  const px = (n: number) => Math.round(n * k);
  const label = 'absolute font-display font-semibold leading-none';

  return (
    <div aria-hidden="true" className="relative" style={{ width: size, height: px(270) }}>
      <motion.span
        data-shape="square"
        className="absolute block"
        style={{ left: px(10), top: px(110), width: px(150), height: px(150), background: 'var(--der)' }}
        initial={reduce ? false : { x: -px(70), opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={SPRING}
      />
      <motion.span
        data-shape="circle"
        className="absolute block"
        style={{ left: px(110), top: px(6), width: px(130), height: px(130), borderRadius: '50%', background: 'var(--die)' }}
        initial={reduce ? false : { y: -px(60), opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...SPRING, delay: 0.15 }}
      />
      <motion.span
        data-shape="triangle"
        className="absolute block"
        style={{ left: px(96), top: px(136), width: px(150), height: px(130), background: 'var(--das)', clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
        initial={reduce ? false : { y: px(70), opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...SPRING, delay: 0.3 }}
      />
      <span className={label} style={{ left: px(34), top: px(216), fontSize: px(22), color: '#fff' }}>der</span>
      <span className={label} style={{ left: px(150), top: px(62), fontSize: px(22), color: '#fff' }}>die</span>
      <span className={label} style={{ left: px(150), top: px(222), fontSize: px(22), color: '#17171B' }}>das</span>
    </div>
  );
}

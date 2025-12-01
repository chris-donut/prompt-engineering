'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { hero as heroContent } from '../../../data/home';
import { Button } from '../../ui/Button';
import { Pill } from '../../ui/Pill';

export function Hero() {
  return (
    <section className="section-shell pt-16 pb-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-black/50 p-10 gradient-surface">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          <Pill className="w-fit bg-white/5 text-white/80">Retro-futurist | Blue + Orange</Pill>
          <div className="flex flex-col gap-2">
            <motion.h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight" layout>
              {heroContent.name}
            </motion.h1>
            <p className="text-lg md:text-xl text-white/80">{heroContent.title}</p>
            <p className="text-sm text-white/60">{heroContent.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/thesis">
              <Button>{heroContent.cta}</Button>
            </Link>
            <Link href="https://x.com">
              <Button intent="ghost">{heroContent.secondaryCta}</Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          aria-hidden
          className="absolute -right-8 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-horizon-orange/40 via-transparent to-horizon-blue/40 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-horizon-blue/30 via-transparent to-horizon-mint/30 blur-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}

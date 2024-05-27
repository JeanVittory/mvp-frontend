'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { DARK, LIGHT } from '@/constants';

export default function ThemeSwitchModeIcon() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  if (resolvedTheme === 'dark') {
    return <FiSun onClick={() => setTheme(LIGHT)} />;
  }

  if (resolvedTheme === 'light') {
    return <FiMoon onClick={() => setTheme(DARK)} />;
  }
}

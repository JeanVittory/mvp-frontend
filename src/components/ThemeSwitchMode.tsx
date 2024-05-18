'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeSwitchMode() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  if (resolvedTheme === 'dark') {
    return <FiSun onClick={() => setTheme('light')} />;
  }

  if (resolvedTheme === 'light') {
    return <FiMoon onClick={() => setTheme('dark')} />;
  }
}

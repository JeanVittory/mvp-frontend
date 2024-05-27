import create from 'zustand';

interface theme {
  theme: string;
  changeTheme: (newTheme: string) => void;
}

export const useThemeStore = create<theme>((set) => ({
  theme: 'dark',
  changeTheme: (newTheme: string) =>
    set((state) => ({
      theme: newTheme,
    })),
}));

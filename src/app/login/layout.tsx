import ThemeSwitchMode from '@/components/themeSwitchMode/ThemeSwitchMode';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-4">
      <ThemeSwitchMode />
      {children}
    </section>
  );
}

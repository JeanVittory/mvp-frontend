import NavbarComponent from '@/components/navbar/navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavbarComponent />
      {children}
    </section>
  );
}

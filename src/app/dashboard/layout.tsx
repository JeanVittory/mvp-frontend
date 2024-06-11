import NavbarComponent from "@/components/navBar/Navbar";

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

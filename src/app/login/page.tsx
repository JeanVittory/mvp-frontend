import LoginForm from '@/components/Login';
import LoginText from '@/components/LoginText';

export default function Login() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center gap-16">
      <LoginText />
      <LoginForm />
    </main>
  );
}

import LoginForm from "@/app/ui/login/login-form";
import { ThemeProvider } from "@/app/context/ThemeProvider";

export default function LoginPage() {
  return (
    <main className="bg-white min-h-full">
      <ThemeProvider>
        <LoginForm />
      </ThemeProvider>
    </main>
  );
}

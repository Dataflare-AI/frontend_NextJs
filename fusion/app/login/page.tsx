// import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-blue-500 to-white-600 text-black">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        {/* <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          // <div className="w-32 text-white md:w-36">{/* <AcmeLogo /> */}
        {/* </div> */}
        <LoginForm />
      </div>
    </main>
  );
}

// app/page.js (server component)
import LoginPage from '@/components/LoginWrapper';

export const metadata = {
  title: "Janta Power ⋅ Login",
};

export default function Page() {
  return <LoginPage />;
}
import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to your Human-First AI account to access brand intelligence insights.",
};

export default function LoginPage() {
  return <LoginForm />;
}

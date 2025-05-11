"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AuthForm from "./AuthForm";

interface AuthLayoutProps {
  authFormType: "sign-in" | "sign-up";
}

const AuthLayout = ({ authFormType }: AuthLayoutProps) => {
  const t = useTranslations("AuthPage");

  return (
    <div className="flex items-center flex-col">
      <div className="tabs flex gap-3 p-2">
        <div
          className={`signin p-1  ${authFormType === "sign-in" && "bg-blue-600"}`}
        >
          <Link href="/auth/sign-in">{t("Tabs.signIn")}</Link>
        </div>
        <div
          className={`signup p-1 ${authFormType === "sign-up" && "bg-blue-600"}`}
        >
          <Link href="/auth/sign-up">{t("Tabs.signUp")}</Link>
        </div>
      </div>
      <AuthForm authFormType={authFormType} />
    </div>
  );
};

export default AuthLayout;

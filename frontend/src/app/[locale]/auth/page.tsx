"use client";
import { useRouter } from "@/i18n/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/sign-in");
  }, [router]);

  return "Loading...";
};

export default Page;

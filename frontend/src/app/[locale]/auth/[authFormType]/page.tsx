import AuthLayout from "./_components/AuthLayout";

const Page = async ({
  params,
}: {
  params: Promise<{ authFormType: "sign-in" | "sign-up" }>;
}) => {
  const { authFormType } = await params;
  return <AuthLayout authFormType={authFormType} />;
};

export default Page;

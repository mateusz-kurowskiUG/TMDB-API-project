import { PropsWithChildren } from "react";
import Header from "./Header";

const MyLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div>{children}</div>;
    </>
  );
};

export default MyLayout;

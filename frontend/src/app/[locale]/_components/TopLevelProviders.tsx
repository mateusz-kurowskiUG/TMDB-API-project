import { NextIntlClientProvider } from "next-intl";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";

const TopLevelProviders = ({ children }: PropsWithChildren) => (
  <NextIntlClientProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  </NextIntlClientProvider>
);

export default TopLevelProviders;

import { Button } from "@/components/ui/button";
import ThemeSwitch from "./ThemeSwitch";
import { Link } from "@/i18n/navigation";

const Header = () => (
  <header className="flex items-center justify-between">
    <div className="left">
      <div>Hello</div>
    </div>
    <div className="right flex">
      <ThemeSwitch />
      <Button className="cursor-pointer">
        <Link href="/auth/sign-in">Sign in</Link>
      </Button>
    </div>
  </header>
);

export default Header;

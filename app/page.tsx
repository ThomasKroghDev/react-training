import Button from "@/ui/button/button";
import CloseRoundIcon from "@/ui/icons/close-round-icon";
import { EmailInput, PasswordInput } from "@/ui/input";
import CurrencyInput from "@/ui/input/currency-input";
import Input from "@/ui/input/input";

export default function Home() {
  return (
    <main className="">
      <EmailInput />
      <PasswordInput />
      <CurrencyInput />
    </main>
  );
}

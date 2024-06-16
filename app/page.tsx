"use client";
import { FormEvent, useState } from "react";
import { EmailInput, PasswordInput } from "@/ui/input";
import CurrencyInput from "@/ui/input/currency-input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [amount, setAmount] = useState("0.00");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleAmountChange = (value: string) => {
    setAmount(value);
  };
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({ email, password, amount }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <main className="">
      <form onSubmit={onSubmit} method="post">
        <EmailInput onChange={handleEmailChange} />
        <PasswordInput onChange={handlePasswordChange} />
        <CurrencyInput onChange={handleAmountChange} />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

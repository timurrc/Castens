"use client";

import Input from "@/components/ui/Input/Input";
import { Button, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [login, setLogin] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState<{ user: string; password: string }>({
    user: "",
    password: "",
  });
  const handleSetLogin = () => {
    setLogin(!login);
  };
  useEffect(() => {
    const login = localStorage.getItem("user");
    if (login) {
      router.push("/PK");
    }
  }, []);
  const handleAuth = () => {
    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("password");

    if (login) {
      if (formData.user === storedUser && formData.password === storedPass) {
        router.push("/PK");
      } else {
        alert("Неверный логин или пароль");
      }
    } else {
      localStorage.setItem("user", formData.user);
      localStorage.setItem("password", formData.password);
      router.push("/additionalInfo");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen px-[16px]">
      <div className="flex flex-col gap-2 w-full items-center">
        <Heading>{login ? "Вход" : "Регистрация"}</Heading>
        <br />
        <Input
          name={"formData"}
          type={"text"}
          placeholder={"Логин"}
          value={formData.user}
          onChange={(e) => setFormData({ ...formData, user: e.target.value })}
          label={"Логин"}
        />
        <Input
          name={"formData.password"}
          type={"password"}
          placeholder={"Пароль"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          label={"Пароль"}
          maxLength={8}
        />
        <button onClick={handleSetLogin}>
          {login ? (
            <p className="text-gray-400 text-sm w-full">
              Если вы не зарегистрированы -{" "}
              <span className="text-black">Регистрация</span>
            </p>
          ) : (
            <p className="text-gray-400 text-sm w-full">
              Если у вас есть аккаунт -{" "}
              <span className="text-black">Войти</span>
            </p>
          )}
        </button>
        <Button radius="full" color="red" onClick={handleAuth}>
          {login ? "Войти" : "Создать"}
        </Button>
      </div>
    </div>
  );
}

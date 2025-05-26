"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FC } from "react";

interface NavbarProps {
  type: "Main" | "Additional";
}

export const Navbar: FC<NavbarProps> = ({ type }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between my-4">
      {type === "Main" ? (
        <>
          <p className="font-semibold">Профиль</p>
          <Image
            src={"/add.svg"}
            alt={""}
            width={20}
            height={20}
            onClick={() => router.push("/Castens")}
          />
        </>
      ) : (
        <>
          <Image
            src={"/arrowBack.svg"}
            alt={""}
            width={20}
            height={20}
            onClick={() => router.push("/PK")}
          />
          <p className="font-semibold">Зачеты</p>
          <div></div>
        </>
      )}
    </div>
  );
};

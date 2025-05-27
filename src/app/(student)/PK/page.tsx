"use client";
import { useEffect, useState } from "react";
import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Navbar } from "@/components/modules/Navbar";
import { CircleProgressBar } from "@/components/layouts/CirclePorgressBar";

export default function Page() {
  const [user, setUser] = useState<string | null>(null);
  const [grades, setGrades] = useState<{ [key: string]: string | null }>({});
  const hasAnyGrades = Object.values(grades).some((val) => val !== null);

  useEffect(() => {
    const newGrades = {
      pullUps: localStorage.getItem("Mark_Pull-ups"),
      hangingPullUps: localStorage.getItem("Mark_HangingPull-ups"),
      pushUps: localStorage.getItem("Mark_Push-ups"),
      abs: localStorage.getItem("Mark_ABS"),
      longJump: localStorage.getItem("Mark_longJump"),
      forwardBend: localStorage.getItem("Mark_ForwardBend"),
    };

    setUser(localStorage.getItem("user"));
    setGrades(newGrades);
  }, []);

  const getGradeColor = (grade: string | null) => {
    switch (grade) {
      case "5":
        return "text-green-600";
      case "4":
        return "text-green-500";
      case "3":
        return "text-yellow-600";
      case "2":
        return "text-red-500";
      default:
        return "";
    }
  };

  const renderResultBlock = (label: string, value: string | null) => {
    if (!value) return null;
    return (
      <div className="bg-[#F3F7F9] rounded-3xl flex w-full justify-between items-center px-4 py-3">
        <p>{label}</p>
        <p className={getGradeColor(value)}>{value}</p>
      </div>
    );
  };

  const calculatePercentage = () => {
    const values = Object.values(grades).filter((v) => v !== null) as string[];

    if (values.length === 0) return 0;

    const scoreMap: { [key: string]: number } = {
      "5": 100,
      "4": 75,
      "3": 50,
      "2": 25,
    };

    const totalScore = values.reduce(
      (sum, grade) => sum + (scoreMap[grade] || 0),
      0
    );
    return Math.round(totalScore / values.length);
  };

  const percentage = calculatePercentage();

  return (
    <>
      <Navbar type="Main" />
      <br />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Heading>{user}</Heading>
          <Image
            src={"/Crown.svg"}
            width={16}
            height={16}
            alt="Crown"
            className="mt-1"
          />
        </div>
        <div className="bg-[#F3F7F9] rounded-3xl flex w-full justify-between items-center px-4 py-3">
          <CircleProgressBar percentage={percentage} />
          <p>Средний рейтинг</p>
        </div>
        <div className="flex flex-col gap-3">
          <Text size={"5"} weight={"medium"} className="text-lg font-bold">
            Результаты:
          </Text>

          {hasAnyGrades ? (
            <div className="flex flex-col gap-2">
              {renderResultBlock(
                "Подтягивания из виса лежа на высокой перекладине",
                grades.pullUps
              )}
              {renderResultBlock("Подтягивания в висе", grades.hangingPullUps)}
              {renderResultBlock("Отжимания", grades.pushUps)}
              {renderResultBlock("Пресс", grades.abs)}
              {renderResultBlock("Прыжок в длину с места", grades.longJump)}
              {renderResultBlock("Наклон вперед", grades.forwardBend)}
            </div>
          ) : (
            <p className="text-md">Пока нет результатов</p>
          )}
        </div>
      </div>
    </>
  );
}

"use client";

import { Navbar } from "@/components/modules/Navbar";

import { Select } from "@geist-ui/core";

import { useEffect, useState } from "react";

type FormData = {
  quantity: number | null;
  type: string;
};

const TEST_OPTIONS = [
  { value: "Pull-ups", label: "Подтягивание из виса на высокой перекладине" },
  { value: "HangingPull-ups", label: "Подтягивание в висе лежа" },
  { value: "Push-ups", label: "Отжимания от пола" },
  { value: "ABS", label: "Пресс" },
  { value: "longJump", label: "Прыжок в длину с места" },
  {
    value: "ForwardBend",
    label: "Наклон вперед из положения стоя на гимнастической скамье",
  },
];

const getMark = (
  sex: string,
  medicalGroup: string,
  type: string,
  quantity: string,
  weight: number | string
) => {
  weight = parseFloat(weight || "0");
  const rules = {
    man: {
      ForwardBend: [
        { min: 13, mark: 5 },
        { min: 8, mark: 4 },
        { min: 6, mark: 3 },
        { max: 4, mark: 2 },
      ],
      main: {
        "Pull-ups":
          weight < 85
            ? [
                { min: 15, mark: 5 },
                { min: 12, mark: 4 },
                { min: 10, mark: 3 },
                { max: 7, mark: 2 },
              ]
            : [
                { min: 12, mark: 5 },
                { min: 10, mark: 4 },
                { min: 7, mark: 3 },
                { max: 5, mark: 2 },
              ],
        "Push-ups": [
          { min: 44, mark: 5 },
          { min: 32, mark: 4 },
          { min: 28, mark: 3 },
          { max: 20, mark: 2 },
        ],
        ABS: [
          { min: 48, mark: 5 },
          { min: 37, mark: 4 },
          { min: 33, mark: 3 },
          { max: 28, mark: 2 },
        ],
        longJump: [
          { min: 250, mark: 5 },
          { min: 240, mark: 4 },
          { min: 230, mark: 3 },
          { max: 223, mark: 2 },
        ],
      },
      spec: {
        "HangingPull-ups":
          weight < 85
            ? [
                { min: 20, mark: 5 },
                { min: 17, mark: 4 },
                { min: 14, mark: 3 },
                { max: 11, mark: 2 },
              ]
            : [
                { min: 17, mark: 5 },
                { min: 14, mark: 4 },
                { min: 11, mark: 3 },
                { max: 8, mark: 2 },
              ],
        "Push-ups": [
          { min: 25, mark: 5 },
          { min: 20, mark: 4 },
          { min: 16, mark: 3 },
          { max: 13, mark: 2 },
        ],
        ABS: [
          { min: 33, mark: 5 },
          { min: 28, mark: 4 },
          { min: 20, mark: 3 },
          { max: 14, mark: 2 },
        ],
      },
      preparatory: {
        "Pull-ups":
          weight < 85
            ? [
                { min: 12, mark: 5 },
                { min: 9, mark: 4 },
                { min: 7, mark: 3 },
                { max: 5, mark: 2 },
              ]
            : [
                { min: 9, mark: 5 },
                { min: 7, mark: 4 },
                { min: 5, mark: 3 },
                { max: 3, mark: 2 },
              ],
        "Push-ups": [
          { min: 30, mark: 5 },
          { min: 25, mark: 4 },
          { min: 20, mark: 3 },
          { max: 16, mark: 2 },
        ],
        ABS: [
          { min: 37, mark: 5 },
          { min: 33, mark: 4 },
          { min: 28, mark: 3 },
          { max: 20, mark: 2 },
        ],
        longJump: [
          { min: 240, mark: 5 },
          { min: 230, mark: 4 },
          { min: 220, mark: 3 },
          { max: 210, mark: 2 },
        ],
      },
    },
    woman: {
      ForwardBend: [
        { min: 16, mark: 5 },
        { min: 11, mark: 4 },
        { min: 8, mark: 3 },
        { max: 4, mark: 2 },
      ],
      main: {
        "HangingPull-ups": [
          { min: 17, mark: 5 },
          { min: 12, mark: 4 },
          { min: 10, mark: 3 },
          { max: 7, mark: 2 },
        ],
        "Push-ups": [
          { min: 17, mark: 5 },
          { min: 12, mark: 4 },
          { min: 10, mark: 3 },
          { max: 6, mark: 2 },
        ],
        ABS: [
          { min: 43, mark: 5 },
          { min: 35, mark: 4 },
          { min: 32, mark: 3 },
          { max: 25, mark: 2 },
        ],
        longJump: [
          { min: 195, mark: 5 },
          { min: 180, mark: 4 },
          { min: 170, mark: 3 },
          { max: 160, mark: 2 },
        ],
      },
      spec: {
        "HangingPull-ups": [
          { min: 9, mark: 5 },
          { min: 7, mark: 4 },
          { min: 5, mark: 3 },
          { max: 3, mark: 2 },
        ],
        "Push-ups": [
          { min: 9, mark: 5 },
          { min: 6, mark: 4 },
          { min: 3, mark: 3 },
          { max: 2, mark: 2 },
        ],
        ABS: [
          { min: 32, mark: 5 },
          { min: 25, mark: 4 },
          { min: 20, mark: 3 },
          { max: 15, mark: 2 },
        ],
      },
      preparatory: {
        "HangingPull-ups": [
          { min: 12, mark: 5 },
          { min: 10, mark: 4 },
          { min: 7, mark: 3 },
          { max: 5, mark: 2 },
        ],
        "Push-ups": [
          { min: 12, mark: 5 },
          { min: 10, mark: 4 },
          { min: 6, mark: 3 },
          { max: 3, mark: 2 },
        ],
        ABS: [
          { min: 35, mark: 5 },
          { min: 32, mark: 4 },
          { min: 25, mark: 3 },
          { max: 19, mark: 2 },
        ],
        longJump: [
          { min: 180, mark: 5 },
          { min: 170, mark: 4 },
          { min: 160, mark: 3 },
          { max: 150, mark: 2 },
        ],
      },
    },
  };

  const conditionSets =
    rules[sex]?.[type] || rules[sex]?.[medicalGroup]?.[type];
  if (!conditionSets) return null;
  for (const cond of conditionSets) {
    if (cond.eq !== undefined && quantity === cond.eq) return cond.mark;
    if (cond.min !== undefined && quantity >= cond.min) return cond.mark;
    if (cond.max !== undefined && quantity <= cond.max) return cond.mark;
  }
  return null;
};

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    quantity: null,
    type: "",
  });
  const [sex, setSex] = useState<string | null>(null);
  const [medicalGroup, setMedicalGroup] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);

  useEffect(() => {
    setSex(localStorage.getItem("sex"));
    setMedicalGroup(localStorage.getItem("medicalGroup"));
    setWeight(localStorage.getItem("weight"));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mark = getMark(
      sex,
      medicalGroup,
      formData.type,
      formData.quantity,
      weight
    );
    if (mark !== null) {
      localStorage.setItem(`Mark_${formData.type}`, mark.toString());
      alert(`Оценка: ${mark}`);
    } else {
      alert("Не удалось определить оценку. Проверьте введённые данные.");
    }
  };

  return (
    <>
      <Navbar type="Additional" />
      <br />
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 w-full items-start">
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
            <label>Выберите контрольный тест:</label>
            <Select
              placeholder="Выберите тест"
              value={formData.type}
              width="full"
              type="default"
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, type: value as string }))
              }
            >
              {TEST_OPTIONS.map(({ value, label }) => (
                <Select.Option key={value} value={value}>
                  {label}
                </Select.Option>
              ))}
            </Select>
            <label>Введите количество:</label>
            <input
              type="number"
              value={formData.quantity ?? ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }))
              }
              className="px-4 py-1 rounded-lg border border-[#f0f0f0] outline-none"
            />
            <button type="submit" className="btn btn-primary mt-4">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

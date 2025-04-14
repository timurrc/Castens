"use client";

import Input from "@/components/ui/Input/Input";
import { Button, Heading, Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    group: "",
    medicalGroup: "",
    sex: "",
    weight: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreate = () => {
    localStorage.setItem("group", formData.group);
    localStorage.setItem("medicalGroup", formData.medicalGroup);
    localStorage.setItem("sex", formData.sex);
    localStorage.setItem("weight", formData.weight);
    router.push("/PK");
  };

  return (
    <div className="flex items-center justify-center h-screen px-[16px]">
      <div className="flex flex-col gap-4 w-full max-w-md items-center">
        <Heading className="text-center">
          Дополнительная <br />
          информация
        </Heading>

        <Input
          name="group"
          type="text"
          placeholder="Группа"
          value={formData.group}
          onChange={(e) => handleChange("group", e.target.value)}
          label="Группа"
        />

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="medicalGroup" className="ml-[14px]">
            Мед. группа
          </label>
          <Select.Root
            value={formData.medicalGroup}
            onValueChange={(value) => handleChange("medicalGroup", value)}
            size="3"
          >
            <Select.Trigger radius="full" id="medicalGroup" />
            <Select.Content>
              <Select.Group>
                <Select.Item value="main">Основная</Select.Item>
                <Select.Item value="spec">Спец.</Select.Item>
                <Select.Item value="preparatory">Подготовительная</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="sex" className="ml-[14px]">
            Пол
          </label>
          <Select.Root
            value={formData.sex}
            onValueChange={(value) => handleChange("sex", value)}
            size="3"
          >
            <Select.Trigger radius="full" id="sex" />
            <Select.Content>
              <Select.Group>
                <Select.Item value="man">Мужской</Select.Item>
                <Select.Item value="woman">Женский</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>

        <Input
          name="weight"
          placeholder="80"
          value={formData.weight}
          onChange={(e) => handleChange("weight", e.target.value)}
          label="Вес"
          type={"text"}
        />

        <Button radius="full" color="red" onClick={handleCreate}>
          Продолжить
        </Button>
      </div>
    </div>
  );
}

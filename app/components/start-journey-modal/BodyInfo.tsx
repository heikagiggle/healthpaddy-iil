import { ContainerProps } from "../../utils/type";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { TextInput } from "../form/text-input";
import { SubmitButton } from "../form/SubmitButton";
import { SelectInput } from "../form/select-input";
import { GenderSelection } from "./../GenderSelection";
import { useBioData } from "../../hooks/start-journey/BioData";
import toast from "react-hot-toast";
import { generateDays, generateMonths, generateYears } from "./helpers";
import { BodyInfoData, BodyInfoSchema } from "./schema/schema";
import { useMemo } from "react";

const calculateDaysInMonth = (month: number, year: number) => {
  if (!month) return 31;
  return new Date(year, month, 0).getDate();
};

const BodyInfo = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const { handleBioData, loading, success } = useBioData();

  const handler = useForm<BodyInfoData>({
    resolver: zodResolver(BodyInfoSchema),
    mode: "onChange",
  });

  const { control } = handler;

  const selectedMonth = useWatch({ control, name: "dateOfBirth.month" });
  const selectedYear = useWatch({ control, name: "dateOfBirth.year" });

  const days = useMemo(() => {
    const month = parseInt(selectedMonth || "0", 10);
    const year = parseInt(selectedYear || "0", 10);
    const daysInMonth = calculateDaysInMonth(month, year);
    return Array.from({ length: daysInMonth }, (_, i) => ({
      label: (i + 1).toString(),
      value: (i + 1).toString(),
      keywords: [(i + 1).toString()],
    }));
  }, [selectedMonth, selectedYear]);

  const onSubmit = async (data: BodyInfoData) => {
    const phone = sessionStorage.getItem("phone") || "";
    try {
      const success = await handleBioData({
        gender: data.gender,
        dateOfBirth: `${data.dateOfBirth.day}/${data.dateOfBirth.month}/${data.dateOfBirth.year}`,
        weight: data.weight,
        height: `${data.heightFt}'${data.heightIn}`,
        phone,
      });
      if (success) {
        onNextStep && onNextStep();
      }
    } catch (error) {
      toast.error("There was an error submitting your Bio-data.");
    }
  };

  return (
    <Form {...handler}>
      <form onSubmit={handler.handleSubmit(onSubmit)}>
        <h1 className="font-medium">
          Now let&apos;s get to know you a bit better, so we can make sure your
          meal plans are tailored just for you
        </h1>
        <div className={"flex flex-col gap-3 mb-20 mt-2"}>
          {/* Date of Birth Select */}
          <div className="py-1">
            <label className="block text-sm font-medium text-gray-700">
              Date of birth
            </label>
            <div className="flex sm:space-x-4 md:space-x-6 lg:space-x-4 space-x-2 mt-2">
              {/* Year */}
              <SelectInput
                name="dateOfBirth.year"
                label="Year"
                placeholder="Select Year"
                items={generateYears()}
                className="w-[30%] sm:w-full"
              />
              {/* Month */}
              <SelectInput
                name="dateOfBirth.month"
                label="Month"
                placeholder="Select Month"
                items={generateMonths}
                className="w-[30%] sm:w-full"
              />
              {/* Day */}
              <SelectInput
                name="dateOfBirth.day"
                label="Day"
                placeholder="Select Day"
                items={days}
                className="w-[30%] sm:w-full"
              />
            </div>
          </div>

          <GenderSelection handler={handler} />

          <div className="py-1">
            <label htmlFor="" className="text-sm">
              Height
            </label>
            <div className="flex gap-x-3">
              <TextInput
                name="heightFt"
                type={"number"}
                label=""
                rightLabel="ft"
              />
              <TextInput
                name="heightIn"
                type={"number"}
                label=""
                rightLabel="in"
              />
            </div>
          </div>

          <div className="py-1">
            <TextInput
              name="weight"
              type="number"
              label="Weight"
              rightLabel="kg"
              className="w-1/2 sm:w-[250px]"
            />
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[#0000004D] pt-4 px-0 mb-2">
          <SubmitButton
            className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
            onClick={onPrevStep}
          >
            Back
          </SubmitButton>
          <SubmitButton loading={loading}>Next</SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default BodyInfo;

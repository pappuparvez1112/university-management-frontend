"use client";
import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
interface IDatePicker {
  name: string;
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  value?: Dayjs;
  label?: string;
  size?: "large" | "small";
}
const FormDatePicker = ({
  name,
  value,
  onChange,
  label,
  size,
}: IDatePicker) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            size={size}
            defaultValue={dayjs(field.value) || ""}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;

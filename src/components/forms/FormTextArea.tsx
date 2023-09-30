"use client";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
type SelectOptions = {
  label: string;
  value: string;
};
interface ITextAreaField {
  name: string;
  rows: number;
  value?: string | string[] | undefined;
  label?: string;

  placeholder?: string;
}
const FormTextAreaField = ({
  name,
  value,
  rows,
  label,
  placeholder,
}: ITextAreaField) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            {...field}
            placeholder={placeholder}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextAreaField;

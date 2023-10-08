"use client";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
export type SelectOptions = {
  label: string;
  value: string;
};
interface ISelectField {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  defaultvalue?: ISelectField;
  placeholder?: string;
}
const FormSelectField = ({
  name,
  size,
  value,
  options,
  label,
  defaultvalue,
  placeholder,
}: ISelectField) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            size={size}
            value={value}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;

import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const options = [
  {
    label: "Class I",
    value: "1",
  },
  {
    label: "Class II",
    value: "2",
  },
  {
    label: "Class III",
    value: "3",
  },
  {
    label: "Class IV",
    value: "4",
  },
  {
    label: "Class V",
    value: "5",
  },
  {
    label: "Class VI",
    value: "6",
  },
  {
    label: "Class VII",
    value: "7",
  },
  {
    label: "Class VIII",
    value: "8",
  },
  {
    label: "Class IX",
    value: "9",
  },
  {
    label: "Class X",
    value: "10",
  },
  {
    label: "Class XI",
    value: "11",
  },
  {
    label: "Class XII",
    value: "12",
  },
];

export const FormInputDropdown= ({
  name,
  control,
  label,
  data,
}) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {data}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

export const FormInputText = ({ name, control, label, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value || defaultValue}
          fullWidth
          label={label}
          variant="outlined"
          margin="dense"
        />
      )}
    />
  );
};
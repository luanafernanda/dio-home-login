import React from "react";

import { IconContainer, InputText, InputContainer, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          s
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };

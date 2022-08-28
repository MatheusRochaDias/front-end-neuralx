import React, { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  colorLabel?: string;
  widthDefault?: any;
  disabled?: boolean;
  children: ReactNode;
  labelFontSize?: string;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, colorLabel, widthDefault, disabled, labelFontSize, children, ...rest },
  ref
) => {
  return (
    <FormControl w={widthDefault || 'full'}>
      {!!label && (
        <FormLabel fontWeight="bold" htmlFor={name} color={colorLabel || "#000"} fontSize={labelFontSize} mr="0">
          {label}
        </FormLabel>
      )}
      <ChakraSelect
        id={name}
        name={name}
        size="lg"
        fontSize="14px"
        iconColor="primary"
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraSelect>
    </FormControl>
  );
};

export const Select = forwardRef(SelectBase);
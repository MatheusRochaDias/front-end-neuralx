import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';


export interface IInputProps extends ChakraInputProps {
  name: string;
  bgHover?: string;
  bgFocus?: string;
  widthDefault?: any;
  bgPlaceholder?: string;
  label?: string;
  colorLabel?: string;
  labelFontSize?:string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, as, bgHover, labelFontSize, colorLabel, widthDefault, bgFocus, bgPlaceholder, label, ...rest },
  ref,
) => {
  return (
    <FormControl w={ widthDefault || 'full' }>
      {!!label && (
        <FormLabel htmlFor={name} color={ colorLabel || "#000" } fontWeight="600" fontSize={labelFontSize} mr="0">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        fontSize="14px"
        size="lg"
        variant="filled"
        _hover={{
          bg: bgHover,
        }}
        _focus={{
          bg: bgFocus,
        }}
        _placeholder={{
          color: bgPlaceholder,
        }}
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
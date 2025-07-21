/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalendarCreateFormInputValues = {
    title?: string;
    description?: string;
    datetime?: string;
    location?: string;
    done?: boolean;
};
export declare type CalendarCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    datetime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    done?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarCreateFormOverridesProps = {
    CalendarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    datetime?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    done?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CalendarCreateFormProps = React.PropsWithChildren<{
    overrides?: CalendarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CalendarCreateFormInputValues) => CalendarCreateFormInputValues;
    onSuccess?: (fields: CalendarCreateFormInputValues) => void;
    onError?: (fields: CalendarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarCreateFormInputValues) => CalendarCreateFormInputValues;
    onValidate?: CalendarCreateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarCreateForm(props: CalendarCreateFormProps): React.ReactElement;

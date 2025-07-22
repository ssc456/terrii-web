/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SystemInfoCreateFormInputValues = {
    name?: string;
    value?: string;
    options?: string;
};
export declare type SystemInfoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    value?: ValidationFunction<string>;
    options?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SystemInfoCreateFormOverridesProps = {
    SystemInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    options?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SystemInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: SystemInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SystemInfoCreateFormInputValues) => SystemInfoCreateFormInputValues;
    onSuccess?: (fields: SystemInfoCreateFormInputValues) => void;
    onError?: (fields: SystemInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SystemInfoCreateFormInputValues) => SystemInfoCreateFormInputValues;
    onValidate?: SystemInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function SystemInfoCreateForm(props: SystemInfoCreateFormProps): React.ReactElement;

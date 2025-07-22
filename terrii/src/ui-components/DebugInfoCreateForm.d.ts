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
export declare type DebugInfoCreateFormInputValues = {
    user?: string;
    Logging?: string;
    Test?: string;
};
export declare type DebugInfoCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    Logging?: ValidationFunction<string>;
    Test?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DebugInfoCreateFormOverridesProps = {
    DebugInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    Logging?: PrimitiveOverrideProps<TextFieldProps>;
    Test?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DebugInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: DebugInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DebugInfoCreateFormInputValues) => DebugInfoCreateFormInputValues;
    onSuccess?: (fields: DebugInfoCreateFormInputValues) => void;
    onError?: (fields: DebugInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DebugInfoCreateFormInputValues) => DebugInfoCreateFormInputValues;
    onValidate?: DebugInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function DebugInfoCreateForm(props: DebugInfoCreateFormProps): React.ReactElement;

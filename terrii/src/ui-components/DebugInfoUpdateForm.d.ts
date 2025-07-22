/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DebugInfo } from "../API.ts";
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
export declare type DebugInfoUpdateFormInputValues = {
    user?: string;
    Logging?: string;
    Test?: string;
};
export declare type DebugInfoUpdateFormValidationValues = {
    user?: ValidationFunction<string>;
    Logging?: ValidationFunction<string>;
    Test?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DebugInfoUpdateFormOverridesProps = {
    DebugInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    Logging?: PrimitiveOverrideProps<TextFieldProps>;
    Test?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DebugInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: DebugInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    debugInfo?: DebugInfo;
    onSubmit?: (fields: DebugInfoUpdateFormInputValues) => DebugInfoUpdateFormInputValues;
    onSuccess?: (fields: DebugInfoUpdateFormInputValues) => void;
    onError?: (fields: DebugInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DebugInfoUpdateFormInputValues) => DebugInfoUpdateFormInputValues;
    onValidate?: DebugInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DebugInfoUpdateForm(props: DebugInfoUpdateFormProps): React.ReactElement;

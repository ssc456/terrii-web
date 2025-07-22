/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SystemInfo } from "../API.ts";
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
export declare type SystemInfoUpdateFormInputValues = {
    name?: string;
    value?: string;
    options?: string;
};
export declare type SystemInfoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    value?: ValidationFunction<string>;
    options?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SystemInfoUpdateFormOverridesProps = {
    SystemInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    options?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SystemInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: SystemInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    systemInfo?: SystemInfo;
    onSubmit?: (fields: SystemInfoUpdateFormInputValues) => SystemInfoUpdateFormInputValues;
    onSuccess?: (fields: SystemInfoUpdateFormInputValues) => void;
    onError?: (fields: SystemInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SystemInfoUpdateFormInputValues) => SystemInfoUpdateFormInputValues;
    onValidate?: SystemInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SystemInfoUpdateForm(props: SystemInfoUpdateFormProps): React.ReactElement;

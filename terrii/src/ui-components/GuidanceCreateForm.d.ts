/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type GuidanceCreateFormInputValues = {
    title?: string;
    shortDesc?: string;
    longDesc?: string;
    thumbURL?: string;
    date?: string;
    time?: string;
    estTime?: number;
    deleted?: boolean;
    location?: string;
    author?: string;
    S3ObjectKey?: string;
    status?: string;
    active?: boolean;
    lowerCaseTitle?: string;
    lowerCaseShortDesc?: string;
    scheduleDateTime?: string;
};
export declare type GuidanceCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    shortDesc?: ValidationFunction<string>;
    longDesc?: ValidationFunction<string>;
    thumbURL?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    estTime?: ValidationFunction<number>;
    deleted?: ValidationFunction<boolean>;
    location?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    S3ObjectKey?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    lowerCaseTitle?: ValidationFunction<string>;
    lowerCaseShortDesc?: ValidationFunction<string>;
    scheduleDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GuidanceCreateFormOverridesProps = {
    GuidanceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    shortDesc?: PrimitiveOverrideProps<TextFieldProps>;
    longDesc?: PrimitiveOverrideProps<TextFieldProps>;
    thumbURL?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    estTime?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    S3ObjectKey?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    lowerCaseTitle?: PrimitiveOverrideProps<TextFieldProps>;
    lowerCaseShortDesc?: PrimitiveOverrideProps<TextFieldProps>;
    scheduleDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GuidanceCreateFormProps = React.PropsWithChildren<{
    overrides?: GuidanceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GuidanceCreateFormInputValues) => GuidanceCreateFormInputValues;
    onSuccess?: (fields: GuidanceCreateFormInputValues) => void;
    onError?: (fields: GuidanceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GuidanceCreateFormInputValues) => GuidanceCreateFormInputValues;
    onValidate?: GuidanceCreateFormValidationValues;
} & React.CSSProperties>;
export default function GuidanceCreateForm(props: GuidanceCreateFormProps): React.ReactElement;

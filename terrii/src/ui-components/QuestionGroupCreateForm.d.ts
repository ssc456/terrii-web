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
export declare type QuestionGroupCreateFormInputValues = {
    name?: string;
    description?: string;
    imageS3ObjectKey?: string;
    deleted?: boolean;
    type?: string;
    status?: string;
    groupLevel?: number;
};
export declare type QuestionGroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageS3ObjectKey?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    groupLevel?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionGroupCreateFormOverridesProps = {
    QuestionGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageS3ObjectKey?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    groupLevel?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionGroupCreateFormInputValues) => QuestionGroupCreateFormInputValues;
    onSuccess?: (fields: QuestionGroupCreateFormInputValues) => void;
    onError?: (fields: QuestionGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionGroupCreateFormInputValues) => QuestionGroupCreateFormInputValues;
    onValidate?: QuestionGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionGroupCreateForm(props: QuestionGroupCreateFormProps): React.ReactElement;

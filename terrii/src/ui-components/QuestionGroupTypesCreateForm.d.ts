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
export declare type QuestionGroupTypesCreateFormInputValues = {
    name?: string;
    iconS3URL?: string;
};
export declare type QuestionGroupTypesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    iconS3URL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionGroupTypesCreateFormOverridesProps = {
    QuestionGroupTypesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    iconS3URL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionGroupTypesCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionGroupTypesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionGroupTypesCreateFormInputValues) => QuestionGroupTypesCreateFormInputValues;
    onSuccess?: (fields: QuestionGroupTypesCreateFormInputValues) => void;
    onError?: (fields: QuestionGroupTypesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionGroupTypesCreateFormInputValues) => QuestionGroupTypesCreateFormInputValues;
    onValidate?: QuestionGroupTypesCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionGroupTypesCreateForm(props: QuestionGroupTypesCreateFormProps): React.ReactElement;

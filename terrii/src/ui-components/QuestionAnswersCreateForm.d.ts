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
export declare type QuestionAnswersCreateFormInputValues = {
    answer?: string;
    helpText?: string;
    nextQuestionID?: string;
    deleted?: boolean;
};
export declare type QuestionAnswersCreateFormValidationValues = {
    answer?: ValidationFunction<string>;
    helpText?: ValidationFunction<string>;
    nextQuestionID?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionAnswersCreateFormOverridesProps = {
    QuestionAnswersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    answer?: PrimitiveOverrideProps<TextFieldProps>;
    helpText?: PrimitiveOverrideProps<TextFieldProps>;
    nextQuestionID?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type QuestionAnswersCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionAnswersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionAnswersCreateFormInputValues) => QuestionAnswersCreateFormInputValues;
    onSuccess?: (fields: QuestionAnswersCreateFormInputValues) => void;
    onError?: (fields: QuestionAnswersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionAnswersCreateFormInputValues) => QuestionAnswersCreateFormInputValues;
    onValidate?: QuestionAnswersCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionAnswersCreateForm(props: QuestionAnswersCreateFormProps): React.ReactElement;

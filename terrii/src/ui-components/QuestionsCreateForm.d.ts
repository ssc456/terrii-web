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
export declare type QuestionsCreateFormInputValues = {
    question?: string;
    helpText?: string;
    deleted?: boolean;
    isFirstQuestion?: boolean;
    questionNumber?: number;
};
export declare type QuestionsCreateFormValidationValues = {
    question?: ValidationFunction<string>;
    helpText?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
    isFirstQuestion?: ValidationFunction<boolean>;
    questionNumber?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionsCreateFormOverridesProps = {
    QuestionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    question?: PrimitiveOverrideProps<TextFieldProps>;
    helpText?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    isFirstQuestion?: PrimitiveOverrideProps<SwitchFieldProps>;
    questionNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionsCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionsCreateFormInputValues) => QuestionsCreateFormInputValues;
    onSuccess?: (fields: QuestionsCreateFormInputValues) => void;
    onError?: (fields: QuestionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionsCreateFormInputValues) => QuestionsCreateFormInputValues;
    onValidate?: QuestionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionsCreateForm(props: QuestionsCreateFormProps): React.ReactElement;

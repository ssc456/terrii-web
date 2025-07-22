/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { QuestionAnswers } from "../API.ts";
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
export declare type QuestionAnswersUpdateFormInputValues = {
    answer?: string;
    helpText?: string;
    nextQuestionID?: string;
    deleted?: boolean;
};
export declare type QuestionAnswersUpdateFormValidationValues = {
    answer?: ValidationFunction<string>;
    helpText?: ValidationFunction<string>;
    nextQuestionID?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionAnswersUpdateFormOverridesProps = {
    QuestionAnswersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    answer?: PrimitiveOverrideProps<TextFieldProps>;
    helpText?: PrimitiveOverrideProps<TextFieldProps>;
    nextQuestionID?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type QuestionAnswersUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionAnswersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    questionAnswers?: QuestionAnswers;
    onSubmit?: (fields: QuestionAnswersUpdateFormInputValues) => QuestionAnswersUpdateFormInputValues;
    onSuccess?: (fields: QuestionAnswersUpdateFormInputValues) => void;
    onError?: (fields: QuestionAnswersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionAnswersUpdateFormInputValues) => QuestionAnswersUpdateFormInputValues;
    onValidate?: QuestionAnswersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionAnswersUpdateForm(props: QuestionAnswersUpdateFormProps): React.ReactElement;

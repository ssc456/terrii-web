/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { QuestionGroupTypes } from "../API.ts";
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
export declare type QuestionGroupTypesUpdateFormInputValues = {
    name?: string;
    iconS3URL?: string;
};
export declare type QuestionGroupTypesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    iconS3URL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionGroupTypesUpdateFormOverridesProps = {
    QuestionGroupTypesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    iconS3URL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionGroupTypesUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionGroupTypesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    questionGroupTypes?: QuestionGroupTypes;
    onSubmit?: (fields: QuestionGroupTypesUpdateFormInputValues) => QuestionGroupTypesUpdateFormInputValues;
    onSuccess?: (fields: QuestionGroupTypesUpdateFormInputValues) => void;
    onError?: (fields: QuestionGroupTypesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionGroupTypesUpdateFormInputValues) => QuestionGroupTypesUpdateFormInputValues;
    onValidate?: QuestionGroupTypesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionGroupTypesUpdateForm(props: QuestionGroupTypesUpdateFormProps): React.ReactElement;

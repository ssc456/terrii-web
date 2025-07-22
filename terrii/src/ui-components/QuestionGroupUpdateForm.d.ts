/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { QuestionGroup } from "../API.ts";
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
export declare type QuestionGroupUpdateFormInputValues = {
    name?: string;
    description?: string;
    imageS3ObjectKey?: string;
    deleted?: boolean;
    type?: string;
    status?: string;
    groupLevel?: number;
};
export declare type QuestionGroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageS3ObjectKey?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    groupLevel?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionGroupUpdateFormOverridesProps = {
    QuestionGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageS3ObjectKey?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    groupLevel?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    questionGroup?: QuestionGroup;
    onSubmit?: (fields: QuestionGroupUpdateFormInputValues) => QuestionGroupUpdateFormInputValues;
    onSuccess?: (fields: QuestionGroupUpdateFormInputValues) => void;
    onError?: (fields: QuestionGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionGroupUpdateFormInputValues) => QuestionGroupUpdateFormInputValues;
    onValidate?: QuestionGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionGroupUpdateForm(props: QuestionGroupUpdateFormProps): React.ReactElement;

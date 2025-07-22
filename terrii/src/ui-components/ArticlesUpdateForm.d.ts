/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Articles } from "../API.ts";
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
export declare type ArticlesUpdateFormInputValues = {
    title?: string;
    description?: string;
    imageURL?: string;
};
export declare type ArticlesUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticlesUpdateFormOverridesProps = {
    ArticlesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArticlesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArticlesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    articles?: Articles;
    onSubmit?: (fields: ArticlesUpdateFormInputValues) => ArticlesUpdateFormInputValues;
    onSuccess?: (fields: ArticlesUpdateFormInputValues) => void;
    onError?: (fields: ArticlesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArticlesUpdateFormInputValues) => ArticlesUpdateFormInputValues;
    onValidate?: ArticlesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArticlesUpdateForm(props: ArticlesUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ArticlesCreateFormInputValues = {
    title?: string;
    description?: string;
    imageURL?: string;
};
export declare type ArticlesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticlesCreateFormOverridesProps = {
    ArticlesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    imageURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArticlesCreateFormProps = React.PropsWithChildren<{
    overrides?: ArticlesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ArticlesCreateFormInputValues) => ArticlesCreateFormInputValues;
    onSuccess?: (fields: ArticlesCreateFormInputValues) => void;
    onError?: (fields: ArticlesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArticlesCreateFormInputValues) => ArticlesCreateFormInputValues;
    onValidate?: ArticlesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ArticlesCreateForm(props: ArticlesCreateFormProps): React.ReactElement;

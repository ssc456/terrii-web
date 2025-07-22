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
export declare type TerriiCareHomeCreateFormInputValues = {
    name?: string;
    address?: string;
    city?: string;
    postCode?: string;
    phoneNumber?: string;
    email?: string;
    website?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type TerriiCareHomeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    postCode?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerriiCareHomeCreateFormOverridesProps = {
    TerriiCareHomeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    postCode?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TerriiCareHomeCreateFormProps = React.PropsWithChildren<{
    overrides?: TerriiCareHomeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TerriiCareHomeCreateFormInputValues) => TerriiCareHomeCreateFormInputValues;
    onSuccess?: (fields: TerriiCareHomeCreateFormInputValues) => void;
    onError?: (fields: TerriiCareHomeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerriiCareHomeCreateFormInputValues) => TerriiCareHomeCreateFormInputValues;
    onValidate?: TerriiCareHomeCreateFormValidationValues;
} & React.CSSProperties>;
export default function TerriiCareHomeCreateForm(props: TerriiCareHomeCreateFormProps): React.ReactElement;

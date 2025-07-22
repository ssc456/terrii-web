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
export declare type GuidanceTypesCreateFormInputValues = {
    name?: string;
    description?: string;
    colour?: string;
    deleted?: boolean;
};
export declare type GuidanceTypesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GuidanceTypesCreateFormOverridesProps = {
    GuidanceTypesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    colour?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GuidanceTypesCreateFormProps = React.PropsWithChildren<{
    overrides?: GuidanceTypesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GuidanceTypesCreateFormInputValues) => GuidanceTypesCreateFormInputValues;
    onSuccess?: (fields: GuidanceTypesCreateFormInputValues) => void;
    onError?: (fields: GuidanceTypesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GuidanceTypesCreateFormInputValues) => GuidanceTypesCreateFormInputValues;
    onValidate?: GuidanceTypesCreateFormValidationValues;
} & React.CSSProperties>;
export default function GuidanceTypesCreateForm(props: GuidanceTypesCreateFormProps): React.ReactElement;

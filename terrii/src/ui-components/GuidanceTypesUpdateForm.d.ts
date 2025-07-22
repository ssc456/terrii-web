/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { GuidanceTypes } from "../API.ts";
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
export declare type GuidanceTypesUpdateFormInputValues = {
    name?: string;
    description?: string;
    colour?: string;
    deleted?: boolean;
};
export declare type GuidanceTypesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GuidanceTypesUpdateFormOverridesProps = {
    GuidanceTypesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    colour?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GuidanceTypesUpdateFormProps = React.PropsWithChildren<{
    overrides?: GuidanceTypesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    guidanceTypes?: GuidanceTypes;
    onSubmit?: (fields: GuidanceTypesUpdateFormInputValues) => GuidanceTypesUpdateFormInputValues;
    onSuccess?: (fields: GuidanceTypesUpdateFormInputValues) => void;
    onError?: (fields: GuidanceTypesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GuidanceTypesUpdateFormInputValues) => GuidanceTypesUpdateFormInputValues;
    onValidate?: GuidanceTypesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GuidanceTypesUpdateForm(props: GuidanceTypesUpdateFormProps): React.ReactElement;

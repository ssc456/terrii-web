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
export declare type ManualNotificationsCreateFormInputValues = {
    title?: string;
    shortText?: string;
};
export declare type ManualNotificationsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    shortText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManualNotificationsCreateFormOverridesProps = {
    ManualNotificationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    shortText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManualNotificationsCreateFormProps = React.PropsWithChildren<{
    overrides?: ManualNotificationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ManualNotificationsCreateFormInputValues) => ManualNotificationsCreateFormInputValues;
    onSuccess?: (fields: ManualNotificationsCreateFormInputValues) => void;
    onError?: (fields: ManualNotificationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManualNotificationsCreateFormInputValues) => ManualNotificationsCreateFormInputValues;
    onValidate?: ManualNotificationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ManualNotificationsCreateForm(props: ManualNotificationsCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ExpoNotificationsCreateFormInputValues = {
    title?: string;
    description?: string;
    seen?: string;
    data?: string;
    NotificationType?: string;
};
export declare type ExpoNotificationsCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    seen?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
    NotificationType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpoNotificationsCreateFormOverridesProps = {
    ExpoNotificationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    seen?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
    NotificationType?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ExpoNotificationsCreateFormProps = React.PropsWithChildren<{
    overrides?: ExpoNotificationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExpoNotificationsCreateFormInputValues) => ExpoNotificationsCreateFormInputValues;
    onSuccess?: (fields: ExpoNotificationsCreateFormInputValues) => void;
    onError?: (fields: ExpoNotificationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExpoNotificationsCreateFormInputValues) => ExpoNotificationsCreateFormInputValues;
    onValidate?: ExpoNotificationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExpoNotificationsCreateForm(props: ExpoNotificationsCreateFormProps): React.ReactElement;

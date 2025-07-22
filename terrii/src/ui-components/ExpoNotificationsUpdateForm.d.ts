/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ExpoNotifications } from "../API.ts";
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
export declare type ExpoNotificationsUpdateFormInputValues = {
    title?: string;
    description?: string;
    seen?: string;
    data?: string;
    NotificationType?: string;
};
export declare type ExpoNotificationsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    seen?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
    NotificationType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpoNotificationsUpdateFormOverridesProps = {
    ExpoNotificationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    seen?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
    NotificationType?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ExpoNotificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExpoNotificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    expoNotifications?: ExpoNotifications;
    onSubmit?: (fields: ExpoNotificationsUpdateFormInputValues) => ExpoNotificationsUpdateFormInputValues;
    onSuccess?: (fields: ExpoNotificationsUpdateFormInputValues) => void;
    onError?: (fields: ExpoNotificationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExpoNotificationsUpdateFormInputValues) => ExpoNotificationsUpdateFormInputValues;
    onValidate?: ExpoNotificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExpoNotificationsUpdateForm(props: ExpoNotificationsUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ManualNotifications } from "../API.ts";
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
export declare type ManualNotificationsUpdateFormInputValues = {
    title?: string;
    shortText?: string;
};
export declare type ManualNotificationsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    shortText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManualNotificationsUpdateFormOverridesProps = {
    ManualNotificationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    shortText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManualNotificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManualNotificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    manualNotifications?: ManualNotifications;
    onSubmit?: (fields: ManualNotificationsUpdateFormInputValues) => ManualNotificationsUpdateFormInputValues;
    onSuccess?: (fields: ManualNotificationsUpdateFormInputValues) => void;
    onError?: (fields: ManualNotificationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManualNotificationsUpdateFormInputValues) => ManualNotificationsUpdateFormInputValues;
    onValidate?: ManualNotificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ManualNotificationsUpdateForm(props: ManualNotificationsUpdateFormProps): React.ReactElement;

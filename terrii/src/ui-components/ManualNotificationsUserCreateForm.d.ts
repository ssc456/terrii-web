/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
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
export declare type ManualNotificationsUserCreateFormInputValues = {
    seen?: boolean;
};
export declare type ManualNotificationsUserCreateFormValidationValues = {
    seen?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManualNotificationsUserCreateFormOverridesProps = {
    ManualNotificationsUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    seen?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ManualNotificationsUserCreateFormProps = React.PropsWithChildren<{
    overrides?: ManualNotificationsUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ManualNotificationsUserCreateFormInputValues) => ManualNotificationsUserCreateFormInputValues;
    onSuccess?: (fields: ManualNotificationsUserCreateFormInputValues) => void;
    onError?: (fields: ManualNotificationsUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManualNotificationsUserCreateFormInputValues) => ManualNotificationsUserCreateFormInputValues;
    onValidate?: ManualNotificationsUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function ManualNotificationsUserCreateForm(props: ManualNotificationsUserCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { ManualNotificationsUser } from "../API.ts";
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
export declare type ManualNotificationsUserUpdateFormInputValues = {
    seen?: boolean;
};
export declare type ManualNotificationsUserUpdateFormValidationValues = {
    seen?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManualNotificationsUserUpdateFormOverridesProps = {
    ManualNotificationsUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    seen?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ManualNotificationsUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManualNotificationsUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    manualNotificationsUser?: ManualNotificationsUser;
    onSubmit?: (fields: ManualNotificationsUserUpdateFormInputValues) => ManualNotificationsUserUpdateFormInputValues;
    onSuccess?: (fields: ManualNotificationsUserUpdateFormInputValues) => void;
    onError?: (fields: ManualNotificationsUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ManualNotificationsUserUpdateFormInputValues) => ManualNotificationsUserUpdateFormInputValues;
    onValidate?: ManualNotificationsUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ManualNotificationsUserUpdateForm(props: ManualNotificationsUserUpdateFormProps): React.ReactElement;

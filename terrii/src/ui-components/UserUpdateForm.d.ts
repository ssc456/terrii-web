/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { User } from "../API.ts";
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
export declare type UserUpdateFormInputValues = {
    name?: string;
    status?: string;
    image?: string;
    userType?: string;
    deleted?: boolean;
    firstName?: string;
    lastName?: string;
    mobileNo?: string;
    headerImage?: string;
    pwdName?: string;
    expoNotificationToken?: string;
    nativeNotificationToken?: string;
    postRegistrationComplete?: boolean;
    additionalInformationComplete?: boolean;
    lastActivity?: string;
};
export declare type UserUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    userType?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    mobileNo?: ValidationFunction<string>;
    headerImage?: ValidationFunction<string>;
    pwdName?: ValidationFunction<string>;
    expoNotificationToken?: ValidationFunction<string>;
    nativeNotificationToken?: ValidationFunction<string>;
    postRegistrationComplete?: ValidationFunction<boolean>;
    additionalInformationComplete?: ValidationFunction<boolean>;
    lastActivity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    userType?: PrimitiveOverrideProps<SelectFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    mobileNo?: PrimitiveOverrideProps<TextFieldProps>;
    headerImage?: PrimitiveOverrideProps<TextFieldProps>;
    pwdName?: PrimitiveOverrideProps<TextFieldProps>;
    expoNotificationToken?: PrimitiveOverrideProps<TextFieldProps>;
    nativeNotificationToken?: PrimitiveOverrideProps<TextFieldProps>;
    postRegistrationComplete?: PrimitiveOverrideProps<SwitchFieldProps>;
    additionalInformationComplete?: PrimitiveOverrideProps<SwitchFieldProps>;
    lastActivity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;

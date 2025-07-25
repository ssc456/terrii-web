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
export declare type MyFriendsCreateFormInputValues = {
    status?: string;
};
export declare type MyFriendsCreateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyFriendsCreateFormOverridesProps = {
    MyFriendsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MyFriendsCreateFormProps = React.PropsWithChildren<{
    overrides?: MyFriendsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MyFriendsCreateFormInputValues) => MyFriendsCreateFormInputValues;
    onSuccess?: (fields: MyFriendsCreateFormInputValues) => void;
    onError?: (fields: MyFriendsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MyFriendsCreateFormInputValues) => MyFriendsCreateFormInputValues;
    onValidate?: MyFriendsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MyFriendsCreateForm(props: MyFriendsCreateFormProps): React.ReactElement;

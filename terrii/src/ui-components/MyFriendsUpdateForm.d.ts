/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MyFriends } from "../API.ts";
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
export declare type MyFriendsUpdateFormInputValues = {
    status?: string;
};
export declare type MyFriendsUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyFriendsUpdateFormOverridesProps = {
    MyFriendsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MyFriendsUpdateFormProps = React.PropsWithChildren<{
    overrides?: MyFriendsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    myFriends?: MyFriends;
    onSubmit?: (fields: MyFriendsUpdateFormInputValues) => MyFriendsUpdateFormInputValues;
    onSuccess?: (fields: MyFriendsUpdateFormInputValues) => void;
    onError?: (fields: MyFriendsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MyFriendsUpdateFormInputValues) => MyFriendsUpdateFormInputValues;
    onValidate?: MyFriendsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MyFriendsUpdateForm(props: MyFriendsUpdateFormProps): React.ReactElement;

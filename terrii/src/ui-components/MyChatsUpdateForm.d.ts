/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MyChats } from "../API.ts";
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
export declare type MyChatsUpdateFormInputValues = {
    unreadMessages?: boolean;
    lastMessageDateTime?: string;
    lastMessage?: string;
    chatName?: string;
    chatImageS3URL?: string;
};
export declare type MyChatsUpdateFormValidationValues = {
    unreadMessages?: ValidationFunction<boolean>;
    lastMessageDateTime?: ValidationFunction<string>;
    lastMessage?: ValidationFunction<string>;
    chatName?: ValidationFunction<string>;
    chatImageS3URL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyChatsUpdateFormOverridesProps = {
    MyChatsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    unreadMessages?: PrimitiveOverrideProps<SwitchFieldProps>;
    lastMessageDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    lastMessage?: PrimitiveOverrideProps<TextFieldProps>;
    chatName?: PrimitiveOverrideProps<TextFieldProps>;
    chatImageS3URL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MyChatsUpdateFormProps = React.PropsWithChildren<{
    overrides?: MyChatsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    myChats?: MyChats;
    onSubmit?: (fields: MyChatsUpdateFormInputValues) => MyChatsUpdateFormInputValues;
    onSuccess?: (fields: MyChatsUpdateFormInputValues) => void;
    onError?: (fields: MyChatsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MyChatsUpdateFormInputValues) => MyChatsUpdateFormInputValues;
    onValidate?: MyChatsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MyChatsUpdateForm(props: MyChatsUpdateFormProps): React.ReactElement;

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
export declare type UserQuestionGroupsCreateFormInputValues = {
    status?: string;
};
export declare type UserQuestionGroupsCreateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserQuestionGroupsCreateFormOverridesProps = {
    UserQuestionGroupsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserQuestionGroupsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserQuestionGroupsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserQuestionGroupsCreateFormInputValues) => UserQuestionGroupsCreateFormInputValues;
    onSuccess?: (fields: UserQuestionGroupsCreateFormInputValues) => void;
    onError?: (fields: UserQuestionGroupsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserQuestionGroupsCreateFormInputValues) => UserQuestionGroupsCreateFormInputValues;
    onValidate?: UserQuestionGroupsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserQuestionGroupsCreateForm(props: UserQuestionGroupsCreateFormProps): React.ReactElement;

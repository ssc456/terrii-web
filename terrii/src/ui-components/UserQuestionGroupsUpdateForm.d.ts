/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserQuestionGroups } from "../API.ts";
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
export declare type UserQuestionGroupsUpdateFormInputValues = {
    status?: string;
};
export declare type UserQuestionGroupsUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserQuestionGroupsUpdateFormOverridesProps = {
    UserQuestionGroupsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserQuestionGroupsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserQuestionGroupsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userQuestionGroups?: UserQuestionGroups;
    onSubmit?: (fields: UserQuestionGroupsUpdateFormInputValues) => UserQuestionGroupsUpdateFormInputValues;
    onSuccess?: (fields: UserQuestionGroupsUpdateFormInputValues) => void;
    onError?: (fields: UserQuestionGroupsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserQuestionGroupsUpdateFormInputValues) => UserQuestionGroupsUpdateFormInputValues;
    onValidate?: UserQuestionGroupsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserQuestionGroupsUpdateForm(props: UserQuestionGroupsUpdateFormProps): React.ReactElement;

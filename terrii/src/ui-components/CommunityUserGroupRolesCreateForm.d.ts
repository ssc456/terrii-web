/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type CommunityUserGroupRolesCreateFormInputValues = {
    userGroupRole?: string;
};
export declare type CommunityUserGroupRolesCreateFormValidationValues = {
    userGroupRole?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunityUserGroupRolesCreateFormOverridesProps = {
    CommunityUserGroupRolesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userGroupRole?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CommunityUserGroupRolesCreateFormProps = React.PropsWithChildren<{
    overrides?: CommunityUserGroupRolesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommunityUserGroupRolesCreateFormInputValues) => CommunityUserGroupRolesCreateFormInputValues;
    onSuccess?: (fields: CommunityUserGroupRolesCreateFormInputValues) => void;
    onError?: (fields: CommunityUserGroupRolesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunityUserGroupRolesCreateFormInputValues) => CommunityUserGroupRolesCreateFormInputValues;
    onValidate?: CommunityUserGroupRolesCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommunityUserGroupRolesCreateForm(props: CommunityUserGroupRolesCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { CommunityUserGroupRoles } from "../API.ts";
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
export declare type CommunityUserGroupRolesUpdateFormInputValues = {
    userGroupRole?: string;
};
export declare type CommunityUserGroupRolesUpdateFormValidationValues = {
    userGroupRole?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunityUserGroupRolesUpdateFormOverridesProps = {
    CommunityUserGroupRolesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userGroupRole?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CommunityUserGroupRolesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommunityUserGroupRolesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    communityUserGroupRoles?: CommunityUserGroupRoles;
    onSubmit?: (fields: CommunityUserGroupRolesUpdateFormInputValues) => CommunityUserGroupRolesUpdateFormInputValues;
    onSuccess?: (fields: CommunityUserGroupRolesUpdateFormInputValues) => void;
    onError?: (fields: CommunityUserGroupRolesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunityUserGroupRolesUpdateFormInputValues) => CommunityUserGroupRolesUpdateFormInputValues;
    onValidate?: CommunityUserGroupRolesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommunityUserGroupRolesUpdateForm(props: CommunityUserGroupRolesUpdateFormProps): React.ReactElement;

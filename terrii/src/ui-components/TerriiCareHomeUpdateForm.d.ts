/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TerriiCareHome } from "../API.ts";
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
export declare type TerriiCareHomeUpdateFormInputValues = {
    name?: string;
    address?: string;
    city?: string;
    postCode?: string;
    phoneNumber?: string;
    email?: string;
    website?: string;
    communityMode?: string;
    allowFamilyPosts?: boolean;
    requireFamilyPostApproval?: boolean;
    allowPostReactions?: boolean;
    allowPostComments?: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export declare type TerriiCareHomeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    postCode?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    communityMode?: ValidationFunction<string>;
    allowFamilyPosts?: ValidationFunction<boolean>;
    requireFamilyPostApproval?: ValidationFunction<boolean>;
    allowPostReactions?: ValidationFunction<boolean>;
    allowPostComments?: ValidationFunction<boolean>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TerriiCareHomeUpdateFormOverridesProps = {
    TerriiCareHomeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    postCode?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    communityMode?: PrimitiveOverrideProps<SelectFieldProps>;
    allowFamilyPosts?: PrimitiveOverrideProps<SwitchFieldProps>;
    requireFamilyPostApproval?: PrimitiveOverrideProps<SwitchFieldProps>;
    allowPostReactions?: PrimitiveOverrideProps<SwitchFieldProps>;
    allowPostComments?: PrimitiveOverrideProps<SwitchFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TerriiCareHomeUpdateFormProps = React.PropsWithChildren<{
    overrides?: TerriiCareHomeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    terriiCareHome?: TerriiCareHome;
    onSubmit?: (fields: TerriiCareHomeUpdateFormInputValues) => TerriiCareHomeUpdateFormInputValues;
    onSuccess?: (fields: TerriiCareHomeUpdateFormInputValues) => void;
    onError?: (fields: TerriiCareHomeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TerriiCareHomeUpdateFormInputValues) => TerriiCareHomeUpdateFormInputValues;
    onValidate?: TerriiCareHomeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TerriiCareHomeUpdateForm(props: TerriiCareHomeUpdateFormProps): React.ReactElement;

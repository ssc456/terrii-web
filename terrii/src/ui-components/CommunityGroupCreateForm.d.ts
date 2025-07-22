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
export declare type CommunityGroupCreateFormInputValues = {
    name?: string;
    description?: string;
    imageS3Key?: string;
    headerS3Key?: string;
};
export declare type CommunityGroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageS3Key?: ValidationFunction<string>;
    headerS3Key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunityGroupCreateFormOverridesProps = {
    CommunityGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageS3Key?: PrimitiveOverrideProps<TextFieldProps>;
    headerS3Key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommunityGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: CommunityGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommunityGroupCreateFormInputValues) => CommunityGroupCreateFormInputValues;
    onSuccess?: (fields: CommunityGroupCreateFormInputValues) => void;
    onError?: (fields: CommunityGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunityGroupCreateFormInputValues) => CommunityGroupCreateFormInputValues;
    onValidate?: CommunityGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommunityGroupCreateForm(props: CommunityGroupCreateFormProps): React.ReactElement;

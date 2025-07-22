/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CommunityGroup } from "../API.ts";
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
export declare type CommunityGroupUpdateFormInputValues = {
    name?: string;
    description?: string;
    imageS3Key?: string;
    headerS3Key?: string;
};
export declare type CommunityGroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageS3Key?: ValidationFunction<string>;
    headerS3Key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunityGroupUpdateFormOverridesProps = {
    CommunityGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageS3Key?: PrimitiveOverrideProps<TextFieldProps>;
    headerS3Key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommunityGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommunityGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    communityGroup?: CommunityGroup;
    onSubmit?: (fields: CommunityGroupUpdateFormInputValues) => CommunityGroupUpdateFormInputValues;
    onSuccess?: (fields: CommunityGroupUpdateFormInputValues) => void;
    onError?: (fields: CommunityGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunityGroupUpdateFormInputValues) => CommunityGroupUpdateFormInputValues;
    onValidate?: CommunityGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommunityGroupUpdateForm(props: CommunityGroupUpdateFormProps): React.ReactElement;

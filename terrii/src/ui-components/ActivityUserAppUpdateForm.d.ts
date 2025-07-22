/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ActivityUserApp } from "../API.ts";
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
export declare type ActivityUserAppUpdateFormInputValues = {
    section?: string;
    page?: string;
    details?: string;
    userGUID?: string;
    userEmail?: string;
};
export declare type ActivityUserAppUpdateFormValidationValues = {
    section?: ValidationFunction<string>;
    page?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    userGUID?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityUserAppUpdateFormOverridesProps = {
    ActivityUserAppUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    section?: PrimitiveOverrideProps<TextFieldProps>;
    page?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    userGUID?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityUserAppUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActivityUserAppUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    activityUserApp?: ActivityUserApp;
    onSubmit?: (fields: ActivityUserAppUpdateFormInputValues) => ActivityUserAppUpdateFormInputValues;
    onSuccess?: (fields: ActivityUserAppUpdateFormInputValues) => void;
    onError?: (fields: ActivityUserAppUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityUserAppUpdateFormInputValues) => ActivityUserAppUpdateFormInputValues;
    onValidate?: ActivityUserAppUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityUserAppUpdateForm(props: ActivityUserAppUpdateFormProps): React.ReactElement;

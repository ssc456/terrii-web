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
export declare type ActivityUserAppCreateFormInputValues = {
    section?: string;
    page?: string;
    details?: string;
    userGUID?: string;
    userEmail?: string;
};
export declare type ActivityUserAppCreateFormValidationValues = {
    section?: ValidationFunction<string>;
    page?: ValidationFunction<string>;
    details?: ValidationFunction<string>;
    userGUID?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivityUserAppCreateFormOverridesProps = {
    ActivityUserAppCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    section?: PrimitiveOverrideProps<TextFieldProps>;
    page?: PrimitiveOverrideProps<TextFieldProps>;
    details?: PrimitiveOverrideProps<TextFieldProps>;
    userGUID?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActivityUserAppCreateFormProps = React.PropsWithChildren<{
    overrides?: ActivityUserAppCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActivityUserAppCreateFormInputValues) => ActivityUserAppCreateFormInputValues;
    onSuccess?: (fields: ActivityUserAppCreateFormInputValues) => void;
    onError?: (fields: ActivityUserAppCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActivityUserAppCreateFormInputValues) => ActivityUserAppCreateFormInputValues;
    onValidate?: ActivityUserAppCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActivityUserAppCreateForm(props: ActivityUserAppCreateFormProps): React.ReactElement;

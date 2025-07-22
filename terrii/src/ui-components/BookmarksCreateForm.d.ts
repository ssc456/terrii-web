/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
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
export declare type BookmarksCreateFormInputValues = {
    deleted?: boolean;
};
export declare type BookmarksCreateFormValidationValues = {
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookmarksCreateFormOverridesProps = {
    BookmarksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BookmarksCreateFormProps = React.PropsWithChildren<{
    overrides?: BookmarksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookmarksCreateFormInputValues) => BookmarksCreateFormInputValues;
    onSuccess?: (fields: BookmarksCreateFormInputValues) => void;
    onError?: (fields: BookmarksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookmarksCreateFormInputValues) => BookmarksCreateFormInputValues;
    onValidate?: BookmarksCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookmarksCreateForm(props: BookmarksCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { Bookmarks } from "../API.ts";
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
export declare type BookmarksUpdateFormInputValues = {
    deleted?: boolean;
};
export declare type BookmarksUpdateFormValidationValues = {
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookmarksUpdateFormOverridesProps = {
    BookmarksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BookmarksUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookmarksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bookmarks?: Bookmarks;
    onSubmit?: (fields: BookmarksUpdateFormInputValues) => BookmarksUpdateFormInputValues;
    onSuccess?: (fields: BookmarksUpdateFormInputValues) => void;
    onError?: (fields: BookmarksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookmarksUpdateFormInputValues) => BookmarksUpdateFormInputValues;
    onValidate?: BookmarksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookmarksUpdateForm(props: BookmarksUpdateFormProps): React.ReactElement;

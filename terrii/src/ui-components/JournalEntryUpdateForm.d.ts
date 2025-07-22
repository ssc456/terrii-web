/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { JournalEntry } from "../API.ts";
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
export declare type JournalEntryUpdateFormInputValues = {
    title?: string;
    content?: string;
    entryDatetime?: string;
    imageKey?: string;
    emotion?: string;
    tag?: string;
};
export declare type JournalEntryUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    entryDatetime?: ValidationFunction<string>;
    imageKey?: ValidationFunction<string>;
    emotion?: ValidationFunction<string>;
    tag?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JournalEntryUpdateFormOverridesProps = {
    JournalEntryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    entryDatetime?: PrimitiveOverrideProps<TextFieldProps>;
    imageKey?: PrimitiveOverrideProps<TextFieldProps>;
    emotion?: PrimitiveOverrideProps<TextFieldProps>;
    tag?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JournalEntryUpdateFormProps = React.PropsWithChildren<{
    overrides?: JournalEntryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    journalEntry?: JournalEntry;
    onSubmit?: (fields: JournalEntryUpdateFormInputValues) => JournalEntryUpdateFormInputValues;
    onSuccess?: (fields: JournalEntryUpdateFormInputValues) => void;
    onError?: (fields: JournalEntryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JournalEntryUpdateFormInputValues) => JournalEntryUpdateFormInputValues;
    onValidate?: JournalEntryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JournalEntryUpdateForm(props: JournalEntryUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CalendarItemTypeCreateFormInputValues = {
    name?: string;
    colour?: string;
    deleted?: boolean;
};
export declare type CalendarItemTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarItemTypeCreateFormOverridesProps = {
    CalendarItemTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    colour?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CalendarItemTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: CalendarItemTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CalendarItemTypeCreateFormInputValues) => CalendarItemTypeCreateFormInputValues;
    onSuccess?: (fields: CalendarItemTypeCreateFormInputValues) => void;
    onError?: (fields: CalendarItemTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarItemTypeCreateFormInputValues) => CalendarItemTypeCreateFormInputValues;
    onValidate?: CalendarItemTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarItemTypeCreateForm(props: CalendarItemTypeCreateFormProps): React.ReactElement;

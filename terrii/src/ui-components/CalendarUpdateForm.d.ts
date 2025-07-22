/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Calendar } from "../API.ts";
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
export declare type CalendarUpdateFormInputValues = {
    title?: string;
    description?: string;
    datetime?: string;
    location?: string;
    done?: boolean;
};
export declare type CalendarUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    datetime?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    done?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarUpdateFormOverridesProps = {
    CalendarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    datetime?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    done?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CalendarUpdateFormProps = React.PropsWithChildren<{
    overrides?: CalendarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    calendar?: Calendar;
    onSubmit?: (fields: CalendarUpdateFormInputValues) => CalendarUpdateFormInputValues;
    onSuccess?: (fields: CalendarUpdateFormInputValues) => void;
    onError?: (fields: CalendarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarUpdateFormInputValues) => CalendarUpdateFormInputValues;
    onValidate?: CalendarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarUpdateForm(props: CalendarUpdateFormProps): React.ReactElement;

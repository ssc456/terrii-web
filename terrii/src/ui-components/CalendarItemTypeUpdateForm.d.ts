/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CalendarItemType } from "../API.ts";
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
export declare type CalendarItemTypeUpdateFormInputValues = {
    name?: string;
    colour?: string;
    deleted?: boolean;
};
export declare type CalendarItemTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarItemTypeUpdateFormOverridesProps = {
    CalendarItemTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    colour?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CalendarItemTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: CalendarItemTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    calendarItemType?: CalendarItemType;
    onSubmit?: (fields: CalendarItemTypeUpdateFormInputValues) => CalendarItemTypeUpdateFormInputValues;
    onSuccess?: (fields: CalendarItemTypeUpdateFormInputValues) => void;
    onError?: (fields: CalendarItemTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarItemTypeUpdateFormInputValues) => CalendarItemTypeUpdateFormInputValues;
    onValidate?: CalendarItemTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarItemTypeUpdateForm(props: CalendarItemTypeUpdateFormProps): React.ReactElement;

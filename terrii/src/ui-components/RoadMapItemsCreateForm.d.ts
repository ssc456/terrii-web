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
export declare type RoadMapItemsCreateFormInputValues = {
    text?: string;
    description?: string;
};
export declare type RoadMapItemsCreateFormValidationValues = {
    text?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoadMapItemsCreateFormOverridesProps = {
    RoadMapItemsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoadMapItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: RoadMapItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoadMapItemsCreateFormInputValues) => RoadMapItemsCreateFormInputValues;
    onSuccess?: (fields: RoadMapItemsCreateFormInputValues) => void;
    onError?: (fields: RoadMapItemsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoadMapItemsCreateFormInputValues) => RoadMapItemsCreateFormInputValues;
    onValidate?: RoadMapItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoadMapItemsCreateForm(props: RoadMapItemsCreateFormProps): React.ReactElement;

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
export declare type CarePlanOutputsCreateFormInputValues = {
    carePlanJSON?: string;
    deleted?: boolean;
    carePlanName?: string;
};
export declare type CarePlanOutputsCreateFormValidationValues = {
    carePlanJSON?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
    carePlanName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarePlanOutputsCreateFormOverridesProps = {
    CarePlanOutputsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carePlanJSON?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    carePlanName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarePlanOutputsCreateFormProps = React.PropsWithChildren<{
    overrides?: CarePlanOutputsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarePlanOutputsCreateFormInputValues) => CarePlanOutputsCreateFormInputValues;
    onSuccess?: (fields: CarePlanOutputsCreateFormInputValues) => void;
    onError?: (fields: CarePlanOutputsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarePlanOutputsCreateFormInputValues) => CarePlanOutputsCreateFormInputValues;
    onValidate?: CarePlanOutputsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarePlanOutputsCreateForm(props: CarePlanOutputsCreateFormProps): React.ReactElement;

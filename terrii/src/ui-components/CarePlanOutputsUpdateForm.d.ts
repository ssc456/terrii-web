/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CarePlanOutputs } from "../API.ts";
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
export declare type CarePlanOutputsUpdateFormInputValues = {
    carePlanJSON?: string;
    deleted?: boolean;
    carePlanName?: string;
};
export declare type CarePlanOutputsUpdateFormValidationValues = {
    carePlanJSON?: ValidationFunction<string>;
    deleted?: ValidationFunction<boolean>;
    carePlanName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarePlanOutputsUpdateFormOverridesProps = {
    CarePlanOutputsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    carePlanJSON?: PrimitiveOverrideProps<TextFieldProps>;
    deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    carePlanName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarePlanOutputsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarePlanOutputsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    carePlanOutputs?: CarePlanOutputs;
    onSubmit?: (fields: CarePlanOutputsUpdateFormInputValues) => CarePlanOutputsUpdateFormInputValues;
    onSuccess?: (fields: CarePlanOutputsUpdateFormInputValues) => void;
    onError?: (fields: CarePlanOutputsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarePlanOutputsUpdateFormInputValues) => CarePlanOutputsUpdateFormInputValues;
    onValidate?: CarePlanOutputsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarePlanOutputsUpdateForm(props: CarePlanOutputsUpdateFormProps): React.ReactElement;

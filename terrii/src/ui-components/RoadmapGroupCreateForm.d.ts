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
export declare type RoadmapGroupCreateFormInputValues = {
    name?: string;
    description?: string;
    imageS3ObjectKey?: string;
};
export declare type RoadmapGroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageS3ObjectKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoadmapGroupCreateFormOverridesProps = {
    RoadmapGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageS3ObjectKey?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoadmapGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: RoadmapGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoadmapGroupCreateFormInputValues) => RoadmapGroupCreateFormInputValues;
    onSuccess?: (fields: RoadmapGroupCreateFormInputValues) => void;
    onError?: (fields: RoadmapGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoadmapGroupCreateFormInputValues) => RoadmapGroupCreateFormInputValues;
    onValidate?: RoadmapGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoadmapGroupCreateForm(props: RoadmapGroupCreateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RoadmapGroup } from "../API.ts";
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
export declare type RoadmapGroupUpdateFormInputValues = {
    name?: string;
    description?: string;
    imageS3ObjectKey?: string;
};
export declare type RoadmapGroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imageS3ObjectKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoadmapGroupUpdateFormOverridesProps = {
    RoadmapGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imageS3ObjectKey?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoadmapGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoadmapGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    roadmapGroup?: RoadmapGroup;
    onSubmit?: (fields: RoadmapGroupUpdateFormInputValues) => RoadmapGroupUpdateFormInputValues;
    onSuccess?: (fields: RoadmapGroupUpdateFormInputValues) => void;
    onError?: (fields: RoadmapGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoadmapGroupUpdateFormInputValues) => RoadmapGroupUpdateFormInputValues;
    onValidate?: RoadmapGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoadmapGroupUpdateForm(props: RoadmapGroupUpdateFormProps): React.ReactElement;

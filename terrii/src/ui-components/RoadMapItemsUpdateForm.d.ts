/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RoadMapItems } from "../API.ts";
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
export declare type RoadMapItemsUpdateFormInputValues = {
    text?: string;
    description?: string;
};
export declare type RoadMapItemsUpdateFormValidationValues = {
    text?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoadMapItemsUpdateFormOverridesProps = {
    RoadMapItemsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoadMapItemsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoadMapItemsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    roadMapItems?: RoadMapItems;
    onSubmit?: (fields: RoadMapItemsUpdateFormInputValues) => RoadMapItemsUpdateFormInputValues;
    onSuccess?: (fields: RoadMapItemsUpdateFormInputValues) => void;
    onError?: (fields: RoadMapItemsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoadMapItemsUpdateFormInputValues) => RoadMapItemsUpdateFormInputValues;
    onValidate?: RoadMapItemsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoadMapItemsUpdateForm(props: RoadMapItemsUpdateFormProps): React.ReactElement;

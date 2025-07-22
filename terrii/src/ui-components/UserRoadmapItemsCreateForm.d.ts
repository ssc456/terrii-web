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
export declare type UserRoadmapItemsCreateFormInputValues = {
    status?: string;
};
export declare type UserRoadmapItemsCreateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRoadmapItemsCreateFormOverridesProps = {
    UserRoadmapItemsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserRoadmapItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: UserRoadmapItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserRoadmapItemsCreateFormInputValues) => UserRoadmapItemsCreateFormInputValues;
    onSuccess?: (fields: UserRoadmapItemsCreateFormInputValues) => void;
    onError?: (fields: UserRoadmapItemsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserRoadmapItemsCreateFormInputValues) => UserRoadmapItemsCreateFormInputValues;
    onValidate?: UserRoadmapItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserRoadmapItemsCreateForm(props: UserRoadmapItemsCreateFormProps): React.ReactElement;

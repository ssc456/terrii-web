/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserRoadmapItems } from "../API.ts";
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
export declare type UserRoadmapItemsUpdateFormInputValues = {
    status?: string;
};
export declare type UserRoadmapItemsUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRoadmapItemsUpdateFormOverridesProps = {
    UserRoadmapItemsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserRoadmapItemsUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserRoadmapItemsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userRoadmapItems?: UserRoadmapItems;
    onSubmit?: (fields: UserRoadmapItemsUpdateFormInputValues) => UserRoadmapItemsUpdateFormInputValues;
    onSuccess?: (fields: UserRoadmapItemsUpdateFormInputValues) => void;
    onError?: (fields: UserRoadmapItemsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserRoadmapItemsUpdateFormInputValues) => UserRoadmapItemsUpdateFormInputValues;
    onValidate?: UserRoadmapItemsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserRoadmapItemsUpdateForm(props: UserRoadmapItemsUpdateFormProps): React.ReactElement;

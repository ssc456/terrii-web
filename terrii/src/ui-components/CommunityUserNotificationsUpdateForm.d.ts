/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { CommunityUserNotifications } from "../API.ts";
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
export declare type CommunityUserNotificationsUpdateFormInputValues = {
    NotificationType?: string;
    seen?: boolean;
};
export declare type CommunityUserNotificationsUpdateFormValidationValues = {
    NotificationType?: ValidationFunction<string>;
    seen?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommunityUserNotificationsUpdateFormOverridesProps = {
    CommunityUserNotificationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    NotificationType?: PrimitiveOverrideProps<SelectFieldProps>;
    seen?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CommunityUserNotificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommunityUserNotificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    communityUserNotifications?: CommunityUserNotifications;
    onSubmit?: (fields: CommunityUserNotificationsUpdateFormInputValues) => CommunityUserNotificationsUpdateFormInputValues;
    onSuccess?: (fields: CommunityUserNotificationsUpdateFormInputValues) => void;
    onError?: (fields: CommunityUserNotificationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommunityUserNotificationsUpdateFormInputValues) => CommunityUserNotificationsUpdateFormInputValues;
    onValidate?: CommunityUserNotificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommunityUserNotificationsUpdateForm(props: CommunityUserNotificationsUpdateFormProps): React.ReactElement;

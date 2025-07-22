/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CareHomes } from "../API.ts";
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
export declare type CareHomesUpdateFormInputValues = {
    LocationID?: string;
    Name?: string;
    CareHome?: string;
    Type?: string;
    Category?: string;
    Address1?: string;
    Address2?: string;
    City?: string;
    PostCode?: string;
    LocalAuthority?: string;
    Region?: string;
    ServiceGroup?: string;
    CQCURL?: string;
    ProviderID?: string;
    ProviderName?: string;
    RatingCaring?: string;
    RatingEffective?: string;
    RatingResponsive?: string;
    RatingSafe?: string;
    RatingWellLed?: string;
    RatingOverall?: string;
    NHSRegion?: string;
    ReportDate?: string;
    iRatingCaring?: number;
    iRatingEffective?: number;
    iRatingResponsive?: number;
    iRatingSafe?: number;
    iRatingWellLed?: number;
    iRatingOverall?: number;
};
export declare type CareHomesUpdateFormValidationValues = {
    LocationID?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    CareHome?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    Address1?: ValidationFunction<string>;
    Address2?: ValidationFunction<string>;
    City?: ValidationFunction<string>;
    PostCode?: ValidationFunction<string>;
    LocalAuthority?: ValidationFunction<string>;
    Region?: ValidationFunction<string>;
    ServiceGroup?: ValidationFunction<string>;
    CQCURL?: ValidationFunction<string>;
    ProviderID?: ValidationFunction<string>;
    ProviderName?: ValidationFunction<string>;
    RatingCaring?: ValidationFunction<string>;
    RatingEffective?: ValidationFunction<string>;
    RatingResponsive?: ValidationFunction<string>;
    RatingSafe?: ValidationFunction<string>;
    RatingWellLed?: ValidationFunction<string>;
    RatingOverall?: ValidationFunction<string>;
    NHSRegion?: ValidationFunction<string>;
    ReportDate?: ValidationFunction<string>;
    iRatingCaring?: ValidationFunction<number>;
    iRatingEffective?: ValidationFunction<number>;
    iRatingResponsive?: ValidationFunction<number>;
    iRatingSafe?: ValidationFunction<number>;
    iRatingWellLed?: ValidationFunction<number>;
    iRatingOverall?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CareHomesUpdateFormOverridesProps = {
    CareHomesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LocationID?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    CareHome?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
    Address1?: PrimitiveOverrideProps<TextFieldProps>;
    Address2?: PrimitiveOverrideProps<TextFieldProps>;
    City?: PrimitiveOverrideProps<TextFieldProps>;
    PostCode?: PrimitiveOverrideProps<TextFieldProps>;
    LocalAuthority?: PrimitiveOverrideProps<TextFieldProps>;
    Region?: PrimitiveOverrideProps<TextFieldProps>;
    ServiceGroup?: PrimitiveOverrideProps<TextFieldProps>;
    CQCURL?: PrimitiveOverrideProps<TextFieldProps>;
    ProviderID?: PrimitiveOverrideProps<TextFieldProps>;
    ProviderName?: PrimitiveOverrideProps<TextFieldProps>;
    RatingCaring?: PrimitiveOverrideProps<TextFieldProps>;
    RatingEffective?: PrimitiveOverrideProps<TextFieldProps>;
    RatingResponsive?: PrimitiveOverrideProps<TextFieldProps>;
    RatingSafe?: PrimitiveOverrideProps<TextFieldProps>;
    RatingWellLed?: PrimitiveOverrideProps<TextFieldProps>;
    RatingOverall?: PrimitiveOverrideProps<TextFieldProps>;
    NHSRegion?: PrimitiveOverrideProps<TextFieldProps>;
    ReportDate?: PrimitiveOverrideProps<TextFieldProps>;
    iRatingCaring?: PrimitiveOverrideProps<TextFieldProps>;
    iRatingEffective?: PrimitiveOverrideProps<TextFieldProps>;
    iRatingResponsive?: PrimitiveOverrideProps<TextFieldProps>;
    iRatingSafe?: PrimitiveOverrideProps<TextFieldProps>;
    iRatingWellLed?: PrimitiveOverrideProps<TextFieldProps>;
    iRatingOverall?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CareHomesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CareHomesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    careHomes?: CareHomes;
    onSubmit?: (fields: CareHomesUpdateFormInputValues) => CareHomesUpdateFormInputValues;
    onSuccess?: (fields: CareHomesUpdateFormInputValues) => void;
    onError?: (fields: CareHomesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CareHomesUpdateFormInputValues) => CareHomesUpdateFormInputValues;
    onValidate?: CareHomesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CareHomesUpdateForm(props: CareHomesUpdateFormProps): React.ReactElement;

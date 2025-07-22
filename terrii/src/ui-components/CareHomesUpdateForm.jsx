/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCareHomes } from "../graphql/queries";
import { updateCareHomes } from "../graphql/mutations";
const client = generateClient();
export default function CareHomesUpdateForm(props) {
  const {
    id: idProp,
    careHomes: careHomesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    LocationID: "",
    Name: "",
    CareHome: "",
    Type: "",
    Category: "",
    Address1: "",
    Address2: "",
    City: "",
    PostCode: "",
    LocalAuthority: "",
    Region: "",
    ServiceGroup: "",
    CQCURL: "",
    ProviderID: "",
    ProviderName: "",
    RatingCaring: "",
    RatingEffective: "",
    RatingResponsive: "",
    RatingSafe: "",
    RatingWellLed: "",
    RatingOverall: "",
    NHSRegion: "",
    ReportDate: "",
    iRatingCaring: "",
    iRatingEffective: "",
    iRatingResponsive: "",
    iRatingSafe: "",
    iRatingWellLed: "",
    iRatingOverall: "",
  };
  const [LocationID, setLocationID] = React.useState(initialValues.LocationID);
  const [Name, setName] = React.useState(initialValues.Name);
  const [CareHome, setCareHome] = React.useState(initialValues.CareHome);
  const [Type, setType] = React.useState(initialValues.Type);
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Address1, setAddress1] = React.useState(initialValues.Address1);
  const [Address2, setAddress2] = React.useState(initialValues.Address2);
  const [City, setCity] = React.useState(initialValues.City);
  const [PostCode, setPostCode] = React.useState(initialValues.PostCode);
  const [LocalAuthority, setLocalAuthority] = React.useState(
    initialValues.LocalAuthority
  );
  const [Region, setRegion] = React.useState(initialValues.Region);
  const [ServiceGroup, setServiceGroup] = React.useState(
    initialValues.ServiceGroup
  );
  const [CQCURL, setCQCURL] = React.useState(initialValues.CQCURL);
  const [ProviderID, setProviderID] = React.useState(initialValues.ProviderID);
  const [ProviderName, setProviderName] = React.useState(
    initialValues.ProviderName
  );
  const [RatingCaring, setRatingCaring] = React.useState(
    initialValues.RatingCaring
  );
  const [RatingEffective, setRatingEffective] = React.useState(
    initialValues.RatingEffective
  );
  const [RatingResponsive, setRatingResponsive] = React.useState(
    initialValues.RatingResponsive
  );
  const [RatingSafe, setRatingSafe] = React.useState(initialValues.RatingSafe);
  const [RatingWellLed, setRatingWellLed] = React.useState(
    initialValues.RatingWellLed
  );
  const [RatingOverall, setRatingOverall] = React.useState(
    initialValues.RatingOverall
  );
  const [NHSRegion, setNHSRegion] = React.useState(initialValues.NHSRegion);
  const [ReportDate, setReportDate] = React.useState(initialValues.ReportDate);
  const [iRatingCaring, setIRatingCaring] = React.useState(
    initialValues.iRatingCaring
  );
  const [iRatingEffective, setIRatingEffective] = React.useState(
    initialValues.iRatingEffective
  );
  const [iRatingResponsive, setIRatingResponsive] = React.useState(
    initialValues.iRatingResponsive
  );
  const [iRatingSafe, setIRatingSafe] = React.useState(
    initialValues.iRatingSafe
  );
  const [iRatingWellLed, setIRatingWellLed] = React.useState(
    initialValues.iRatingWellLed
  );
  const [iRatingOverall, setIRatingOverall] = React.useState(
    initialValues.iRatingOverall
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = careHomesRecord
      ? { ...initialValues, ...careHomesRecord }
      : initialValues;
    setLocationID(cleanValues.LocationID);
    setName(cleanValues.Name);
    setCareHome(cleanValues.CareHome);
    setType(cleanValues.Type);
    setCategory(cleanValues.Category);
    setAddress1(cleanValues.Address1);
    setAddress2(cleanValues.Address2);
    setCity(cleanValues.City);
    setPostCode(cleanValues.PostCode);
    setLocalAuthority(cleanValues.LocalAuthority);
    setRegion(cleanValues.Region);
    setServiceGroup(cleanValues.ServiceGroup);
    setCQCURL(cleanValues.CQCURL);
    setProviderID(cleanValues.ProviderID);
    setProviderName(cleanValues.ProviderName);
    setRatingCaring(cleanValues.RatingCaring);
    setRatingEffective(cleanValues.RatingEffective);
    setRatingResponsive(cleanValues.RatingResponsive);
    setRatingSafe(cleanValues.RatingSafe);
    setRatingWellLed(cleanValues.RatingWellLed);
    setRatingOverall(cleanValues.RatingOverall);
    setNHSRegion(cleanValues.NHSRegion);
    setReportDate(cleanValues.ReportDate);
    setIRatingCaring(cleanValues.iRatingCaring);
    setIRatingEffective(cleanValues.iRatingEffective);
    setIRatingResponsive(cleanValues.iRatingResponsive);
    setIRatingSafe(cleanValues.iRatingSafe);
    setIRatingWellLed(cleanValues.iRatingWellLed);
    setIRatingOverall(cleanValues.iRatingOverall);
    setErrors({});
  };
  const [careHomesRecord, setCareHomesRecord] =
    React.useState(careHomesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCareHomes.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCareHomes
        : careHomesModelProp;
      setCareHomesRecord(record);
    };
    queryData();
  }, [idProp, careHomesModelProp]);
  React.useEffect(resetStateValues, [careHomesRecord]);
  const validations = {
    LocationID: [],
    Name: [],
    CareHome: [],
    Type: [],
    Category: [],
    Address1: [],
    Address2: [],
    City: [],
    PostCode: [],
    LocalAuthority: [],
    Region: [],
    ServiceGroup: [],
    CQCURL: [],
    ProviderID: [],
    ProviderName: [],
    RatingCaring: [],
    RatingEffective: [],
    RatingResponsive: [],
    RatingSafe: [],
    RatingWellLed: [],
    RatingOverall: [],
    NHSRegion: [],
    ReportDate: [],
    iRatingCaring: [],
    iRatingEffective: [],
    iRatingResponsive: [],
    iRatingSafe: [],
    iRatingWellLed: [],
    iRatingOverall: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          LocationID: LocationID ?? null,
          Name: Name ?? null,
          CareHome: CareHome ?? null,
          Type: Type ?? null,
          Category: Category ?? null,
          Address1: Address1 ?? null,
          Address2: Address2 ?? null,
          City: City ?? null,
          PostCode: PostCode ?? null,
          LocalAuthority: LocalAuthority ?? null,
          Region: Region ?? null,
          ServiceGroup: ServiceGroup ?? null,
          CQCURL: CQCURL ?? null,
          ProviderID: ProviderID ?? null,
          ProviderName: ProviderName ?? null,
          RatingCaring: RatingCaring ?? null,
          RatingEffective: RatingEffective ?? null,
          RatingResponsive: RatingResponsive ?? null,
          RatingSafe: RatingSafe ?? null,
          RatingWellLed: RatingWellLed ?? null,
          RatingOverall: RatingOverall ?? null,
          NHSRegion: NHSRegion ?? null,
          ReportDate: ReportDate ?? null,
          iRatingCaring: iRatingCaring ?? null,
          iRatingEffective: iRatingEffective ?? null,
          iRatingResponsive: iRatingResponsive ?? null,
          iRatingSafe: iRatingSafe ?? null,
          iRatingWellLed: iRatingWellLed ?? null,
          iRatingOverall: iRatingOverall ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateCareHomes.replaceAll("__typename", ""),
            variables: {
              input: {
                id: careHomesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CareHomesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Location id"
        isRequired={false}
        isReadOnly={false}
        value={LocationID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID: value,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.LocationID ?? value;
          }
          if (errors.LocationID?.hasError) {
            runValidationTasks("LocationID", value);
          }
          setLocationID(value);
        }}
        onBlur={() => runValidationTasks("LocationID", LocationID)}
        errorMessage={errors.LocationID?.errorMessage}
        hasError={errors.LocationID?.hasError}
        {...getOverrideProps(overrides, "LocationID")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name: value,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Care home"
        isRequired={false}
        isReadOnly={false}
        value={CareHome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome: value,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.CareHome ?? value;
          }
          if (errors.CareHome?.hasError) {
            runValidationTasks("CareHome", value);
          }
          setCareHome(value);
        }}
        onBlur={() => runValidationTasks("CareHome", CareHome)}
        errorMessage={errors.CareHome?.errorMessage}
        hasError={errors.CareHome?.hasError}
        {...getOverrideProps(overrides, "CareHome")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type: value,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category: value,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      ></TextField>
      <TextField
        label="Address1"
        isRequired={false}
        isReadOnly={false}
        value={Address1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1: value,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.Address1 ?? value;
          }
          if (errors.Address1?.hasError) {
            runValidationTasks("Address1", value);
          }
          setAddress1(value);
        }}
        onBlur={() => runValidationTasks("Address1", Address1)}
        errorMessage={errors.Address1?.errorMessage}
        hasError={errors.Address1?.hasError}
        {...getOverrideProps(overrides, "Address1")}
      ></TextField>
      <TextField
        label="Address2"
        isRequired={false}
        isReadOnly={false}
        value={Address2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2: value,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.Address2 ?? value;
          }
          if (errors.Address2?.hasError) {
            runValidationTasks("Address2", value);
          }
          setAddress2(value);
        }}
        onBlur={() => runValidationTasks("Address2", Address2)}
        errorMessage={errors.Address2?.errorMessage}
        hasError={errors.Address2?.hasError}
        {...getOverrideProps(overrides, "Address2")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={City}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City: value,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.City ?? value;
          }
          if (errors.City?.hasError) {
            runValidationTasks("City", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("City", City)}
        errorMessage={errors.City?.errorMessage}
        hasError={errors.City?.hasError}
        {...getOverrideProps(overrides, "City")}
      ></TextField>
      <TextField
        label="Post code"
        isRequired={false}
        isReadOnly={false}
        value={PostCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode: value,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.PostCode ?? value;
          }
          if (errors.PostCode?.hasError) {
            runValidationTasks("PostCode", value);
          }
          setPostCode(value);
        }}
        onBlur={() => runValidationTasks("PostCode", PostCode)}
        errorMessage={errors.PostCode?.errorMessage}
        hasError={errors.PostCode?.hasError}
        {...getOverrideProps(overrides, "PostCode")}
      ></TextField>
      <TextField
        label="Local authority"
        isRequired={false}
        isReadOnly={false}
        value={LocalAuthority}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority: value,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.LocalAuthority ?? value;
          }
          if (errors.LocalAuthority?.hasError) {
            runValidationTasks("LocalAuthority", value);
          }
          setLocalAuthority(value);
        }}
        onBlur={() => runValidationTasks("LocalAuthority", LocalAuthority)}
        errorMessage={errors.LocalAuthority?.errorMessage}
        hasError={errors.LocalAuthority?.hasError}
        {...getOverrideProps(overrides, "LocalAuthority")}
      ></TextField>
      <TextField
        label="Region"
        isRequired={false}
        isReadOnly={false}
        value={Region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region: value,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.Region ?? value;
          }
          if (errors.Region?.hasError) {
            runValidationTasks("Region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("Region", Region)}
        errorMessage={errors.Region?.errorMessage}
        hasError={errors.Region?.hasError}
        {...getOverrideProps(overrides, "Region")}
      ></TextField>
      <TextField
        label="Service group"
        isRequired={false}
        isReadOnly={false}
        value={ServiceGroup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup: value,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.ServiceGroup ?? value;
          }
          if (errors.ServiceGroup?.hasError) {
            runValidationTasks("ServiceGroup", value);
          }
          setServiceGroup(value);
        }}
        onBlur={() => runValidationTasks("ServiceGroup", ServiceGroup)}
        errorMessage={errors.ServiceGroup?.errorMessage}
        hasError={errors.ServiceGroup?.hasError}
        {...getOverrideProps(overrides, "ServiceGroup")}
      ></TextField>
      <TextField
        label="Cqcurl"
        isRequired={false}
        isReadOnly={false}
        value={CQCURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL: value,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.CQCURL ?? value;
          }
          if (errors.CQCURL?.hasError) {
            runValidationTasks("CQCURL", value);
          }
          setCQCURL(value);
        }}
        onBlur={() => runValidationTasks("CQCURL", CQCURL)}
        errorMessage={errors.CQCURL?.errorMessage}
        hasError={errors.CQCURL?.hasError}
        {...getOverrideProps(overrides, "CQCURL")}
      ></TextField>
      <TextField
        label="Provider id"
        isRequired={false}
        isReadOnly={false}
        value={ProviderID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID: value,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.ProviderID ?? value;
          }
          if (errors.ProviderID?.hasError) {
            runValidationTasks("ProviderID", value);
          }
          setProviderID(value);
        }}
        onBlur={() => runValidationTasks("ProviderID", ProviderID)}
        errorMessage={errors.ProviderID?.errorMessage}
        hasError={errors.ProviderID?.hasError}
        {...getOverrideProps(overrides, "ProviderID")}
      ></TextField>
      <TextField
        label="Provider name"
        isRequired={false}
        isReadOnly={false}
        value={ProviderName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName: value,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.ProviderName ?? value;
          }
          if (errors.ProviderName?.hasError) {
            runValidationTasks("ProviderName", value);
          }
          setProviderName(value);
        }}
        onBlur={() => runValidationTasks("ProviderName", ProviderName)}
        errorMessage={errors.ProviderName?.errorMessage}
        hasError={errors.ProviderName?.hasError}
        {...getOverrideProps(overrides, "ProviderName")}
      ></TextField>
      <TextField
        label="Rating caring"
        isRequired={false}
        isReadOnly={false}
        value={RatingCaring}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring: value,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.RatingCaring ?? value;
          }
          if (errors.RatingCaring?.hasError) {
            runValidationTasks("RatingCaring", value);
          }
          setRatingCaring(value);
        }}
        onBlur={() => runValidationTasks("RatingCaring", RatingCaring)}
        errorMessage={errors.RatingCaring?.errorMessage}
        hasError={errors.RatingCaring?.hasError}
        {...getOverrideProps(overrides, "RatingCaring")}
      ></TextField>
      <TextField
        label="Rating effective"
        isRequired={false}
        isReadOnly={false}
        value={RatingEffective}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective: value,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.RatingEffective ?? value;
          }
          if (errors.RatingEffective?.hasError) {
            runValidationTasks("RatingEffective", value);
          }
          setRatingEffective(value);
        }}
        onBlur={() => runValidationTasks("RatingEffective", RatingEffective)}
        errorMessage={errors.RatingEffective?.errorMessage}
        hasError={errors.RatingEffective?.hasError}
        {...getOverrideProps(overrides, "RatingEffective")}
      ></TextField>
      <TextField
        label="Rating responsive"
        isRequired={false}
        isReadOnly={false}
        value={RatingResponsive}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive: value,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.RatingResponsive ?? value;
          }
          if (errors.RatingResponsive?.hasError) {
            runValidationTasks("RatingResponsive", value);
          }
          setRatingResponsive(value);
        }}
        onBlur={() => runValidationTasks("RatingResponsive", RatingResponsive)}
        errorMessage={errors.RatingResponsive?.errorMessage}
        hasError={errors.RatingResponsive?.hasError}
        {...getOverrideProps(overrides, "RatingResponsive")}
      ></TextField>
      <TextField
        label="Rating safe"
        isRequired={false}
        isReadOnly={false}
        value={RatingSafe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe: value,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.RatingSafe ?? value;
          }
          if (errors.RatingSafe?.hasError) {
            runValidationTasks("RatingSafe", value);
          }
          setRatingSafe(value);
        }}
        onBlur={() => runValidationTasks("RatingSafe", RatingSafe)}
        errorMessage={errors.RatingSafe?.errorMessage}
        hasError={errors.RatingSafe?.hasError}
        {...getOverrideProps(overrides, "RatingSafe")}
      ></TextField>
      <TextField
        label="Rating well led"
        isRequired={false}
        isReadOnly={false}
        value={RatingWellLed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed: value,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.RatingWellLed ?? value;
          }
          if (errors.RatingWellLed?.hasError) {
            runValidationTasks("RatingWellLed", value);
          }
          setRatingWellLed(value);
        }}
        onBlur={() => runValidationTasks("RatingWellLed", RatingWellLed)}
        errorMessage={errors.RatingWellLed?.errorMessage}
        hasError={errors.RatingWellLed?.hasError}
        {...getOverrideProps(overrides, "RatingWellLed")}
      ></TextField>
      <TextField
        label="Rating overall"
        isRequired={false}
        isReadOnly={false}
        value={RatingOverall}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall: value,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.RatingOverall ?? value;
          }
          if (errors.RatingOverall?.hasError) {
            runValidationTasks("RatingOverall", value);
          }
          setRatingOverall(value);
        }}
        onBlur={() => runValidationTasks("RatingOverall", RatingOverall)}
        errorMessage={errors.RatingOverall?.errorMessage}
        hasError={errors.RatingOverall?.hasError}
        {...getOverrideProps(overrides, "RatingOverall")}
      ></TextField>
      <TextField
        label="Nhs region"
        isRequired={false}
        isReadOnly={false}
        value={NHSRegion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion: value,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.NHSRegion ?? value;
          }
          if (errors.NHSRegion?.hasError) {
            runValidationTasks("NHSRegion", value);
          }
          setNHSRegion(value);
        }}
        onBlur={() => runValidationTasks("NHSRegion", NHSRegion)}
        errorMessage={errors.NHSRegion?.errorMessage}
        hasError={errors.NHSRegion?.hasError}
        {...getOverrideProps(overrides, "NHSRegion")}
      ></TextField>
      <TextField
        label="Report date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={ReportDate && convertToLocal(new Date(ReportDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate: value,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.ReportDate ?? value;
          }
          if (errors.ReportDate?.hasError) {
            runValidationTasks("ReportDate", value);
          }
          setReportDate(value);
        }}
        onBlur={() => runValidationTasks("ReportDate", ReportDate)}
        errorMessage={errors.ReportDate?.errorMessage}
        hasError={errors.ReportDate?.hasError}
        {...getOverrideProps(overrides, "ReportDate")}
      ></TextField>
      <TextField
        label="I rating caring"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={iRatingCaring}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring: value,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.iRatingCaring ?? value;
          }
          if (errors.iRatingCaring?.hasError) {
            runValidationTasks("iRatingCaring", value);
          }
          setIRatingCaring(value);
        }}
        onBlur={() => runValidationTasks("iRatingCaring", iRatingCaring)}
        errorMessage={errors.iRatingCaring?.errorMessage}
        hasError={errors.iRatingCaring?.hasError}
        {...getOverrideProps(overrides, "iRatingCaring")}
      ></TextField>
      <TextField
        label="I rating effective"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={iRatingEffective}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective: value,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.iRatingEffective ?? value;
          }
          if (errors.iRatingEffective?.hasError) {
            runValidationTasks("iRatingEffective", value);
          }
          setIRatingEffective(value);
        }}
        onBlur={() => runValidationTasks("iRatingEffective", iRatingEffective)}
        errorMessage={errors.iRatingEffective?.errorMessage}
        hasError={errors.iRatingEffective?.hasError}
        {...getOverrideProps(overrides, "iRatingEffective")}
      ></TextField>
      <TextField
        label="I rating responsive"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={iRatingResponsive}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive: value,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.iRatingResponsive ?? value;
          }
          if (errors.iRatingResponsive?.hasError) {
            runValidationTasks("iRatingResponsive", value);
          }
          setIRatingResponsive(value);
        }}
        onBlur={() =>
          runValidationTasks("iRatingResponsive", iRatingResponsive)
        }
        errorMessage={errors.iRatingResponsive?.errorMessage}
        hasError={errors.iRatingResponsive?.hasError}
        {...getOverrideProps(overrides, "iRatingResponsive")}
      ></TextField>
      <TextField
        label="I rating safe"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={iRatingSafe}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe: value,
              iRatingWellLed,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.iRatingSafe ?? value;
          }
          if (errors.iRatingSafe?.hasError) {
            runValidationTasks("iRatingSafe", value);
          }
          setIRatingSafe(value);
        }}
        onBlur={() => runValidationTasks("iRatingSafe", iRatingSafe)}
        errorMessage={errors.iRatingSafe?.errorMessage}
        hasError={errors.iRatingSafe?.hasError}
        {...getOverrideProps(overrides, "iRatingSafe")}
      ></TextField>
      <TextField
        label="I rating well led"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={iRatingWellLed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed: value,
              iRatingOverall,
            };
            const result = onChange(modelFields);
            value = result?.iRatingWellLed ?? value;
          }
          if (errors.iRatingWellLed?.hasError) {
            runValidationTasks("iRatingWellLed", value);
          }
          setIRatingWellLed(value);
        }}
        onBlur={() => runValidationTasks("iRatingWellLed", iRatingWellLed)}
        errorMessage={errors.iRatingWellLed?.errorMessage}
        hasError={errors.iRatingWellLed?.hasError}
        {...getOverrideProps(overrides, "iRatingWellLed")}
      ></TextField>
      <TextField
        label="I rating overall"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={iRatingOverall}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              LocationID,
              Name,
              CareHome,
              Type,
              Category,
              Address1,
              Address2,
              City,
              PostCode,
              LocalAuthority,
              Region,
              ServiceGroup,
              CQCURL,
              ProviderID,
              ProviderName,
              RatingCaring,
              RatingEffective,
              RatingResponsive,
              RatingSafe,
              RatingWellLed,
              RatingOverall,
              NHSRegion,
              ReportDate,
              iRatingCaring,
              iRatingEffective,
              iRatingResponsive,
              iRatingSafe,
              iRatingWellLed,
              iRatingOverall: value,
            };
            const result = onChange(modelFields);
            value = result?.iRatingOverall ?? value;
          }
          if (errors.iRatingOverall?.hasError) {
            runValidationTasks("iRatingOverall", value);
          }
          setIRatingOverall(value);
        }}
        onBlur={() => runValidationTasks("iRatingOverall", iRatingOverall)}
        errorMessage={errors.iRatingOverall?.errorMessage}
        hasError={errors.iRatingOverall?.hasError}
        {...getOverrideProps(overrides, "iRatingOverall")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || careHomesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || careHomesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

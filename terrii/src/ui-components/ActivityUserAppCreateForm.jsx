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
import { createActivityUserApp } from "../graphql/mutations";
const client = generateClient();
export default function ActivityUserAppCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    section: "",
    page: "",
    details: "",
    userGUID: "",
    userEmail: "",
  };
  const [section, setSection] = React.useState(initialValues.section);
  const [page, setPage] = React.useState(initialValues.page);
  const [details, setDetails] = React.useState(initialValues.details);
  const [userGUID, setUserGUID] = React.useState(initialValues.userGUID);
  const [userEmail, setUserEmail] = React.useState(initialValues.userEmail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSection(initialValues.section);
    setPage(initialValues.page);
    setDetails(initialValues.details);
    setUserGUID(initialValues.userGUID);
    setUserEmail(initialValues.userEmail);
    setErrors({});
  };
  const validations = {
    section: [],
    page: [],
    details: [],
    userGUID: [],
    userEmail: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          section,
          page,
          details,
          userGUID,
          userEmail,
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
            query: createActivityUserApp.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ActivityUserAppCreateForm")}
      {...rest}
    >
      <TextField
        label="Section"
        isRequired={false}
        isReadOnly={false}
        value={section}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              section: value,
              page,
              details,
              userGUID,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.section ?? value;
          }
          if (errors.section?.hasError) {
            runValidationTasks("section", value);
          }
          setSection(value);
        }}
        onBlur={() => runValidationTasks("section", section)}
        errorMessage={errors.section?.errorMessage}
        hasError={errors.section?.hasError}
        {...getOverrideProps(overrides, "section")}
      ></TextField>
      <TextField
        label="Page"
        isRequired={false}
        isReadOnly={false}
        value={page}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              section,
              page: value,
              details,
              userGUID,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.page ?? value;
          }
          if (errors.page?.hasError) {
            runValidationTasks("page", value);
          }
          setPage(value);
        }}
        onBlur={() => runValidationTasks("page", page)}
        errorMessage={errors.page?.errorMessage}
        hasError={errors.page?.hasError}
        {...getOverrideProps(overrides, "page")}
      ></TextField>
      <TextField
        label="Details"
        isRequired={false}
        isReadOnly={false}
        value={details}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              section,
              page,
              details: value,
              userGUID,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.details ?? value;
          }
          if (errors.details?.hasError) {
            runValidationTasks("details", value);
          }
          setDetails(value);
        }}
        onBlur={() => runValidationTasks("details", details)}
        errorMessage={errors.details?.errorMessage}
        hasError={errors.details?.hasError}
        {...getOverrideProps(overrides, "details")}
      ></TextField>
      <TextField
        label="User guid"
        isRequired={false}
        isReadOnly={false}
        value={userGUID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              section,
              page,
              details,
              userGUID: value,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.userGUID ?? value;
          }
          if (errors.userGUID?.hasError) {
            runValidationTasks("userGUID", value);
          }
          setUserGUID(value);
        }}
        onBlur={() => runValidationTasks("userGUID", userGUID)}
        errorMessage={errors.userGUID?.errorMessage}
        hasError={errors.userGUID?.hasError}
        {...getOverrideProps(overrides, "userGUID")}
      ></TextField>
      <TextField
        label="User email"
        isRequired={false}
        isReadOnly={false}
        value={userEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              section,
              page,
              details,
              userGUID,
              userEmail: value,
            };
            const result = onChange(modelFields);
            value = result?.userEmail ?? value;
          }
          if (errors.userEmail?.hasError) {
            runValidationTasks("userEmail", value);
          }
          setUserEmail(value);
        }}
        onBlur={() => runValidationTasks("userEmail", userEmail)}
        errorMessage={errors.userEmail?.errorMessage}
        hasError={errors.userEmail?.hasError}
        {...getOverrideProps(overrides, "userEmail")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

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
import { getManualNotifications } from "../graphql/queries";
import { updateManualNotifications } from "../graphql/mutations";
const client = generateClient();
export default function ManualNotificationsUpdateForm(props) {
  const {
    id: idProp,
    manualNotifications: manualNotificationsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    shortText: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [shortText, setShortText] = React.useState(initialValues.shortText);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = manualNotificationsRecord
      ? { ...initialValues, ...manualNotificationsRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setShortText(cleanValues.shortText);
    setErrors({});
  };
  const [manualNotificationsRecord, setManualNotificationsRecord] =
    React.useState(manualNotificationsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getManualNotifications.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getManualNotifications
        : manualNotificationsModelProp;
      setManualNotificationsRecord(record);
    };
    queryData();
  }, [idProp, manualNotificationsModelProp]);
  React.useEffect(resetStateValues, [manualNotificationsRecord]);
  const validations = {
    title: [],
    shortText: [],
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
          title: title ?? null,
          shortText: shortText ?? null,
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
            query: updateManualNotifications.replaceAll("__typename", ""),
            variables: {
              input: {
                id: manualNotificationsRecord.id,
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
      {...getOverrideProps(overrides, "ManualNotificationsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              shortText,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Short text"
        isRequired={false}
        isReadOnly={false}
        value={shortText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortText: value,
            };
            const result = onChange(modelFields);
            value = result?.shortText ?? value;
          }
          if (errors.shortText?.hasError) {
            runValidationTasks("shortText", value);
          }
          setShortText(value);
        }}
        onBlur={() => runValidationTasks("shortText", shortText)}
        errorMessage={errors.shortText?.errorMessage}
        hasError={errors.shortText?.hasError}
        {...getOverrideProps(overrides, "shortText")}
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
          isDisabled={!(idProp || manualNotificationsModelProp)}
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
              !(idProp || manualNotificationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

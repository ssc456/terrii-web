/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createExpoNotifications } from "../graphql/mutations";
const client = generateClient();
export default function ExpoNotificationsCreateForm(props) {
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
    title: "",
    description: "",
    seen: "",
    data: "",
    NotificationType: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [seen, setSeen] = React.useState(initialValues.seen);
  const [data, setData] = React.useState(initialValues.data);
  const [NotificationType, setNotificationType] = React.useState(
    initialValues.NotificationType
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setSeen(initialValues.seen);
    setData(initialValues.data);
    setNotificationType(initialValues.NotificationType);
    setErrors({});
  };
  const validations = {
    title: [],
    description: [],
    seen: [],
    data: [{ type: "JSON" }],
    NotificationType: [],
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
          title,
          description,
          seen,
          data,
          NotificationType,
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
            query: createExpoNotifications.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ExpoNotificationsCreateForm")}
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
              description,
              seen,
              data,
              NotificationType,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description: value,
              seen,
              data,
              NotificationType,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Seen"
        isRequired={false}
        isReadOnly={false}
        value={seen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              seen: value,
              data,
              NotificationType,
            };
            const result = onChange(modelFields);
            value = result?.seen ?? value;
          }
          if (errors.seen?.hasError) {
            runValidationTasks("seen", value);
          }
          setSeen(value);
        }}
        onBlur={() => runValidationTasks("seen", seen)}
        errorMessage={errors.seen?.errorMessage}
        hasError={errors.seen?.hasError}
        {...getOverrideProps(overrides, "seen")}
      ></TextField>
      <TextAreaField
        label="Data"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              seen,
              data: value,
              NotificationType,
            };
            const result = onChange(modelFields);
            value = result?.data ?? value;
          }
          if (errors.data?.hasError) {
            runValidationTasks("data", value);
          }
          setData(value);
        }}
        onBlur={() => runValidationTasks("data", data)}
        errorMessage={errors.data?.errorMessage}
        hasError={errors.data?.hasError}
        {...getOverrideProps(overrides, "data")}
      ></TextAreaField>
      <SelectField
        label="Notification type"
        placeholder="Please select an option"
        isDisabled={false}
        value={NotificationType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              description,
              seen,
              data,
              NotificationType: value,
            };
            const result = onChange(modelFields);
            value = result?.NotificationType ?? value;
          }
          if (errors.NotificationType?.hasError) {
            runValidationTasks("NotificationType", value);
          }
          setNotificationType(value);
        }}
        onBlur={() => runValidationTasks("NotificationType", NotificationType)}
        errorMessage={errors.NotificationType?.errorMessage}
        hasError={errors.NotificationType?.hasError}
        {...getOverrideProps(overrides, "NotificationType")}
      >
        <option
          children="Community like"
          value="COMMUNITY_LIKE"
          {...getOverrideProps(overrides, "NotificationTypeoption0")}
        ></option>
        <option
          children="Community comment"
          value="COMMUNITY_COMMENT"
          {...getOverrideProps(overrides, "NotificationTypeoption1")}
        ></option>
        <option
          children="Group invite"
          value="GROUP_INVITE"
          {...getOverrideProps(overrides, "NotificationTypeoption2")}
        ></option>
        <option
          children="Guidance article"
          value="GUIDANCE_ARTICLE"
          {...getOverrideProps(overrides, "NotificationTypeoption3")}
        ></option>
        <option
          children="Message"
          value="MESSAGE"
          {...getOverrideProps(overrides, "NotificationTypeoption4")}
        ></option>
        <option
          children="Manual"
          value="MANUAL"
          {...getOverrideProps(overrides, "NotificationTypeoption5")}
        ></option>
      </SelectField>
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

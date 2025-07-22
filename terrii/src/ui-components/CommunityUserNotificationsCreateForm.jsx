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
  SwitchField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCommunityUserNotifications } from "../graphql/mutations";
const client = generateClient();
export default function CommunityUserNotificationsCreateForm(props) {
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
    NotificationType: "",
    seen: false,
  };
  const [NotificationType, setNotificationType] = React.useState(
    initialValues.NotificationType
  );
  const [seen, setSeen] = React.useState(initialValues.seen);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNotificationType(initialValues.NotificationType);
    setSeen(initialValues.seen);
    setErrors({});
  };
  const validations = {
    NotificationType: [],
    seen: [],
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
          NotificationType,
          seen,
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
            query: createCommunityUserNotifications.replaceAll(
              "__typename",
              ""
            ),
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
      {...getOverrideProps(overrides, "CommunityUserNotificationsCreateForm")}
      {...rest}
    >
      <SelectField
        label="Notification type"
        placeholder="Please select an option"
        isDisabled={false}
        value={NotificationType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NotificationType: value,
              seen,
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
          children="Group invite"
          value="GROUP_INVITE"
          {...getOverrideProps(overrides, "NotificationTypeoption0")}
        ></option>
        <option
          children="Post like"
          value="POST_LIKE"
          {...getOverrideProps(overrides, "NotificationTypeoption1")}
        ></option>
        <option
          children="Post comment"
          value="POST_COMMENT"
          {...getOverrideProps(overrides, "NotificationTypeoption2")}
        ></option>
        <option
          children="Group post"
          value="GROUP_POST"
          {...getOverrideProps(overrides, "NotificationTypeoption3")}
        ></option>
      </SelectField>
      <SwitchField
        label="Seen"
        defaultChecked={false}
        isDisabled={false}
        isChecked={seen}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              NotificationType,
              seen: value,
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
      ></SwitchField>
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

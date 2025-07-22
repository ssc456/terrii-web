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
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";
const client = generateClient();
export default function UserCreateForm(props) {
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
    name: "",
    status: "",
    image: "",
    userType: "",
    deleted: false,
    firstName: "",
    lastName: "",
    mobileNo: "",
    headerImage: "",
    pwdName: "",
    expoNotificationToken: "",
    nativeNotificationToken: "",
    postRegistrationComplete: false,
    additionalInformationComplete: false,
    lastActivity: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [status, setStatus] = React.useState(initialValues.status);
  const [image, setImage] = React.useState(initialValues.image);
  const [userType, setUserType] = React.useState(initialValues.userType);
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [mobileNo, setMobileNo] = React.useState(initialValues.mobileNo);
  const [headerImage, setHeaderImage] = React.useState(
    initialValues.headerImage
  );
  const [pwdName, setPwdName] = React.useState(initialValues.pwdName);
  const [expoNotificationToken, setExpoNotificationToken] = React.useState(
    initialValues.expoNotificationToken
  );
  const [nativeNotificationToken, setNativeNotificationToken] = React.useState(
    initialValues.nativeNotificationToken
  );
  const [postRegistrationComplete, setPostRegistrationComplete] =
    React.useState(initialValues.postRegistrationComplete);
  const [additionalInformationComplete, setAdditionalInformationComplete] =
    React.useState(initialValues.additionalInformationComplete);
  const [lastActivity, setLastActivity] = React.useState(
    initialValues.lastActivity
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setStatus(initialValues.status);
    setImage(initialValues.image);
    setUserType(initialValues.userType);
    setDeleted(initialValues.deleted);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setMobileNo(initialValues.mobileNo);
    setHeaderImage(initialValues.headerImage);
    setPwdName(initialValues.pwdName);
    setExpoNotificationToken(initialValues.expoNotificationToken);
    setNativeNotificationToken(initialValues.nativeNotificationToken);
    setPostRegistrationComplete(initialValues.postRegistrationComplete);
    setAdditionalInformationComplete(
      initialValues.additionalInformationComplete
    );
    setLastActivity(initialValues.lastActivity);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    status: [],
    image: [],
    userType: [],
    deleted: [],
    firstName: [],
    lastName: [],
    mobileNo: [],
    headerImage: [],
    pwdName: [],
    expoNotificationToken: [],
    nativeNotificationToken: [],
    postRegistrationComplete: [],
    additionalInformationComplete: [],
    lastActivity: [],
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
          name,
          status,
          image,
          userType,
          deleted,
          firstName,
          lastName,
          mobileNo,
          headerImage,
          pwdName,
          expoNotificationToken,
          nativeNotificationToken,
          postRegistrationComplete,
          additionalInformationComplete,
          lastActivity,
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
            query: createUser.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status: value,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image: value,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <SelectField
        label="User type"
        placeholder="Please select an option"
        isDisabled={false}
        value={userType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType: value,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.userType ?? value;
          }
          if (errors.userType?.hasError) {
            runValidationTasks("userType", value);
          }
          setUserType(value);
        }}
        onBlur={() => runValidationTasks("userType", userType)}
        errorMessage={errors.userType?.errorMessage}
        hasError={errors.userType?.hasError}
        {...getOverrideProps(overrides, "userType")}
      >
        <option
          children="Acecura admin"
          value="ACECURA_ADMIN"
          {...getOverrideProps(overrides, "userTypeoption0")}
        ></option>
        <option
          children="App user"
          value="APP_USER"
          {...getOverrideProps(overrides, "userTypeoption1")}
        ></option>
        <option
          children="Terrii user"
          value="TERRII_USER"
          {...getOverrideProps(overrides, "userTypeoption2")}
        ></option>
      </SelectField>
      <SwitchField
        label="Deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={deleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted: value,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.deleted ?? value;
          }
          if (errors.deleted?.hasError) {
            runValidationTasks("deleted", value);
          }
          setDeleted(value);
        }}
        onBlur={() => runValidationTasks("deleted", deleted)}
        errorMessage={errors.deleted?.errorMessage}
        hasError={errors.deleted?.hasError}
        {...getOverrideProps(overrides, "deleted")}
      ></SwitchField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName: value,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName: value,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Mobile no"
        isRequired={false}
        isReadOnly={false}
        value={mobileNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo: value,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.mobileNo ?? value;
          }
          if (errors.mobileNo?.hasError) {
            runValidationTasks("mobileNo", value);
          }
          setMobileNo(value);
        }}
        onBlur={() => runValidationTasks("mobileNo", mobileNo)}
        errorMessage={errors.mobileNo?.errorMessage}
        hasError={errors.mobileNo?.hasError}
        {...getOverrideProps(overrides, "mobileNo")}
      ></TextField>
      <TextField
        label="Header image"
        isRequired={false}
        isReadOnly={false}
        value={headerImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage: value,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.headerImage ?? value;
          }
          if (errors.headerImage?.hasError) {
            runValidationTasks("headerImage", value);
          }
          setHeaderImage(value);
        }}
        onBlur={() => runValidationTasks("headerImage", headerImage)}
        errorMessage={errors.headerImage?.errorMessage}
        hasError={errors.headerImage?.hasError}
        {...getOverrideProps(overrides, "headerImage")}
      ></TextField>
      <TextField
        label="Pwd name"
        isRequired={false}
        isReadOnly={false}
        value={pwdName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName: value,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.pwdName ?? value;
          }
          if (errors.pwdName?.hasError) {
            runValidationTasks("pwdName", value);
          }
          setPwdName(value);
        }}
        onBlur={() => runValidationTasks("pwdName", pwdName)}
        errorMessage={errors.pwdName?.errorMessage}
        hasError={errors.pwdName?.hasError}
        {...getOverrideProps(overrides, "pwdName")}
      ></TextField>
      <TextField
        label="Expo notification token"
        isRequired={false}
        isReadOnly={false}
        value={expoNotificationToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken: value,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.expoNotificationToken ?? value;
          }
          if (errors.expoNotificationToken?.hasError) {
            runValidationTasks("expoNotificationToken", value);
          }
          setExpoNotificationToken(value);
        }}
        onBlur={() =>
          runValidationTasks("expoNotificationToken", expoNotificationToken)
        }
        errorMessage={errors.expoNotificationToken?.errorMessage}
        hasError={errors.expoNotificationToken?.hasError}
        {...getOverrideProps(overrides, "expoNotificationToken")}
      ></TextField>
      <TextField
        label="Native notification token"
        isRequired={false}
        isReadOnly={false}
        value={nativeNotificationToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken: value,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.nativeNotificationToken ?? value;
          }
          if (errors.nativeNotificationToken?.hasError) {
            runValidationTasks("nativeNotificationToken", value);
          }
          setNativeNotificationToken(value);
        }}
        onBlur={() =>
          runValidationTasks("nativeNotificationToken", nativeNotificationToken)
        }
        errorMessage={errors.nativeNotificationToken?.errorMessage}
        hasError={errors.nativeNotificationToken?.hasError}
        {...getOverrideProps(overrides, "nativeNotificationToken")}
      ></TextField>
      <SwitchField
        label="Post registration complete"
        defaultChecked={false}
        isDisabled={false}
        isChecked={postRegistrationComplete}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete: value,
              additionalInformationComplete,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.postRegistrationComplete ?? value;
          }
          if (errors.postRegistrationComplete?.hasError) {
            runValidationTasks("postRegistrationComplete", value);
          }
          setPostRegistrationComplete(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "postRegistrationComplete",
            postRegistrationComplete
          )
        }
        errorMessage={errors.postRegistrationComplete?.errorMessage}
        hasError={errors.postRegistrationComplete?.hasError}
        {...getOverrideProps(overrides, "postRegistrationComplete")}
      ></SwitchField>
      <SwitchField
        label="Additional information complete"
        defaultChecked={false}
        isDisabled={false}
        isChecked={additionalInformationComplete}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete: value,
              lastActivity,
            };
            const result = onChange(modelFields);
            value = result?.additionalInformationComplete ?? value;
          }
          if (errors.additionalInformationComplete?.hasError) {
            runValidationTasks("additionalInformationComplete", value);
          }
          setAdditionalInformationComplete(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "additionalInformationComplete",
            additionalInformationComplete
          )
        }
        errorMessage={errors.additionalInformationComplete?.errorMessage}
        hasError={errors.additionalInformationComplete?.hasError}
        {...getOverrideProps(overrides, "additionalInformationComplete")}
      ></SwitchField>
      <TextField
        label="Last activity"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={lastActivity && convertToLocal(new Date(lastActivity))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              status,
              image,
              userType,
              deleted,
              firstName,
              lastName,
              mobileNo,
              headerImage,
              pwdName,
              expoNotificationToken,
              nativeNotificationToken,
              postRegistrationComplete,
              additionalInformationComplete,
              lastActivity: value,
            };
            const result = onChange(modelFields);
            value = result?.lastActivity ?? value;
          }
          if (errors.lastActivity?.hasError) {
            runValidationTasks("lastActivity", value);
          }
          setLastActivity(value);
        }}
        onBlur={() => runValidationTasks("lastActivity", lastActivity)}
        errorMessage={errors.lastActivity?.errorMessage}
        hasError={errors.lastActivity?.hasError}
        {...getOverrideProps(overrides, "lastActivity")}
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

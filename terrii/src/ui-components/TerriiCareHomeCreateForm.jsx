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
import { createTerriiCareHome } from "../graphql/mutations";
const client = generateClient();
export default function TerriiCareHomeCreateForm(props) {
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
    address: "",
    city: "",
    postCode: "",
    phoneNumber: "",
    email: "",
    website: "",
    communityMode: "",
    allowFamilyPosts: false,
    requireFamilyPostApproval: false,
    allowPostReactions: false,
    allowPostComments: false,
    createdAt: "",
    updatedAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [postCode, setPostCode] = React.useState(initialValues.postCode);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [communityMode, setCommunityMode] = React.useState(
    initialValues.communityMode
  );
  const [allowFamilyPosts, setAllowFamilyPosts] = React.useState(
    initialValues.allowFamilyPosts
  );
  const [requireFamilyPostApproval, setRequireFamilyPostApproval] =
    React.useState(initialValues.requireFamilyPostApproval);
  const [allowPostReactions, setAllowPostReactions] = React.useState(
    initialValues.allowPostReactions
  );
  const [allowPostComments, setAllowPostComments] = React.useState(
    initialValues.allowPostComments
  );
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setPostCode(initialValues.postCode);
    setPhoneNumber(initialValues.phoneNumber);
    setEmail(initialValues.email);
    setWebsite(initialValues.website);
    setCommunityMode(initialValues.communityMode);
    setAllowFamilyPosts(initialValues.allowFamilyPosts);
    setRequireFamilyPostApproval(initialValues.requireFamilyPostApproval);
    setAllowPostReactions(initialValues.allowPostReactions);
    setAllowPostComments(initialValues.allowPostComments);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    address: [],
    city: [],
    postCode: [],
    phoneNumber: [],
    email: [],
    website: [],
    communityMode: [],
    allowFamilyPosts: [],
    requireFamilyPostApproval: [],
    allowPostReactions: [],
    allowPostComments: [],
    createdAt: [],
    updatedAt: [],
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
          address,
          city,
          postCode,
          phoneNumber,
          email,
          website,
          communityMode,
          allowFamilyPosts,
          requireFamilyPostApproval,
          allowPostReactions,
          allowPostComments,
          createdAt,
          updatedAt,
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
            query: createTerriiCareHome.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TerriiCareHomeCreateForm")}
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
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
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
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address: value,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city: value,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Post code"
        isRequired={false}
        isReadOnly={false}
        value={postCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode: value,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.postCode ?? value;
          }
          if (errors.postCode?.hasError) {
            runValidationTasks("postCode", value);
          }
          setPostCode(value);
        }}
        onBlur={() => runValidationTasks("postCode", postCode)}
        errorMessage={errors.postCode?.errorMessage}
        hasError={errors.postCode?.hasError}
        {...getOverrideProps(overrides, "postCode")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber: value,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email: value,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website: value,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <SelectField
        label="Community mode"
        placeholder="Please select an option"
        isDisabled={false}
        value={communityMode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode: value,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.communityMode ?? value;
          }
          if (errors.communityMode?.hasError) {
            runValidationTasks("communityMode", value);
          }
          setCommunityMode(value);
        }}
        onBlur={() => runValidationTasks("communityMode", communityMode)}
        errorMessage={errors.communityMode?.errorMessage}
        hasError={errors.communityMode?.hasError}
        {...getOverrideProps(overrides, "communityMode")}
      >
        <option
          children="Notice board"
          value="NOTICE_BOARD"
          {...getOverrideProps(overrides, "communityModeoption0")}
        ></option>
        <option
          children="Two way"
          value="TWO_WAY"
          {...getOverrideProps(overrides, "communityModeoption1")}
        ></option>
      </SelectField>
      <SwitchField
        label="Allow family posts"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allowFamilyPosts}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts: value,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.allowFamilyPosts ?? value;
          }
          if (errors.allowFamilyPosts?.hasError) {
            runValidationTasks("allowFamilyPosts", value);
          }
          setAllowFamilyPosts(value);
        }}
        onBlur={() => runValidationTasks("allowFamilyPosts", allowFamilyPosts)}
        errorMessage={errors.allowFamilyPosts?.errorMessage}
        hasError={errors.allowFamilyPosts?.hasError}
        {...getOverrideProps(overrides, "allowFamilyPosts")}
      ></SwitchField>
      <SwitchField
        label="Require family post approval"
        defaultChecked={false}
        isDisabled={false}
        isChecked={requireFamilyPostApproval}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval: value,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.requireFamilyPostApproval ?? value;
          }
          if (errors.requireFamilyPostApproval?.hasError) {
            runValidationTasks("requireFamilyPostApproval", value);
          }
          setRequireFamilyPostApproval(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "requireFamilyPostApproval",
            requireFamilyPostApproval
          )
        }
        errorMessage={errors.requireFamilyPostApproval?.errorMessage}
        hasError={errors.requireFamilyPostApproval?.hasError}
        {...getOverrideProps(overrides, "requireFamilyPostApproval")}
      ></SwitchField>
      <SwitchField
        label="Allow post reactions"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allowPostReactions}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions: value,
              allowPostComments,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.allowPostReactions ?? value;
          }
          if (errors.allowPostReactions?.hasError) {
            runValidationTasks("allowPostReactions", value);
          }
          setAllowPostReactions(value);
        }}
        onBlur={() =>
          runValidationTasks("allowPostReactions", allowPostReactions)
        }
        errorMessage={errors.allowPostReactions?.errorMessage}
        hasError={errors.allowPostReactions?.hasError}
        {...getOverrideProps(overrides, "allowPostReactions")}
      ></SwitchField>
      <SwitchField
        label="Allow post comments"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allowPostComments}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.allowPostComments ?? value;
          }
          if (errors.allowPostComments?.hasError) {
            runValidationTasks("allowPostComments", value);
          }
          setAllowPostComments(value);
        }}
        onBlur={() =>
          runValidationTasks("allowPostComments", allowPostComments)
        }
        errorMessage={errors.allowPostComments?.errorMessage}
        hasError={errors.allowPostComments?.hasError}
        {...getOverrideProps(overrides, "allowPostComments")}
      ></SwitchField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              address,
              city,
              postCode,
              phoneNumber,
              email,
              website,
              communityMode,
              allowFamilyPosts,
              requireFamilyPostApproval,
              allowPostReactions,
              allowPostComments,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
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

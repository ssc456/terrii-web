/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCommunityUserGroupRoles } from "../graphql/queries";
import { updateCommunityUserGroupRoles } from "../graphql/mutations";
const client = generateClient();
export default function CommunityUserGroupRolesUpdateForm(props) {
  const {
    id: idProp,
    communityUserGroupRoles: communityUserGroupRolesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userGroupRole: "",
  };
  const [userGroupRole, setUserGroupRole] = React.useState(
    initialValues.userGroupRole
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = communityUserGroupRolesRecord
      ? { ...initialValues, ...communityUserGroupRolesRecord }
      : initialValues;
    setUserGroupRole(cleanValues.userGroupRole);
    setErrors({});
  };
  const [communityUserGroupRolesRecord, setCommunityUserGroupRolesRecord] =
    React.useState(communityUserGroupRolesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCommunityUserGroupRoles.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCommunityUserGroupRoles
        : communityUserGroupRolesModelProp;
      setCommunityUserGroupRolesRecord(record);
    };
    queryData();
  }, [idProp, communityUserGroupRolesModelProp]);
  React.useEffect(resetStateValues, [communityUserGroupRolesRecord]);
  const validations = {
    userGroupRole: [],
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
          userGroupRole: userGroupRole ?? null,
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
            query: updateCommunityUserGroupRoles.replaceAll("__typename", ""),
            variables: {
              input: {
                id: communityUserGroupRolesRecord.id,
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
      {...getOverrideProps(overrides, "CommunityUserGroupRolesUpdateForm")}
      {...rest}
    >
      <SelectField
        label="User group role"
        placeholder="Please select an option"
        isDisabled={false}
        value={userGroupRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userGroupRole: value,
            };
            const result = onChange(modelFields);
            value = result?.userGroupRole ?? value;
          }
          if (errors.userGroupRole?.hasError) {
            runValidationTasks("userGroupRole", value);
          }
          setUserGroupRole(value);
        }}
        onBlur={() => runValidationTasks("userGroupRole", userGroupRole)}
        errorMessage={errors.userGroupRole?.errorMessage}
        hasError={errors.userGroupRole?.hasError}
        {...getOverrideProps(overrides, "userGroupRole")}
      >
        <option
          children="User"
          value="USER"
          {...getOverrideProps(overrides, "userGroupRoleoption0")}
        ></option>
        <option
          children="Guest"
          value="GUEST"
          {...getOverrideProps(overrides, "userGroupRoleoption1")}
        ></option>
        <option
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "userGroupRoleoption2")}
        ></option>
        <option
          children="Owner"
          value="OWNER"
          {...getOverrideProps(overrides, "userGroupRoleoption3")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || communityUserGroupRolesModelProp)}
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
              !(idProp || communityUserGroupRolesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

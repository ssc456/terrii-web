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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getGuidanceTypes } from "../graphql/queries";
import { updateGuidanceTypes } from "../graphql/mutations";
const client = generateClient();
export default function GuidanceTypesUpdateForm(props) {
  const {
    id: idProp,
    guidanceTypes: guidanceTypesModelProp,
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
    description: "",
    colour: "",
    deleted: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [colour, setColour] = React.useState(initialValues.colour);
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = guidanceTypesRecord
      ? { ...initialValues, ...guidanceTypesRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setColour(cleanValues.colour);
    setDeleted(cleanValues.deleted);
    setErrors({});
  };
  const [guidanceTypesRecord, setGuidanceTypesRecord] = React.useState(
    guidanceTypesModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGuidanceTypes.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGuidanceTypes
        : guidanceTypesModelProp;
      setGuidanceTypesRecord(record);
    };
    queryData();
  }, [idProp, guidanceTypesModelProp]);
  React.useEffect(resetStateValues, [guidanceTypesRecord]);
  const validations = {
    name: [],
    description: [],
    colour: [],
    deleted: [],
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
          name: name ?? null,
          description: description ?? null,
          colour: colour ?? null,
          deleted: deleted ?? null,
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
            query: updateGuidanceTypes.replaceAll("__typename", ""),
            variables: {
              input: {
                id: guidanceTypesRecord.id,
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
      {...getOverrideProps(overrides, "GuidanceTypesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              colour,
              deleted,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              colour,
              deleted,
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
        label="Colour"
        isRequired={false}
        isReadOnly={false}
        value={colour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              colour: value,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.colour ?? value;
          }
          if (errors.colour?.hasError) {
            runValidationTasks("colour", value);
          }
          setColour(value);
        }}
        onBlur={() => runValidationTasks("colour", colour)}
        errorMessage={errors.colour?.errorMessage}
        hasError={errors.colour?.hasError}
        {...getOverrideProps(overrides, "colour")}
      ></TextField>
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
              description,
              colour,
              deleted: value,
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
          isDisabled={!(idProp || guidanceTypesModelProp)}
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
              !(idProp || guidanceTypesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

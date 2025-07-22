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
import { getQuestionGroup } from "../graphql/queries";
import { updateQuestionGroup } from "../graphql/mutations";
const client = generateClient();
export default function QuestionGroupUpdateForm(props) {
  const {
    id: idProp,
    questionGroup: questionGroupModelProp,
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
    imageS3ObjectKey: "",
    deleted: false,
    type: "",
    status: "",
    groupLevel: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [imageS3ObjectKey, setImageS3ObjectKey] = React.useState(
    initialValues.imageS3ObjectKey
  );
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [type, setType] = React.useState(initialValues.type);
  const [status, setStatus] = React.useState(initialValues.status);
  const [groupLevel, setGroupLevel] = React.useState(initialValues.groupLevel);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionGroupRecord
      ? { ...initialValues, ...questionGroupRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setImageS3ObjectKey(cleanValues.imageS3ObjectKey);
    setDeleted(cleanValues.deleted);
    setType(cleanValues.type);
    setStatus(cleanValues.status);
    setGroupLevel(cleanValues.groupLevel);
    setErrors({});
  };
  const [questionGroupRecord, setQuestionGroupRecord] = React.useState(
    questionGroupModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getQuestionGroup.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQuestionGroup
        : questionGroupModelProp;
      setQuestionGroupRecord(record);
    };
    queryData();
  }, [idProp, questionGroupModelProp]);
  React.useEffect(resetStateValues, [questionGroupRecord]);
  const validations = {
    name: [],
    description: [],
    imageS3ObjectKey: [],
    deleted: [],
    type: [],
    status: [],
    groupLevel: [],
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
          imageS3ObjectKey: imageS3ObjectKey ?? null,
          deleted: deleted ?? null,
          type: type ?? null,
          status: status ?? null,
          groupLevel: groupLevel ?? null,
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
            query: updateQuestionGroup.replaceAll("__typename", ""),
            variables: {
              input: {
                id: questionGroupRecord.id,
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
      {...getOverrideProps(overrides, "QuestionGroupUpdateForm")}
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
              imageS3ObjectKey,
              deleted,
              type,
              status,
              groupLevel,
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
              imageS3ObjectKey,
              deleted,
              type,
              status,
              groupLevel,
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
        label="Image s3 object key"
        isRequired={false}
        isReadOnly={false}
        value={imageS3ObjectKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              imageS3ObjectKey: value,
              deleted,
              type,
              status,
              groupLevel,
            };
            const result = onChange(modelFields);
            value = result?.imageS3ObjectKey ?? value;
          }
          if (errors.imageS3ObjectKey?.hasError) {
            runValidationTasks("imageS3ObjectKey", value);
          }
          setImageS3ObjectKey(value);
        }}
        onBlur={() => runValidationTasks("imageS3ObjectKey", imageS3ObjectKey)}
        errorMessage={errors.imageS3ObjectKey?.errorMessage}
        hasError={errors.imageS3ObjectKey?.hasError}
        {...getOverrideProps(overrides, "imageS3ObjectKey")}
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
              imageS3ObjectKey,
              deleted: value,
              type,
              status,
              groupLevel,
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
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              imageS3ObjectKey,
              deleted,
              type: value,
              status,
              groupLevel,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Roadmap"
          value="ROADMAP"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="General"
          value="GENERAL"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              imageS3ObjectKey,
              deleted,
              type,
              status: value,
              groupLevel,
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
      >
        <option
          children="Draft"
          value="DRAFT"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Published"
          value="PUBLISHED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Testing"
          value="TESTING"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Scheduled"
          value="SCHEDULED"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Group level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={groupLevel}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              imageS3ObjectKey,
              deleted,
              type,
              status,
              groupLevel: value,
            };
            const result = onChange(modelFields);
            value = result?.groupLevel ?? value;
          }
          if (errors.groupLevel?.hasError) {
            runValidationTasks("groupLevel", value);
          }
          setGroupLevel(value);
        }}
        onBlur={() => runValidationTasks("groupLevel", groupLevel)}
        errorMessage={errors.groupLevel?.errorMessage}
        hasError={errors.groupLevel?.hasError}
        {...getOverrideProps(overrides, "groupLevel")}
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
          isDisabled={!(idProp || questionGroupModelProp)}
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
              !(idProp || questionGroupModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

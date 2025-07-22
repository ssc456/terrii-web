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
import { getQuestionGroupTypes } from "../graphql/queries";
import { updateQuestionGroupTypes } from "../graphql/mutations";
const client = generateClient();
export default function QuestionGroupTypesUpdateForm(props) {
  const {
    id: idProp,
    questionGroupTypes: questionGroupTypesModelProp,
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
    iconS3URL: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [iconS3URL, setIconS3URL] = React.useState(initialValues.iconS3URL);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionGroupTypesRecord
      ? { ...initialValues, ...questionGroupTypesRecord }
      : initialValues;
    setName(cleanValues.name);
    setIconS3URL(cleanValues.iconS3URL);
    setErrors({});
  };
  const [questionGroupTypesRecord, setQuestionGroupTypesRecord] =
    React.useState(questionGroupTypesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getQuestionGroupTypes.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQuestionGroupTypes
        : questionGroupTypesModelProp;
      setQuestionGroupTypesRecord(record);
    };
    queryData();
  }, [idProp, questionGroupTypesModelProp]);
  React.useEffect(resetStateValues, [questionGroupTypesRecord]);
  const validations = {
    name: [],
    iconS3URL: [],
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
          iconS3URL: iconS3URL ?? null,
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
            query: updateQuestionGroupTypes.replaceAll("__typename", ""),
            variables: {
              input: {
                id: questionGroupTypesRecord.id,
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
      {...getOverrideProps(overrides, "QuestionGroupTypesUpdateForm")}
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
              iconS3URL,
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
        label="Icon s3 url"
        isRequired={false}
        isReadOnly={false}
        value={iconS3URL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              iconS3URL: value,
            };
            const result = onChange(modelFields);
            value = result?.iconS3URL ?? value;
          }
          if (errors.iconS3URL?.hasError) {
            runValidationTasks("iconS3URL", value);
          }
          setIconS3URL(value);
        }}
        onBlur={() => runValidationTasks("iconS3URL", iconS3URL)}
        errorMessage={errors.iconS3URL?.errorMessage}
        hasError={errors.iconS3URL?.hasError}
        {...getOverrideProps(overrides, "iconS3URL")}
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
          isDisabled={!(idProp || questionGroupTypesModelProp)}
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
              !(idProp || questionGroupTypesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

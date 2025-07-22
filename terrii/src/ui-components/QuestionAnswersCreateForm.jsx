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
import { createQuestionAnswers } from "../graphql/mutations";
const client = generateClient();
export default function QuestionAnswersCreateForm(props) {
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
    answer: "",
    helpText: "",
    nextQuestionID: "",
    deleted: false,
  };
  const [answer, setAnswer] = React.useState(initialValues.answer);
  const [helpText, setHelpText] = React.useState(initialValues.helpText);
  const [nextQuestionID, setNextQuestionID] = React.useState(
    initialValues.nextQuestionID
  );
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAnswer(initialValues.answer);
    setHelpText(initialValues.helpText);
    setNextQuestionID(initialValues.nextQuestionID);
    setDeleted(initialValues.deleted);
    setErrors({});
  };
  const validations = {
    answer: [],
    helpText: [],
    nextQuestionID: [],
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
          answer,
          helpText,
          nextQuestionID,
          deleted,
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
            query: createQuestionAnswers.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "QuestionAnswersCreateForm")}
      {...rest}
    >
      <TextField
        label="Answer"
        isRequired={false}
        isReadOnly={false}
        value={answer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              answer: value,
              helpText,
              nextQuestionID,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.answer ?? value;
          }
          if (errors.answer?.hasError) {
            runValidationTasks("answer", value);
          }
          setAnswer(value);
        }}
        onBlur={() => runValidationTasks("answer", answer)}
        errorMessage={errors.answer?.errorMessage}
        hasError={errors.answer?.hasError}
        {...getOverrideProps(overrides, "answer")}
      ></TextField>
      <TextField
        label="Help text"
        isRequired={false}
        isReadOnly={false}
        value={helpText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              answer,
              helpText: value,
              nextQuestionID,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.helpText ?? value;
          }
          if (errors.helpText?.hasError) {
            runValidationTasks("helpText", value);
          }
          setHelpText(value);
        }}
        onBlur={() => runValidationTasks("helpText", helpText)}
        errorMessage={errors.helpText?.errorMessage}
        hasError={errors.helpText?.hasError}
        {...getOverrideProps(overrides, "helpText")}
      ></TextField>
      <TextField
        label="Next question id"
        isRequired={false}
        isReadOnly={false}
        value={nextQuestionID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              answer,
              helpText,
              nextQuestionID: value,
              deleted,
            };
            const result = onChange(modelFields);
            value = result?.nextQuestionID ?? value;
          }
          if (errors.nextQuestionID?.hasError) {
            runValidationTasks("nextQuestionID", value);
          }
          setNextQuestionID(value);
        }}
        onBlur={() => runValidationTasks("nextQuestionID", nextQuestionID)}
        errorMessage={errors.nextQuestionID?.errorMessage}
        hasError={errors.nextQuestionID?.hasError}
        {...getOverrideProps(overrides, "nextQuestionID")}
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
              answer,
              helpText,
              nextQuestionID,
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

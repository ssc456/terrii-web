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
import { getQuestionAnswersUsers } from "../graphql/queries";
import { updateQuestionAnswersUsers } from "../graphql/mutations";
const client = generateClient();
export default function QuestionAnswersUsersUpdateForm(props) {
  const {
    id: idProp,
    questionAnswersUsers: questionAnswersUsersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    freeText: "",
    complete: false,
  };
  const [freeText, setFreeText] = React.useState(initialValues.freeText);
  const [complete, setComplete] = React.useState(initialValues.complete);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionAnswersUsersRecord
      ? { ...initialValues, ...questionAnswersUsersRecord }
      : initialValues;
    setFreeText(cleanValues.freeText);
    setComplete(cleanValues.complete);
    setErrors({});
  };
  const [questionAnswersUsersRecord, setQuestionAnswersUsersRecord] =
    React.useState(questionAnswersUsersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getQuestionAnswersUsers.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQuestionAnswersUsers
        : questionAnswersUsersModelProp;
      setQuestionAnswersUsersRecord(record);
    };
    queryData();
  }, [idProp, questionAnswersUsersModelProp]);
  React.useEffect(resetStateValues, [questionAnswersUsersRecord]);
  const validations = {
    freeText: [],
    complete: [],
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
          freeText: freeText ?? null,
          complete: complete ?? null,
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
            query: updateQuestionAnswersUsers.replaceAll("__typename", ""),
            variables: {
              input: {
                id: questionAnswersUsersRecord.id,
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
      {...getOverrideProps(overrides, "QuestionAnswersUsersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Free text"
        isRequired={false}
        isReadOnly={false}
        value={freeText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              freeText: value,
              complete,
            };
            const result = onChange(modelFields);
            value = result?.freeText ?? value;
          }
          if (errors.freeText?.hasError) {
            runValidationTasks("freeText", value);
          }
          setFreeText(value);
        }}
        onBlur={() => runValidationTasks("freeText", freeText)}
        errorMessage={errors.freeText?.errorMessage}
        hasError={errors.freeText?.hasError}
        {...getOverrideProps(overrides, "freeText")}
      ></TextField>
      <SwitchField
        label="Complete"
        defaultChecked={false}
        isDisabled={false}
        isChecked={complete}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              freeText,
              complete: value,
            };
            const result = onChange(modelFields);
            value = result?.complete ?? value;
          }
          if (errors.complete?.hasError) {
            runValidationTasks("complete", value);
          }
          setComplete(value);
        }}
        onBlur={() => runValidationTasks("complete", complete)}
        errorMessage={errors.complete?.errorMessage}
        hasError={errors.complete?.hasError}
        {...getOverrideProps(overrides, "complete")}
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
          isDisabled={!(idProp || questionAnswersUsersModelProp)}
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
              !(idProp || questionAnswersUsersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

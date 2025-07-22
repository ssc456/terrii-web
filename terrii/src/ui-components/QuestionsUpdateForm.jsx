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
import { getQuestions } from "../graphql/queries";
import { updateQuestions } from "../graphql/mutations";
const client = generateClient();
export default function QuestionsUpdateForm(props) {
  const {
    id: idProp,
    questions: questionsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    question: "",
    helpText: "",
    deleted: false,
    isFirstQuestion: false,
    questionNumber: "",
  };
  const [question, setQuestion] = React.useState(initialValues.question);
  const [helpText, setHelpText] = React.useState(initialValues.helpText);
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [isFirstQuestion, setIsFirstQuestion] = React.useState(
    initialValues.isFirstQuestion
  );
  const [questionNumber, setQuestionNumber] = React.useState(
    initialValues.questionNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionsRecord
      ? { ...initialValues, ...questionsRecord }
      : initialValues;
    setQuestion(cleanValues.question);
    setHelpText(cleanValues.helpText);
    setDeleted(cleanValues.deleted);
    setIsFirstQuestion(cleanValues.isFirstQuestion);
    setQuestionNumber(cleanValues.questionNumber);
    setErrors({});
  };
  const [questionsRecord, setQuestionsRecord] =
    React.useState(questionsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getQuestions.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getQuestions
        : questionsModelProp;
      setQuestionsRecord(record);
    };
    queryData();
  }, [idProp, questionsModelProp]);
  React.useEffect(resetStateValues, [questionsRecord]);
  const validations = {
    question: [],
    helpText: [],
    deleted: [],
    isFirstQuestion: [],
    questionNumber: [],
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
          question: question ?? null,
          helpText: helpText ?? null,
          deleted: deleted ?? null,
          isFirstQuestion: isFirstQuestion ?? null,
          questionNumber: questionNumber ?? null,
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
            query: updateQuestions.replaceAll("__typename", ""),
            variables: {
              input: {
                id: questionsRecord.id,
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
      {...getOverrideProps(overrides, "QuestionsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Question"
        isRequired={false}
        isReadOnly={false}
        value={question}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question: value,
              helpText,
              deleted,
              isFirstQuestion,
              questionNumber,
            };
            const result = onChange(modelFields);
            value = result?.question ?? value;
          }
          if (errors.question?.hasError) {
            runValidationTasks("question", value);
          }
          setQuestion(value);
        }}
        onBlur={() => runValidationTasks("question", question)}
        errorMessage={errors.question?.errorMessage}
        hasError={errors.question?.hasError}
        {...getOverrideProps(overrides, "question")}
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
              question,
              helpText: value,
              deleted,
              isFirstQuestion,
              questionNumber,
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
      <SwitchField
        label="Deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={deleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              question,
              helpText,
              deleted: value,
              isFirstQuestion,
              questionNumber,
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
      <SwitchField
        label="Is first question"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFirstQuestion}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              question,
              helpText,
              deleted,
              isFirstQuestion: value,
              questionNumber,
            };
            const result = onChange(modelFields);
            value = result?.isFirstQuestion ?? value;
          }
          if (errors.isFirstQuestion?.hasError) {
            runValidationTasks("isFirstQuestion", value);
          }
          setIsFirstQuestion(value);
        }}
        onBlur={() => runValidationTasks("isFirstQuestion", isFirstQuestion)}
        errorMessage={errors.isFirstQuestion?.errorMessage}
        hasError={errors.isFirstQuestion?.hasError}
        {...getOverrideProps(overrides, "isFirstQuestion")}
      ></SwitchField>
      <TextField
        label="Question number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={questionNumber}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              question,
              helpText,
              deleted,
              isFirstQuestion,
              questionNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.questionNumber ?? value;
          }
          if (errors.questionNumber?.hasError) {
            runValidationTasks("questionNumber", value);
          }
          setQuestionNumber(value);
        }}
        onBlur={() => runValidationTasks("questionNumber", questionNumber)}
        errorMessage={errors.questionNumber?.errorMessage}
        hasError={errors.questionNumber?.hasError}
        {...getOverrideProps(overrides, "questionNumber")}
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
          isDisabled={!(idProp || questionsModelProp)}
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
              !(idProp || questionsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

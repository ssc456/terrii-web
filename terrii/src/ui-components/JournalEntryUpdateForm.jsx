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
import { getJournalEntry } from "../graphql/queries";
import { updateJournalEntry } from "../graphql/mutations";
const client = generateClient();
export default function JournalEntryUpdateForm(props) {
  const {
    id: idProp,
    journalEntry: journalEntryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    content: "",
    entryDatetime: "",
    imageKey: "",
    emotion: "",
    tag: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [entryDatetime, setEntryDatetime] = React.useState(
    initialValues.entryDatetime
  );
  const [imageKey, setImageKey] = React.useState(initialValues.imageKey);
  const [emotion, setEmotion] = React.useState(initialValues.emotion);
  const [tag, setTag] = React.useState(initialValues.tag);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = journalEntryRecord
      ? { ...initialValues, ...journalEntryRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setContent(cleanValues.content);
    setEntryDatetime(cleanValues.entryDatetime);
    setImageKey(cleanValues.imageKey);
    setEmotion(cleanValues.emotion);
    setTag(cleanValues.tag);
    setErrors({});
  };
  const [journalEntryRecord, setJournalEntryRecord] = React.useState(
    journalEntryModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getJournalEntry.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getJournalEntry
        : journalEntryModelProp;
      setJournalEntryRecord(record);
    };
    queryData();
  }, [idProp, journalEntryModelProp]);
  React.useEffect(resetStateValues, [journalEntryRecord]);
  const validations = {
    title: [],
    content: [],
    entryDatetime: [],
    imageKey: [],
    emotion: [],
    tag: [],
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
          title: title ?? null,
          content: content ?? null,
          entryDatetime: entryDatetime ?? null,
          imageKey: imageKey ?? null,
          emotion: emotion ?? null,
          tag: tag ?? null,
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
            query: updateJournalEntry.replaceAll("__typename", ""),
            variables: {
              input: {
                id: journalEntryRecord.id,
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
      {...getOverrideProps(overrides, "JournalEntryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              content,
              entryDatetime,
              imageKey,
              emotion,
              tag,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content: value,
              entryDatetime,
              imageKey,
              emotion,
              tag,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Entry datetime"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={entryDatetime && convertToLocal(new Date(entryDatetime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              content,
              entryDatetime: value,
              imageKey,
              emotion,
              tag,
            };
            const result = onChange(modelFields);
            value = result?.entryDatetime ?? value;
          }
          if (errors.entryDatetime?.hasError) {
            runValidationTasks("entryDatetime", value);
          }
          setEntryDatetime(value);
        }}
        onBlur={() => runValidationTasks("entryDatetime", entryDatetime)}
        errorMessage={errors.entryDatetime?.errorMessage}
        hasError={errors.entryDatetime?.hasError}
        {...getOverrideProps(overrides, "entryDatetime")}
      ></TextField>
      <TextField
        label="Image key"
        isRequired={false}
        isReadOnly={false}
        value={imageKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              entryDatetime,
              imageKey: value,
              emotion,
              tag,
            };
            const result = onChange(modelFields);
            value = result?.imageKey ?? value;
          }
          if (errors.imageKey?.hasError) {
            runValidationTasks("imageKey", value);
          }
          setImageKey(value);
        }}
        onBlur={() => runValidationTasks("imageKey", imageKey)}
        errorMessage={errors.imageKey?.errorMessage}
        hasError={errors.imageKey?.hasError}
        {...getOverrideProps(overrides, "imageKey")}
      ></TextField>
      <TextField
        label="Emotion"
        isRequired={false}
        isReadOnly={false}
        value={emotion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              entryDatetime,
              imageKey,
              emotion: value,
              tag,
            };
            const result = onChange(modelFields);
            value = result?.emotion ?? value;
          }
          if (errors.emotion?.hasError) {
            runValidationTasks("emotion", value);
          }
          setEmotion(value);
        }}
        onBlur={() => runValidationTasks("emotion", emotion)}
        errorMessage={errors.emotion?.errorMessage}
        hasError={errors.emotion?.hasError}
        {...getOverrideProps(overrides, "emotion")}
      ></TextField>
      <TextField
        label="Tag"
        isRequired={false}
        isReadOnly={false}
        value={tag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content,
              entryDatetime,
              imageKey,
              emotion,
              tag: value,
            };
            const result = onChange(modelFields);
            value = result?.tag ?? value;
          }
          if (errors.tag?.hasError) {
            runValidationTasks("tag", value);
          }
          setTag(value);
        }}
        onBlur={() => runValidationTasks("tag", tag)}
        errorMessage={errors.tag?.errorMessage}
        hasError={errors.tag?.hasError}
        {...getOverrideProps(overrides, "tag")}
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
          isDisabled={!(idProp || journalEntryModelProp)}
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
              !(idProp || journalEntryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

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
import { getMyChats } from "../graphql/queries";
import { updateMyChats } from "../graphql/mutations";
const client = generateClient();
export default function MyChatsUpdateForm(props) {
  const {
    id: idProp,
    myChats: myChatsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    unreadMessages: false,
    lastMessageDateTime: "",
    lastMessage: "",
    chatName: "",
    chatImageS3URL: "",
  };
  const [unreadMessages, setUnreadMessages] = React.useState(
    initialValues.unreadMessages
  );
  const [lastMessageDateTime, setLastMessageDateTime] = React.useState(
    initialValues.lastMessageDateTime
  );
  const [lastMessage, setLastMessage] = React.useState(
    initialValues.lastMessage
  );
  const [chatName, setChatName] = React.useState(initialValues.chatName);
  const [chatImageS3URL, setChatImageS3URL] = React.useState(
    initialValues.chatImageS3URL
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = myChatsRecord
      ? { ...initialValues, ...myChatsRecord }
      : initialValues;
    setUnreadMessages(cleanValues.unreadMessages);
    setLastMessageDateTime(cleanValues.lastMessageDateTime);
    setLastMessage(cleanValues.lastMessage);
    setChatName(cleanValues.chatName);
    setChatImageS3URL(cleanValues.chatImageS3URL);
    setErrors({});
  };
  const [myChatsRecord, setMyChatsRecord] = React.useState(myChatsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMyChats.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMyChats
        : myChatsModelProp;
      setMyChatsRecord(record);
    };
    queryData();
  }, [idProp, myChatsModelProp]);
  React.useEffect(resetStateValues, [myChatsRecord]);
  const validations = {
    unreadMessages: [],
    lastMessageDateTime: [],
    lastMessage: [],
    chatName: [],
    chatImageS3URL: [],
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
          unreadMessages: unreadMessages ?? null,
          lastMessageDateTime: lastMessageDateTime ?? null,
          lastMessage: lastMessage ?? null,
          chatName: chatName ?? null,
          chatImageS3URL: chatImageS3URL ?? null,
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
            query: updateMyChats.replaceAll("__typename", ""),
            variables: {
              input: {
                id: myChatsRecord.id,
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
      {...getOverrideProps(overrides, "MyChatsUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Unread messages"
        defaultChecked={false}
        isDisabled={false}
        isChecked={unreadMessages}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              unreadMessages: value,
              lastMessageDateTime,
              lastMessage,
              chatName,
              chatImageS3URL,
            };
            const result = onChange(modelFields);
            value = result?.unreadMessages ?? value;
          }
          if (errors.unreadMessages?.hasError) {
            runValidationTasks("unreadMessages", value);
          }
          setUnreadMessages(value);
        }}
        onBlur={() => runValidationTasks("unreadMessages", unreadMessages)}
        errorMessage={errors.unreadMessages?.errorMessage}
        hasError={errors.unreadMessages?.hasError}
        {...getOverrideProps(overrides, "unreadMessages")}
      ></SwitchField>
      <TextField
        label="Last message date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          lastMessageDateTime && convertToLocal(new Date(lastMessageDateTime))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              unreadMessages,
              lastMessageDateTime: value,
              lastMessage,
              chatName,
              chatImageS3URL,
            };
            const result = onChange(modelFields);
            value = result?.lastMessageDateTime ?? value;
          }
          if (errors.lastMessageDateTime?.hasError) {
            runValidationTasks("lastMessageDateTime", value);
          }
          setLastMessageDateTime(value);
        }}
        onBlur={() =>
          runValidationTasks("lastMessageDateTime", lastMessageDateTime)
        }
        errorMessage={errors.lastMessageDateTime?.errorMessage}
        hasError={errors.lastMessageDateTime?.hasError}
        {...getOverrideProps(overrides, "lastMessageDateTime")}
      ></TextField>
      <TextField
        label="Last message"
        isRequired={false}
        isReadOnly={false}
        value={lastMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unreadMessages,
              lastMessageDateTime,
              lastMessage: value,
              chatName,
              chatImageS3URL,
            };
            const result = onChange(modelFields);
            value = result?.lastMessage ?? value;
          }
          if (errors.lastMessage?.hasError) {
            runValidationTasks("lastMessage", value);
          }
          setLastMessage(value);
        }}
        onBlur={() => runValidationTasks("lastMessage", lastMessage)}
        errorMessage={errors.lastMessage?.errorMessage}
        hasError={errors.lastMessage?.hasError}
        {...getOverrideProps(overrides, "lastMessage")}
      ></TextField>
      <TextField
        label="Chat name"
        isRequired={false}
        isReadOnly={false}
        value={chatName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unreadMessages,
              lastMessageDateTime,
              lastMessage,
              chatName: value,
              chatImageS3URL,
            };
            const result = onChange(modelFields);
            value = result?.chatName ?? value;
          }
          if (errors.chatName?.hasError) {
            runValidationTasks("chatName", value);
          }
          setChatName(value);
        }}
        onBlur={() => runValidationTasks("chatName", chatName)}
        errorMessage={errors.chatName?.errorMessage}
        hasError={errors.chatName?.hasError}
        {...getOverrideProps(overrides, "chatName")}
      ></TextField>
      <TextField
        label="Chat image s3 url"
        isRequired={false}
        isReadOnly={false}
        value={chatImageS3URL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unreadMessages,
              lastMessageDateTime,
              lastMessage,
              chatName,
              chatImageS3URL: value,
            };
            const result = onChange(modelFields);
            value = result?.chatImageS3URL ?? value;
          }
          if (errors.chatImageS3URL?.hasError) {
            runValidationTasks("chatImageS3URL", value);
          }
          setChatImageS3URL(value);
        }}
        onBlur={() => runValidationTasks("chatImageS3URL", chatImageS3URL)}
        errorMessage={errors.chatImageS3URL?.errorMessage}
        hasError={errors.chatImageS3URL?.hasError}
        {...getOverrideProps(overrides, "chatImageS3URL")}
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
          isDisabled={!(idProp || myChatsModelProp)}
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
              !(idProp || myChatsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

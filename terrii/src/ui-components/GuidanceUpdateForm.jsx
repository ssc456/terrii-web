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
import { getGuidance } from "../graphql/queries";
import { updateGuidance } from "../graphql/mutations";
const client = generateClient();
export default function GuidanceUpdateForm(props) {
  const {
    id: idProp,
    guidance: guidanceModelProp,
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
    shortDesc: "",
    longDesc: "",
    thumbURL: "",
    date: "",
    time: "",
    estTime: "",
    deleted: false,
    location: "",
    author: "",
    S3ObjectKey: "",
    status: "",
    active: false,
    lowerCaseTitle: "",
    lowerCaseShortDesc: "",
    scheduleDateTime: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [shortDesc, setShortDesc] = React.useState(initialValues.shortDesc);
  const [longDesc, setLongDesc] = React.useState(initialValues.longDesc);
  const [thumbURL, setThumbURL] = React.useState(initialValues.thumbURL);
  const [date, setDate] = React.useState(initialValues.date);
  const [time, setTime] = React.useState(initialValues.time);
  const [estTime, setEstTime] = React.useState(initialValues.estTime);
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [location, setLocation] = React.useState(initialValues.location);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [S3ObjectKey, setS3ObjectKey] = React.useState(
    initialValues.S3ObjectKey
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [active, setActive] = React.useState(initialValues.active);
  const [lowerCaseTitle, setLowerCaseTitle] = React.useState(
    initialValues.lowerCaseTitle
  );
  const [lowerCaseShortDesc, setLowerCaseShortDesc] = React.useState(
    initialValues.lowerCaseShortDesc
  );
  const [scheduleDateTime, setScheduleDateTime] = React.useState(
    initialValues.scheduleDateTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = guidanceRecord
      ? { ...initialValues, ...guidanceRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setShortDesc(cleanValues.shortDesc);
    setLongDesc(cleanValues.longDesc);
    setThumbURL(cleanValues.thumbURL);
    setDate(cleanValues.date);
    setTime(cleanValues.time);
    setEstTime(cleanValues.estTime);
    setDeleted(cleanValues.deleted);
    setLocation(cleanValues.location);
    setAuthor(cleanValues.author);
    setS3ObjectKey(cleanValues.S3ObjectKey);
    setStatus(cleanValues.status);
    setActive(cleanValues.active);
    setLowerCaseTitle(cleanValues.lowerCaseTitle);
    setLowerCaseShortDesc(cleanValues.lowerCaseShortDesc);
    setScheduleDateTime(cleanValues.scheduleDateTime);
    setErrors({});
  };
  const [guidanceRecord, setGuidanceRecord] = React.useState(guidanceModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGuidance.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGuidance
        : guidanceModelProp;
      setGuidanceRecord(record);
    };
    queryData();
  }, [idProp, guidanceModelProp]);
  React.useEffect(resetStateValues, [guidanceRecord]);
  const validations = {
    title: [],
    shortDesc: [],
    longDesc: [],
    thumbURL: [{ type: "URL" }],
    date: [],
    time: [],
    estTime: [],
    deleted: [],
    location: [],
    author: [],
    S3ObjectKey: [],
    status: [],
    active: [],
    lowerCaseTitle: [],
    lowerCaseShortDesc: [],
    scheduleDateTime: [],
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
          shortDesc: shortDesc ?? null,
          longDesc: longDesc ?? null,
          thumbURL: thumbURL ?? null,
          date: date ?? null,
          time: time ?? null,
          estTime: estTime ?? null,
          deleted: deleted ?? null,
          location: location ?? null,
          author: author ?? null,
          S3ObjectKey: S3ObjectKey ?? null,
          status: status ?? null,
          active: active ?? null,
          lowerCaseTitle: lowerCaseTitle ?? null,
          lowerCaseShortDesc: lowerCaseShortDesc ?? null,
          scheduleDateTime: scheduleDateTime ?? null,
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
            query: updateGuidance.replaceAll("__typename", ""),
            variables: {
              input: {
                id: guidanceRecord.id,
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
      {...getOverrideProps(overrides, "GuidanceUpdateForm")}
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
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
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
        label="Short desc"
        isRequired={false}
        isReadOnly={false}
        value={shortDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc: value,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.shortDesc ?? value;
          }
          if (errors.shortDesc?.hasError) {
            runValidationTasks("shortDesc", value);
          }
          setShortDesc(value);
        }}
        onBlur={() => runValidationTasks("shortDesc", shortDesc)}
        errorMessage={errors.shortDesc?.errorMessage}
        hasError={errors.shortDesc?.hasError}
        {...getOverrideProps(overrides, "shortDesc")}
      ></TextField>
      <TextField
        label="Long desc"
        isRequired={false}
        isReadOnly={false}
        value={longDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc: value,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.longDesc ?? value;
          }
          if (errors.longDesc?.hasError) {
            runValidationTasks("longDesc", value);
          }
          setLongDesc(value);
        }}
        onBlur={() => runValidationTasks("longDesc", longDesc)}
        errorMessage={errors.longDesc?.errorMessage}
        hasError={errors.longDesc?.hasError}
        {...getOverrideProps(overrides, "longDesc")}
      ></TextField>
      <TextField
        label="Thumb url"
        isRequired={false}
        isReadOnly={false}
        value={thumbURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL: value,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.thumbURL ?? value;
          }
          if (errors.thumbURL?.hasError) {
            runValidationTasks("thumbURL", value);
          }
          setThumbURL(value);
        }}
        onBlur={() => runValidationTasks("thumbURL", thumbURL)}
        errorMessage={errors.thumbURL?.errorMessage}
        hasError={errors.thumbURL?.hasError}
        {...getOverrideProps(overrides, "thumbURL")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date: value,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time: value,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <TextField
        label="Est time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={estTime}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime: value,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.estTime ?? value;
          }
          if (errors.estTime?.hasError) {
            runValidationTasks("estTime", value);
          }
          setEstTime(value);
        }}
        onBlur={() => runValidationTasks("estTime", estTime)}
        errorMessage={errors.estTime?.errorMessage}
        hasError={errors.estTime?.hasError}
        {...getOverrideProps(overrides, "estTime")}
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
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted: value,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
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
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location: value,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author: value,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <TextField
        label="S3 object key"
        isRequired={false}
        isReadOnly={false}
        value={S3ObjectKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey: value,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.S3ObjectKey ?? value;
          }
          if (errors.S3ObjectKey?.hasError) {
            runValidationTasks("S3ObjectKey", value);
          }
          setS3ObjectKey(value);
        }}
        onBlur={() => runValidationTasks("S3ObjectKey", S3ObjectKey)}
        errorMessage={errors.S3ObjectKey?.errorMessage}
        hasError={errors.S3ObjectKey?.hasError}
        {...getOverrideProps(overrides, "S3ObjectKey")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status: value,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
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
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active: value,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <TextField
        label="Lower case title"
        isRequired={false}
        isReadOnly={false}
        value={lowerCaseTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle: value,
              lowerCaseShortDesc,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.lowerCaseTitle ?? value;
          }
          if (errors.lowerCaseTitle?.hasError) {
            runValidationTasks("lowerCaseTitle", value);
          }
          setLowerCaseTitle(value);
        }}
        onBlur={() => runValidationTasks("lowerCaseTitle", lowerCaseTitle)}
        errorMessage={errors.lowerCaseTitle?.errorMessage}
        hasError={errors.lowerCaseTitle?.hasError}
        {...getOverrideProps(overrides, "lowerCaseTitle")}
      ></TextField>
      <TextField
        label="Lower case short desc"
        isRequired={false}
        isReadOnly={false}
        value={lowerCaseShortDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc: value,
              scheduleDateTime,
            };
            const result = onChange(modelFields);
            value = result?.lowerCaseShortDesc ?? value;
          }
          if (errors.lowerCaseShortDesc?.hasError) {
            runValidationTasks("lowerCaseShortDesc", value);
          }
          setLowerCaseShortDesc(value);
        }}
        onBlur={() =>
          runValidationTasks("lowerCaseShortDesc", lowerCaseShortDesc)
        }
        errorMessage={errors.lowerCaseShortDesc?.errorMessage}
        hasError={errors.lowerCaseShortDesc?.hasError}
        {...getOverrideProps(overrides, "lowerCaseShortDesc")}
      ></TextField>
      <TextField
        label="Schedule date time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={scheduleDateTime && convertToLocal(new Date(scheduleDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              shortDesc,
              longDesc,
              thumbURL,
              date,
              time,
              estTime,
              deleted,
              location,
              author,
              S3ObjectKey,
              status,
              active,
              lowerCaseTitle,
              lowerCaseShortDesc,
              scheduleDateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.scheduleDateTime ?? value;
          }
          if (errors.scheduleDateTime?.hasError) {
            runValidationTasks("scheduleDateTime", value);
          }
          setScheduleDateTime(value);
        }}
        onBlur={() => runValidationTasks("scheduleDateTime", scheduleDateTime)}
        errorMessage={errors.scheduleDateTime?.errorMessage}
        hasError={errors.scheduleDateTime?.hasError}
        {...getOverrideProps(overrides, "scheduleDateTime")}
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
          isDisabled={!(idProp || guidanceModelProp)}
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
              !(idProp || guidanceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

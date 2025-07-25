/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getManualNotificationsUser } from "../graphql/queries";
import { updateManualNotificationsUser } from "../graphql/mutations";
const client = generateClient();
export default function ManualNotificationsUserUpdateForm(props) {
  const {
    id: idProp,
    manualNotificationsUser: manualNotificationsUserModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    seen: false,
  };
  const [seen, setSeen] = React.useState(initialValues.seen);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = manualNotificationsUserRecord
      ? { ...initialValues, ...manualNotificationsUserRecord }
      : initialValues;
    setSeen(cleanValues.seen);
    setErrors({});
  };
  const [manualNotificationsUserRecord, setManualNotificationsUserRecord] =
    React.useState(manualNotificationsUserModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getManualNotificationsUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getManualNotificationsUser
        : manualNotificationsUserModelProp;
      setManualNotificationsUserRecord(record);
    };
    queryData();
  }, [idProp, manualNotificationsUserModelProp]);
  React.useEffect(resetStateValues, [manualNotificationsUserRecord]);
  const validations = {
    seen: [],
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
          seen: seen ?? null,
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
            query: updateManualNotificationsUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: manualNotificationsUserRecord.id,
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
      {...getOverrideProps(overrides, "ManualNotificationsUserUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Seen"
        defaultChecked={false}
        isDisabled={false}
        isChecked={seen}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              seen: value,
            };
            const result = onChange(modelFields);
            value = result?.seen ?? value;
          }
          if (errors.seen?.hasError) {
            runValidationTasks("seen", value);
          }
          setSeen(value);
        }}
        onBlur={() => runValidationTasks("seen", seen)}
        errorMessage={errors.seen?.errorMessage}
        hasError={errors.seen?.hasError}
        {...getOverrideProps(overrides, "seen")}
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
          isDisabled={!(idProp || manualNotificationsUserModelProp)}
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
              !(idProp || manualNotificationsUserModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

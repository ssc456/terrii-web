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
import { getDebugInfo } from "../graphql/queries";
import { updateDebugInfo } from "../graphql/mutations";
const client = generateClient();
export default function DebugInfoUpdateForm(props) {
  const {
    id: idProp,
    debugInfo: debugInfoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user: "",
    Logging: "",
    Test: "",
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [Logging, setLogging] = React.useState(initialValues.Logging);
  const [Test, setTest] = React.useState(initialValues.Test);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = debugInfoRecord
      ? { ...initialValues, ...debugInfoRecord }
      : initialValues;
    setUser(cleanValues.user);
    setLogging(cleanValues.Logging);
    setTest(cleanValues.Test);
    setErrors({});
  };
  const [debugInfoRecord, setDebugInfoRecord] =
    React.useState(debugInfoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDebugInfo.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDebugInfo
        : debugInfoModelProp;
      setDebugInfoRecord(record);
    };
    queryData();
  }, [idProp, debugInfoModelProp]);
  React.useEffect(resetStateValues, [debugInfoRecord]);
  const validations = {
    user: [],
    Logging: [],
    Test: [],
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
          user: user ?? null,
          Logging: Logging ?? null,
          Test: Test ?? null,
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
            query: updateDebugInfo.replaceAll("__typename", ""),
            variables: {
              input: {
                id: debugInfoRecord.id,
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
      {...getOverrideProps(overrides, "DebugInfoUpdateForm")}
      {...rest}
    >
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user: value,
              Logging,
              Test,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <TextField
        label="Logging"
        isRequired={false}
        isReadOnly={false}
        value={Logging}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              Logging: value,
              Test,
            };
            const result = onChange(modelFields);
            value = result?.Logging ?? value;
          }
          if (errors.Logging?.hasError) {
            runValidationTasks("Logging", value);
          }
          setLogging(value);
        }}
        onBlur={() => runValidationTasks("Logging", Logging)}
        errorMessage={errors.Logging?.errorMessage}
        hasError={errors.Logging?.hasError}
        {...getOverrideProps(overrides, "Logging")}
      ></TextField>
      <TextField
        label="Test"
        isRequired={false}
        isReadOnly={false}
        value={Test}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              Logging,
              Test: value,
            };
            const result = onChange(modelFields);
            value = result?.Test ?? value;
          }
          if (errors.Test?.hasError) {
            runValidationTasks("Test", value);
          }
          setTest(value);
        }}
        onBlur={() => runValidationTasks("Test", Test)}
        errorMessage={errors.Test?.errorMessage}
        hasError={errors.Test?.hasError}
        {...getOverrideProps(overrides, "Test")}
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
          isDisabled={!(idProp || debugInfoModelProp)}
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
              !(idProp || debugInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

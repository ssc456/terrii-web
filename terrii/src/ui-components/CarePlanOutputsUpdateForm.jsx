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
import { getCarePlanOutputs } from "../graphql/queries";
import { updateCarePlanOutputs } from "../graphql/mutations";
const client = generateClient();
export default function CarePlanOutputsUpdateForm(props) {
  const {
    id: idProp,
    carePlanOutputs: carePlanOutputsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    carePlanJSON: "",
    deleted: false,
    carePlanName: "",
  };
  const [carePlanJSON, setCarePlanJSON] = React.useState(
    initialValues.carePlanJSON
  );
  const [deleted, setDeleted] = React.useState(initialValues.deleted);
  const [carePlanName, setCarePlanName] = React.useState(
    initialValues.carePlanName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = carePlanOutputsRecord
      ? { ...initialValues, ...carePlanOutputsRecord }
      : initialValues;
    setCarePlanJSON(cleanValues.carePlanJSON);
    setDeleted(cleanValues.deleted);
    setCarePlanName(cleanValues.carePlanName);
    setErrors({});
  };
  const [carePlanOutputsRecord, setCarePlanOutputsRecord] = React.useState(
    carePlanOutputsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCarePlanOutputs.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCarePlanOutputs
        : carePlanOutputsModelProp;
      setCarePlanOutputsRecord(record);
    };
    queryData();
  }, [idProp, carePlanOutputsModelProp]);
  React.useEffect(resetStateValues, [carePlanOutputsRecord]);
  const validations = {
    carePlanJSON: [],
    deleted: [],
    carePlanName: [],
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
          carePlanJSON: carePlanJSON ?? null,
          deleted: deleted ?? null,
          carePlanName: carePlanName ?? null,
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
            query: updateCarePlanOutputs.replaceAll("__typename", ""),
            variables: {
              input: {
                id: carePlanOutputsRecord.id,
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
      {...getOverrideProps(overrides, "CarePlanOutputsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Care plan json"
        isRequired={false}
        isReadOnly={false}
        value={carePlanJSON}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              carePlanJSON: value,
              deleted,
              carePlanName,
            };
            const result = onChange(modelFields);
            value = result?.carePlanJSON ?? value;
          }
          if (errors.carePlanJSON?.hasError) {
            runValidationTasks("carePlanJSON", value);
          }
          setCarePlanJSON(value);
        }}
        onBlur={() => runValidationTasks("carePlanJSON", carePlanJSON)}
        errorMessage={errors.carePlanJSON?.errorMessage}
        hasError={errors.carePlanJSON?.hasError}
        {...getOverrideProps(overrides, "carePlanJSON")}
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
              carePlanJSON,
              deleted: value,
              carePlanName,
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
        label="Care plan name"
        isRequired={false}
        isReadOnly={false}
        value={carePlanName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              carePlanJSON,
              deleted,
              carePlanName: value,
            };
            const result = onChange(modelFields);
            value = result?.carePlanName ?? value;
          }
          if (errors.carePlanName?.hasError) {
            runValidationTasks("carePlanName", value);
          }
          setCarePlanName(value);
        }}
        onBlur={() => runValidationTasks("carePlanName", carePlanName)}
        errorMessage={errors.carePlanName?.errorMessage}
        hasError={errors.carePlanName?.hasError}
        {...getOverrideProps(overrides, "carePlanName")}
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
          isDisabled={!(idProp || carePlanOutputsModelProp)}
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
              !(idProp || carePlanOutputsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

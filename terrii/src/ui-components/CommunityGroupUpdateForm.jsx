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
import { getCommunityGroup } from "../graphql/queries";
import { updateCommunityGroup } from "../graphql/mutations";
const client = generateClient();
export default function CommunityGroupUpdateForm(props) {
  const {
    id: idProp,
    communityGroup: communityGroupModelProp,
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
    description: "",
    imageS3Key: "",
    headerS3Key: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [imageS3Key, setImageS3Key] = React.useState(initialValues.imageS3Key);
  const [headerS3Key, setHeaderS3Key] = React.useState(
    initialValues.headerS3Key
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = communityGroupRecord
      ? { ...initialValues, ...communityGroupRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setImageS3Key(cleanValues.imageS3Key);
    setHeaderS3Key(cleanValues.headerS3Key);
    setErrors({});
  };
  const [communityGroupRecord, setCommunityGroupRecord] = React.useState(
    communityGroupModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCommunityGroup.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCommunityGroup
        : communityGroupModelProp;
      setCommunityGroupRecord(record);
    };
    queryData();
  }, [idProp, communityGroupModelProp]);
  React.useEffect(resetStateValues, [communityGroupRecord]);
  const validations = {
    name: [],
    description: [],
    imageS3Key: [],
    headerS3Key: [],
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
          description: description ?? null,
          imageS3Key: imageS3Key ?? null,
          headerS3Key: headerS3Key ?? null,
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
            query: updateCommunityGroup.replaceAll("__typename", ""),
            variables: {
              input: {
                id: communityGroupRecord.id,
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
      {...getOverrideProps(overrides, "CommunityGroupUpdateForm")}
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
              description,
              imageS3Key,
              headerS3Key,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              imageS3Key,
              headerS3Key,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Image s3 key"
        isRequired={false}
        isReadOnly={false}
        value={imageS3Key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              imageS3Key: value,
              headerS3Key,
            };
            const result = onChange(modelFields);
            value = result?.imageS3Key ?? value;
          }
          if (errors.imageS3Key?.hasError) {
            runValidationTasks("imageS3Key", value);
          }
          setImageS3Key(value);
        }}
        onBlur={() => runValidationTasks("imageS3Key", imageS3Key)}
        errorMessage={errors.imageS3Key?.errorMessage}
        hasError={errors.imageS3Key?.hasError}
        {...getOverrideProps(overrides, "imageS3Key")}
      ></TextField>
      <TextField
        label="Header s3 key"
        isRequired={false}
        isReadOnly={false}
        value={headerS3Key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              imageS3Key,
              headerS3Key: value,
            };
            const result = onChange(modelFields);
            value = result?.headerS3Key ?? value;
          }
          if (errors.headerS3Key?.hasError) {
            runValidationTasks("headerS3Key", value);
          }
          setHeaderS3Key(value);
        }}
        onBlur={() => runValidationTasks("headerS3Key", headerS3Key)}
        errorMessage={errors.headerS3Key?.errorMessage}
        hasError={errors.headerS3Key?.hasError}
        {...getOverrideProps(overrides, "headerS3Key")}
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
          isDisabled={!(idProp || communityGroupModelProp)}
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
              !(idProp || communityGroupModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

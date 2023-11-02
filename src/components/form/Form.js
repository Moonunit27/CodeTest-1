import React from "react";
import "./form.css";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import validationSchema from "./validation";

const ErrorMessage = ({ message }) => <span className="error">{message}</span>;

const InputField = ({ field, type }) => (
  <div className="input-field">
    <input type={type} {...field} />
  </div>
);

const FieldWithLabel = ({ label, children }) => (
  <div className="formRow">
    <label>{label}:</label>
    {children}
  </div>
);

const FormField = ({ label, field, type, formik }) => {
  const fieldName = field.name;
  const hasError = formik.touched[fieldName] && formik.errors[fieldName];

  return (
    <FieldWithLabel label={label}>
      <InputField field={field} type={type} />
      {hasError && <ErrorMessage message={formik.errors[fieldName]} />}
    </FieldWithLabel>
  );
};

function Form() {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      street: "",
      city: "",
      postalCode: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Would have a POST endpoint here
      console.log(values);
    },
  });

  const requiredFields = ["street", "city", "postalCode", "country"];

  const clearForm = () => {
    formik.resetForm();
  };

  return (
    <div>
      <h2>{t("requestHelp")}</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <FormField
            label={`*${t("name")}`}
            field={formik.getFieldProps("name")}
            type="text"
            formik={formik}
          />
          <FormField
            label={t("email")}
            field={formik.getFieldProps("email")}
            type="email"
            formik={formik}
          />
        </div>
        <div className="row">
          {requiredFields.map((fieldName) => (
            <FormField
              key={fieldName}
              label={`*${t(fieldName)}`}
              field={formik.getFieldProps(fieldName)}
              type="text"
              formik={formik}
            />
          ))}
        </div>
        <div className="row">
          <button type="button" onClick={clearForm}>
            {t("clear-form")}
          </button>
          <button type="submit">{t("submit")}</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

import React from "react";
import "./input.style.scss";

interface InputProps {
  name: string;
  required?: boolean;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  formEngine: UseFormReturn;
}

const Input: React.FC<InputProps> = ({
  name,
  required,
  label,
  type = "text",
  formEngine,
}) => (
  <div className="input">
    <label htmlFor={name} className="input__label">
      {label} {required ? "*" : ""}
    </label>
    <input
      type={type}
      required={required}
      id={name}
      name={name}
      className="input__control"
      defaultValue={(formEngine && formEngine.formData[name]) || ""}
      onChange={(e) => {
        const tempFormData = (formEngine && formEngine.formData) || {};
        Object.assign(tempFormData, { [name]: e.target.value });
        formEngine.setFormData(tempFormData);
      }}
    />
  </div>
);

export default Input;

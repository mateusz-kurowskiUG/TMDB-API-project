import React from "react";
import LogRegForm from "./LogRegForm";
import LoginInput from "./LoginInput";

function LoginForm({ validationSchema, initialValues, handler }) {
  return (
    <LogRegForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      handler={handler}
    >
      <LoginInput name="email" label="Email" placeholder="Email" type="email" />
      <LoginInput
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
      />
    </LogRegForm>
  );
}

export default LoginForm;

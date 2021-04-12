import React from "react";

import { useFormikContext } from "formik";
import AppButton from "../AppButton";
import colors from "../../config/colors";

function SubmitButton({ title, onPress }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      backgroundColor={colors.primary}
      color={colors.white}
      title={title}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;

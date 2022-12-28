import { useFormik, FormikProvider } from "formik";
import { View, Pressable } from "react-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const validationSchema = yup.object().shape({
  username: yup.string().min(2).max(255).required("Username is required"),
  password: yup.string().min(4).max(255).required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("pressing: ", values);
    },
    validationSchema: validationSchema,
  });

  console.log(formik);

  return (
    <FormikProvider value={formik}>
      <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <Pressable onPress={formik.submitForm}>
          <View
            style={{
              borderRadius: 5,
              margin: 10,
              backgroundColor: "blue",
              paddingVertical: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              Sign In
            </Text>
          </View>
        </Pressable>
      </View>
    </FormikProvider>
  );
};

export default SignIn;

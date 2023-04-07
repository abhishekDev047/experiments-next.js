import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "too short name")
    .max(50, "too long")
    .required("Required"),
  password: Yup.string()
    .min(8, "too short password")
    .max(16, "too long ")
    .required("Required"),
  phone: Yup.number()
    .min(10, "not valid")
    .max(12, "can not be more than 10 characters")
    .required("Required"),
  profession: Yup.string()
    .min(5, "not valid")
    .max(20, "not valid")
    .required("Not Required"),
});

const FormPage = () => (
  <div className="text-lg text-center w-full">
    <Formik
      validationSchema={SignUpSchema}
      onSubmit={values=>{console.log(values)}}
      initialValues={{
        username: "",
        password: "",
        phone: "",
        profession: "",
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col">
          <label>
            Name:
            <Field
              type="text"
              name="username"
              className="border border-black"
            />
          </label>
          {errors.username && touched.username ? (
            <div>{errors.username}</div>
          ) : null}
          <label>
            Password:
            <Field
              type="password"
              name="password"
              className="border border-black"
            />
          </label>
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null} 
          <label>
            Phone:
            <Field type="number" name="phone" className="border border-black" />
          </label>
          {errors.phone && touched.phone ? (
            <div>{errors.phone}</div>
          ) : null}
          <label>
            Profession:
            <Field
              type="text"
              name="profession"
              className="border border-black"
              placeholder="chut"
            />
          </label>
          <button type="submit" className="border border-black w-fit">
            Submit
          </button>
        </Form>
      )}
    </Formik>

    <Link href={"/"} className="text-2xl text-green-600">
      Home
    </Link>
  </div>
);

export default FormPage;

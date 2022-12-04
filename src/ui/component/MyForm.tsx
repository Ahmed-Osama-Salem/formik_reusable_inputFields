/* eslint-disable no-console */
import ApiClient from "@/app/utils/ApiClient";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import NewField from "./NewField";

import SelectField from "./SelectField";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  picked: Yup.string().required("A radio option is required"),
});
const data = [
  { name: "ahmed", id: 1 },
  { name: "Wade Cooper", id: 2 },
  { name: "Arlene Mccoy", id: 3 },
  { name: "Devon Webb", id: 4 },
  { name: "Tom Cook", id: 5 },
  { name: "Tanya Fox", id: 6 },
  { name: "Hellen Schmidt", id: 7 },
  { name: "Dvon Webb", id: 8 },
  { name: "Tm Cook", id: 9 },
  { name: "Tnya Fox", id: 10 },
  { name: "Hllen Schmidt", id: 11 },
];

export const CountryData = [
  {
    name: "Egypt",
    code: "+20",
    country:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    id: 1,
  },
  {
    name: "Kuwait",
    code: "+965",
    country:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
    id: 2,
  },
  {
    name: "Lebnon",
    code: "+961",
    country:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
    id: 3,
  },
  {
    name: "Jordan",
    code: "+962",
    country:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
    id: 4,
  },
  {
    name: "Tunisia",
    code: "+216",
    country:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
    id: 5,
  },
  {
    name: "Oman",
    code: "+968",
    country:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
    id: 6,
  },
  {
    name: "Morocco",
    code: "+212",
    country:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    id: 7,
  },
];

export const MyForm = () => {
  // const handelSubmit = async (values: any) => {
  //   const formData = {
  //     fName: values.firstName,
  //     lName: values.lastName,
  //     email:values.email,
  //     pic:values.picked,
  //     array: [{type: "", value: ""}]
  //   }
  //   console.log(values);

  //   return ApiClient.post("http://localhost:3000/api/login",{
  //     formData
  //   }).then((data) =>{
  //     console.log(data)
  //     return data.data
  //   }).catch((error)=>{
  //     return error
  //   })

  // }
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        picked: "",
        // value: "",
        array: [{ type: "", value: "" }],
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, values, touched, setFieldValue }) => {
        console.log(values);

        return (
          <Form
            data-testid="form"
            className="flex h-screen w-full justify-center items-center backdrop-blur-[2px] bg-black/30"
          >
            <div
              data-testid="form"
              className="grid grid-cols-4  max-w-[800px] gap-9"
            >
              <label htmlFor="firstName" className="flex flex-col text-white">
                first name
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="firstName"
                  className="h-[40px] rounded-xl bg-slate-300 p-1"
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </label>
              <label htmlFor="lastName" className="flex flex-col text-white">
                Last name
                <Field
                  id="lastName"
                  name="lastName"
                  className="h-[40px] rounded-xl bg-slate-300 p-1"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </label>
              <label htmlFor="email" className="flex flex-col text-white">
                Email
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="h-[40px] rounded-xl bg-slate-300 p-1"
                  maxLength="1"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </label>
              <SelectField
                name={"picked"}
                data={data}
                label={"model"}
                showErrors={!!(errors.picked && touched.picked)}
                width={"w-[300px]"}
                required={false}
                setFieldValue={setFieldValue}
              />

              <FieldArray name="array">
                {({ remove, push }) => (
                  <div>
                    {values.array.length > 0 &&
                      values.array.map((arr, index) => (
                        <div className="row" key={index}>
                          <NewField
                            name={`array.${index}.type`}
                            data={data}
                            label={"model"}
                            // showErrors={!!(errors.picked && touched.picked)}
                            width={"w-[600px]"}
                            fieldName={`array.${index}.value`}
                            required={false}
                            setFieldValue={setFieldValue}
                          />
                          <div className="col">
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push({ type: "", value: "" })}
                    >
                      Add Friend
                    </button>
                  </div>
                )}
              </FieldArray>
              <button type="submit" className="text-white">
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

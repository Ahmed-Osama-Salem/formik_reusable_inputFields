/* eslint-disable no-console */
import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import SelectField from './SelectField';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  picked: Yup.string().required('A radio option is required'),
});
const data = [
  { name: 'none' },
  { name: 'ahmed' },
  { name: 'mohamed' },
  { name: 'ali' },
  { name: 'hussin' },
  { name: 'ola' },
  { name: 'mado' },
  { name: 'hussam' },
  { name: 'said' },
  { name: 'reda' },
  { name: 'zedan' },
  { name: 'saad' },
  { name: 'abdo' },
  { name: 'nehal' },
  { name: 'zean' },
];
export const MyForm = () => {
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        picked: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="flex h-screen w-full justify-center items-center backdrop-blur-[2px] bg-black/30">
            <div className="flex max-w-[500px] flex-col  gap-9">
              <label className='flex flex-col text-white'>first name
              <Field
                name="firstName"
                className="h-[40px] rounded-xl bg-slate-300 p-1"
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              </label>
               <label className='flex flex-col text-white'>Last name
              <Field
                name="lastName"
                className="h-[40px] rounded-xl bg-slate-300 p-1"
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              </label>
               <label className='flex flex-col text-white'>Email
              <Field
                name="email"
                type="email"
                className="h-[40px] rounded-xl bg-slate-300 p-1"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              </label>
              <SelectField
                data={data}
                label={'model'}
                showErrors={!!(errors.picked && touched.picked)}
              />
              <button type="submit" className='text-white'>Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

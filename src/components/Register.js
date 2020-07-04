import React from 'react';
import {Formik} from 'formik';

const Registration = () => {
  return (
    //container for the form
    <div>
      <Formik
        initialValues={{
            email:'',
            username: '',
            password:'',
            confirm_password: ''
          }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required."
          //i am not fluent in regex.
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email"
          }
        return errors;
        }}></Formik>
      <form action="/NEW_USER_URL">
        {/* username */}
        <label for="user">Username:</label>
        <input type="text" name="username" value="username"></input>

        {/* password 1 */}
        <label for="password1">Password</label>
        <input type="text" name="password1" value="password 1"></input>

        {/* password 2 */}
        <label for="password2">Confirm Password</label>
        <input type="text" name="password2" value="password 2"></input>

        {/* submit */}
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default Registration;
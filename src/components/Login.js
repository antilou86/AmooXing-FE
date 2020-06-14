import React from 'react';

const Login = () => {
  return (
    //container for the form
    <div>
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

export default Login;
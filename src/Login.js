import React from 'react';

export default function Login(props) {
  return (
    <form>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Log In</button>
    </form>
  );
}

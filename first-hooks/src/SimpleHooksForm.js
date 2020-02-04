import React from 'react';
import useFormState from './hooks/useFormState';


export default function SimpleHooksForm() {
  const [email, updateEmail, resetEmail] = useFormState("");
  const [name, updateName, resetName] = useFormState("");
  return (
    <div>
      <h1>The value is: {email}</h1>
      <input type="text" value={email} onChange={updateEmail}/>
      <button onClick={resetEmail}>submit</button>
      <h1>The name is: {name}</h1>
      <input type="text" value={name} onChange={updateName}/>
      <button onClick={resetName}>submit</button>
    </div>
  )
}

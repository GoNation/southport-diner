import React, { useState } from 'react';
import { Button, Box, Alert, AlertIcon } from '@chakra-ui/react';

function NetlifyForm({ name, children, submitButtonStyles, ...props }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  return (
    <form name={name} onSubmit={handleFormSubmit} className="" {...props}>
      <input type="hidden" name="form-name" value={name} />
      {children}
      <Button
        type="submit"
        disabled={status === 'pending'}
        {...submitButtonStyles}
      >
        Submit
      </Button>
      {status === 'ok' && (
        <Alert status="success">
          <AlertIcon />
          Submitted!
        </Alert>
      )}
      {status === 'error' && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
    </form>
  );
}

export default NetlifyForm;

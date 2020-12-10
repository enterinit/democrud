const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.title) {
        errors.title = 'Required';
      }
      if (!values.description) {
        errors.description = 'Required';
      }  
      if (!values.image) {
        errors.image = 'Required';
      }
    return errors;
  };
  
  export default validate;
  
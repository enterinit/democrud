import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import asyncValidate from './asyncValidate';





const renderField = ({ input, type, placeholder, meta: { asyncValidating, touched, error } }) => (
  <div>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={placeholder} className="formmodal" />
      </div>
      {touched && error && <span style={{margin: '0.5rem'}}>{error}</span>}
   
  </div>
);


const renderFieldDescription = ({ input, placeholder, meta: { touched, error } }) => (
  <div>
    <div>
      <textarea style={{width: '85%'}} {...input} rows='5' placeholder={placeholder} className="formmodal" type='text' />
      </div>
      {touched && error && <span style={{margin: '0.5rem'}}>{error}</span>}
   
  </div>
);


const CreateHotDogForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <p className='hotdogname' style={{ margin: '0.5rem' }}>
        Add new hot-dog
      </p>
      <Field name='name' type='text' component={renderField} placeholder='Name' />
      <Field name='title' type='number' component={renderField} placeholder='Title' />
      <Field name='description' type='text' component={renderFieldDescription} placeholder='Description' />
      <Field name='image' type='text' component={renderField} placeholder='Image'  />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'AddNewHotDog',
  validate,
  asyncValidate,
  asyncBlurFields: ['name'],
})(CreateHotDogForm);

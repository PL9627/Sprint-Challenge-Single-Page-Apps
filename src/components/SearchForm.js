import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const SearchForm = (props) => {
  const {touched, errors, status} = props;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(status);
  }, [status]);
 
  return (
    <section className="search-form">
      <div>
        <Form>
          <Field type = 'text' name = 'search' placeholder = 'Search' />
              {touched.search && errors.search ? (
                <span className = 'error'>{errors.search}</span>
              ) : null};
          <button type ='submit'>Search</button>
        </Form>
      </div>
    </section>
  );
}

export default withFormik({
  mapPropsToValues: props => {
    return {
      search: props.search || ""
    };
  },
  validationSchema: Yup.object().shape({
    search: Yup.string().required()
  }),
  handleSubmit: (values, {resetForm, setStatus}) => {
    axios.post("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response)
      setStatus(response.data);
      resetForm();
    })
    .catch(err => console.log('Search Error!', err.response))
  }
})(SearchForm);
import PropTypes from 'prop-types';
import { SearchInput, SearchLabel, SearchTitle } from './Filter.styled';
import { Field, Form, Formik } from 'formik';
// import { Formik, Form, Field } from "formik";


const Filter = ({ value, onSearch}) => {
    return ( 
        <SearchLabel>
            <SearchTitle>Search</SearchTitle> 
            <SearchInput type="search" name="filter" value={value} onChange={onSearch}></SearchInput>
        </SearchLabel>
    );
}

Filter.propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

export default Filter;


// const Filter = ({ value, onSearch}) => {
//     return (
    // <Formik initialValues={value}>
    //     <Form>
    //         <label>
    //             <Field type="search" name="filter" value={value} onChange={onSearch}><Field/>
    //         </label>
    //     </Form>
    // </Formik>
//     );
// }
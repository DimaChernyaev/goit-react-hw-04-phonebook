import PropTypes from 'prop-types';
import { SearchInput, SearchLabel, SearchTitle } from './Filter.styled';

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
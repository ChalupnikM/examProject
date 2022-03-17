import React  from 'react';
import Form from '../components/molecules/Form';
import Gallery from '../components/molecules/Gallery';
import { ViewFormWrapper } from '../components/atoms/ViewWrapper';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getApi } from '../store/apiSlice';
import { getSugApi } from '../store/suggestionApiSlice';
import { setFlag } from '../store/flagSlice';
import { setSearchValue } from '../store/searchValue';
import { setSuggestion } from '../store/suggestionSlice';
import { setValidationValue } from '../store/validationSlice';



const Views = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.searchValue.searchValue);
    const flag = useSelector(state => state.flag.flag);

    const handleInputChange = (e) => {
        dispatch(setSearchValue(e.target.value));
        dispatch(getSugApi(e.target.value));
        dispatch(setValidationValue(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue) {
            dispatch(getApi(searchValue));
            dispatch(setFlag(true));
            dispatch(setSuggestion(''));
            dispatch(setValidationValue(''));
        }
        else {
            console.warn('coś poszło nie tak')
        };
    };

    return (
        <ViewFormWrapper as="form" onSubmit={handleSubmit}>
            {flag ?
                <Gallery id="searchid" name="searchvalue" value={searchValue} onChange={handleInputChange} />
                :
                <Form id="searchid" name="searchvalue" value={searchValue} onChange={handleInputChange} />
            }
        </ViewFormWrapper>
    )
}

export default Views;

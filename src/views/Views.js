import React, { useState, useEffect } from 'react';
import Form from '../components/molecules/Form';
import Gallery from '../components/molecules/Gallery';
import { ViewFormWrapper } from '../components/atoms/ViewWrapper';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getApi } from '../store/apiSlice';
import { getSugApi } from '../store/suggestionApiSlice';
import { setFlag } from '../store/flagSlice';
import { setSearchValue } from '../store/searchValue';



const Views = () => {
    const ApiKey = 'HHJJ-3BSjvgICRaHgrH0Sjx-YPSdZkt_t0hlLr1BBoQ';
    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.searchValue.searchValue);
    const flag = useSelector(state => state.flag.flag);
    console.log(flag);

    //const [searchValue, setSearchValues] = useState('');
    const [autoSuggested, setAutoSuggested] = useState('');

    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${ApiKey}`;
    const url1 = `https://unsplash.com/nautocomplete/${searchValue}`;

    useEffect(() => {
        if (searchValue.length > 2) {
            dispatch(getSugApi(searchValue));
        }
        else {
            setAutoSuggested('');
        }

    }, [searchValue.length, url1]);

    const handleInputChange = (e) => {
        dispatch(setSearchValue(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue) {
            dispatch(getApi(searchValue));
            dispatch(setFlag(true));
        }
        else {
            console.warn('coś poszło nie tak')
        };
    };

    return (
        <ViewFormWrapper as="form" onSubmit={handleSubmit}>
            {flag ?
                <Gallery id="searchid" name="searchvalue" autoSuggested={autoSuggested} value={searchValue} onChange={handleInputChange} />
                :
                <Form id="searchid" name="searchvalue" autoSuggested={autoSuggested} value={searchValue} onChange={handleInputChange} />
            }
        </ViewFormWrapper>
    )
}

export default Views;

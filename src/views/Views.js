import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/molecules/Form';
import Gallery from '../components/molecules/Gallery';
import { ViewFormWrapper } from '../components/atoms/ViewWrapper';


import { setAllPhotos} from '../store/allPhotos';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getApi } from '../store/apiSlice';
import { getSugApi } from '../store/suggestionApiSlice';
import { setSearchValue } from '../store/searchValue';




const Views = () => {
    const ApiKey = 'HHJJ-3BSjvgICRaHgrH0Sjx-YPSdZkt_t0hlLr1BBoQ';
    const dispatch = useDispatch()
    const search = useSelector(state => state.searchValue.searchValue);

    const [searchValue, setSearchValues] = useState('');
    const [allPhotos, setAllPhotos] = useState('');
    const [autoSuggested, setAutoSuggested] = useState('');

    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${ApiKey}`;
    const url1 = `https://unsplash.com/nautocomplete/${searchValue}`;

    useEffect(() => {
        if (searchValue.length > 2) {

            dispatch(getSugApi(searchValue));
            // axios.get('https://cors-anywhere.herokuapp.com/' + url1)
            //     .then((response) => {
            //         console.log(response.data);
            //         const data = Array.from(response.data.fuzzy);
            //         console.log(data);
            //         setAutoSuggested(response.data.fuzzy)
            //     });
        }
        else {
            setAutoSuggested('');
        }

    }, [searchValue.length, url1]);

    const handleInputChange = (e) => {
        setSearchValues(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue) {

            dispatch(getApi(searchValue));
            dispatch(setSearchValue(true));


            // axios.get(url)
            //     .then((response) => {
            //         setAllPhotos(response.data.results)
            //         setAutoSuggested('');
            //     });
        }
        else {
            console.warn('coś poszło nie tak')
        };
    };

    return (
        <ViewFormWrapper as="form" onSubmit={handleSubmit}>
            {search ?
                <Gallery id="searchid" name="searchvalue" allPhotos={allPhotos} url={url} autoSuggested={autoSuggested} value={searchValue} onChange={handleInputChange} />
                :
                <Form id="searchid" name="searchvalue" allPhotos={allPhotos} autoSuggested={autoSuggested} value={searchValue} onChange={handleInputChange} />
            }
        </ViewFormWrapper>
    )
}

export default Views;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/molecules/Form';
import { ViewFormWrapper } from '../components/atoms/ViewWrapper';



const Forms = () => {
    const ApiKey = 'HHJJ-3BSjvgICRaHgrH0Sjx-YPSdZkt_t0hlLr1BBoQ';
    const [searchValue, setSearchValues] = useState('');
    const [allPhotos, setAllPhotos] = useState('');
    const [autoSuggested, setAutoSuggested] = useState('');
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${ApiKey}`;
    const url1 = `https://unsplash.com/nautocomplete/${searchValue}`;

    useEffect(() => {
        if (searchValue.length > 2) {
            axios.get('https://cors-anywhere.herokuapp.com/' + url1)
                .then((response) => {
                    console.log(response.data);
                    const data = Array.from(response.data.fuzzy);
                    console.log(data);
                    setAutoSuggested(response.data.fuzzy)
                });
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
            axios.get(url)
                .then((response) => {
                    console.log(response);
                    setAllPhotos(response.data.results)
                });
        }
        else {
            console.warn('coś poszło nie tak')
        };
    };

    return (
        <ViewFormWrapper as="form" onSubmit={handleSubmit}>
            {allPhotos ?
                <>
                {/* <Form id="searchid" name="searchvalue" autoSuggested={autoSuggested} value={searchValue} onChange={handleInputChange} /> */}
                {allPhotos.map((photo, id) => (
                    <img key={id} src={photo.urls.small} alt={photo.description} />
                ))
                }
                </>
                :
                <Form id="searchid" name="searchvalue" autoSuggested={autoSuggested} value={searchValue} onChange={handleInputChange} />
            }
        </ViewFormWrapper>
    )
}

export default Forms;

import React, { useEffect } from 'react';
import { MiniInput } from '../atoms/MiniInput';
import { Wrapper } from '../atoms/Wrapper';
import { Button } from '../atoms/Button';
import { Suggestion } from './Suggestion';
import { useSelector } from 'react-redux';
import { setSuggestion } from '../../store/suggestionSlice';
import { useDispatch } from 'react-redux';
import { getApi } from '../../store/apiSlice';
import { setSearchValue } from '../../store/searchValue';


const Gallery = ({ onChange, value, name, id }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSuggestion(''))

    }, []);
    const photos = useSelector(state => state.allPhotos);
    const x = photos.allPhotos;
    const suggestion = useSelector(state => state.suggestion);
    const suge = suggestion.suggestion;

    const handleOnClick = (e) => {
        dispatch(getApi(e.target.id))
        dispatch(setSearchValue(true));
        };
    return (
        <Wrapper>
            <MiniInput name={name} id={id} value={value} onChange={onChange} placeholder="Search" />
            {suge ? suge.map((fuzzy, priority) => (
                <Suggestion key={priority} id={fuzzy.query} onClick={handleOnClick}>{fuzzy.query}</Suggestion>

            ))
                : null}

            <Button type="submit">Send</Button>

            {x.map((photo, id) => (
                    <img key={id} src={photo.urls.small} alt={photo.description} />
            ))}
        </Wrapper>
    );
};

export default Gallery;
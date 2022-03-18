import React, { useState } from 'react';

import { MiniInput } from '../atoms/MiniInput';
import { Wrapper } from '../atoms/Wrapper';
import { GridWrapper, Img, ModalWrapper, MiniWrapper } from '../atoms/Wrapper';
import { Button } from '../atoms/Button';
import { Suggestion } from '../atoms/Suggestion';

import Popup from 'reactjs-popup';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setSuggestion } from '../../store/suggestionSlice';
import { getApi } from '../../store/apiSlice';
import { setSearchValue } from '../../store/searchValue';
import { setValidationValue } from '../../store/validationSlice';


const Gallery = ({ onChange, value, name, id }) => {
    const [modalActive, setModalActive] = useState(false);
    const [photo, setPhoto] = useState('');
    const [authorInfo, setAuthorInfo] = useState([]);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('')

    const closeModal = () => setModalActive(false);

    const dispatch = useDispatch()
    const photos = useSelector(state => state.allPhotos.allPhotos);
    const suggestion = useSelector(state => state.suggestion.suggestion);
    const validationValue = useSelector(state => state.validationValue.validationValue);

    const handleOnClick = (e) => {
        dispatch(getApi(e.target.id))
        dispatch(setSearchValue(e.target.id));
        dispatch(setSuggestion(''));
        dispatch(setValidationValue(''));

    };
    const handleModalClick = (e) => {

        const authorInformation = (e.target.alt).split(',');
        const dateMonth = authorInformation[0];
        const year = dateMonth.slice(0, 4);
        const date = new Date(dateMonth);
        const month = date.toLocaleString('default', { month: 'long' })

        setPhoto(e.target.src)
        setMonth(month);
        setYear(year);
        setAuthorInfo(authorInformation);
        setModalActive(true);


    }
    return (
        <Wrapper>
            <Wrapper>
                <MiniWrapper>
                    <MiniInput name={name} id={id} value={value} onChange={onChange} placeholder="Search" />
                    <Button type="submit">Szukaj</Button>
                </MiniWrapper>
                {validationValue.length > 2 ?
                <>
                {suggestion.length > 1 ? suggestion.map((fuzzy, priority) => (
                    <Suggestion key={priority} id={fuzzy.query} onClick={handleOnClick}>{fuzzy.query}</Suggestion>
                )) : 
                <>
                        {validationValue.length > 3 ?
                            <Suggestion>Brak wyników</Suggestion>
                            : null}
                </>
                }
                </>
                : null}
            </Wrapper>
                {photos.length > 0 ?
                    <GridWrapper>
                        {photos.map((photo, id) => (
                            <Img as="img" key={id} src={photo.urls.small} alt={[photo.created_at, photo.user.first_name, photo.user.last_name, photo.user.location]} onClick={handleModalClick} />
                        ))}
                        {modalActive ?
                            <Popup open={modalActive} closeOnDocumentClick onClose={closeModal}>
                                <ModalWrapper>
                                    <div onClick={closeModal}>
                                        <img src={photo} alt={photo.description} />
                                        <p>Autor: {authorInfo[1]} {authorInfo[2]}</p>
                                        <p>Lokalizacja: {authorInfo[3] ? <>{authorInfo[3]} {authorInfo[4]}</> : "Brak"}</p>
                                        <p>Data: {month} {year}</p>
                                    </div>
                                </ModalWrapper>
                            </Popup>
                            : null}
                    </GridWrapper>
                    : <GridWrapper>Brak wyników</GridWrapper>}

            </Wrapper>
    );
};

export default Gallery;
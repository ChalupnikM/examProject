import React, { useEffect, useState } from 'react';
import { MiniInput } from '../atoms/MiniInput';
import { Wrapper } from '../atoms/Wrapper';
import { GalleryWrapper, GridWrapper, Img, ModalWrapper } from '../atoms/Wrapper';
import { Button } from '../atoms/Button';
import { Suggestion } from './Suggestion';
import { useSelector } from 'react-redux';
import { setSuggestion } from '../../store/suggestionSlice';
import { useDispatch } from 'react-redux';
import { getApi } from '../../store/apiSlice';
import { setFlag } from '../../store/flagSlice';
import { setSearchValue } from '../../store/searchValue';
import Popup from 'reactjs-popup';


const Gallery = ({ onChange, value, name, id }) => {

    const [modalActive, setModalActive] = useState(false);

    const [photo, setPhoto] = useState('');
    const [authorInfo, setAuthorInfo] = useState([]);

    const closeModal = () => setModalActive(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSuggestion(''))

    }, []);
    const photos = useSelector(state => state.allPhotos);
    const x = photos.allPhotos;
    console.log(x);
    const suggestion = useSelector(state => state.suggestion);
    const suge = suggestion.suggestion;

    const handleOnClick = (e) => {
        dispatch(getApi(e.target.id))
        dispatch(setFlag(true));
        dispatch(setSearchValue(e.target.id));

    };

    const handleModalClick = (e, props) => {
        setPhoto(e.target.src)
        console.log(e.target);
        console.log(e.target.alt)
        const authorInformation = (e.target.alt).split(',');
        const i = authorInfo[0];
        console.log(i);
        setAuthorInfo(authorInformation);
        setModalActive(true);


    }
    return (
        <Wrapper>
            <MiniInput name={name} id={id} value={value} onChange={onChange} placeholder="Search" />
            {suge ? suge.map((fuzzy, priority) => (
                <Suggestion key={priority} id={fuzzy.query} onClick={handleOnClick}>{fuzzy.query}</Suggestion>

            )): null}

            <Button type="submit">Send</Button>
            <GridWrapper>

                {x.map((photo, id) => (
                    <GalleryWrapper key={id}>
                        <Img as="img" key={id} src={photo.urls.small} alt={[photo.created_at, photo.user.first_name, photo.user.last_name, photo.user.location]} onClick={handleModalClick} />
                    </GalleryWrapper>
                ))}
                {modalActive ?
                    <Popup open={modalActive} closeOnDocumentClick onClose={closeModal}>
                        <ModalWrapper>
                            <div onClick={closeModal}>
                            <img src={photo} alt={photo.description} />
                            <p>Author: {authorInfo[1]} {authorInfo[2]}</p>
                            <p>Loaction: {authorInfo[3]} {authorInfo[4]}</p>
                            <p>Created at: {authorInfo[0]}</p>
                            </div>
                        </ModalWrapper>
                    </Popup>
                    : null}

            </GridWrapper>
        </Wrapper>
    );
};

export default Gallery;
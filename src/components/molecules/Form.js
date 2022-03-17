import React from 'react';

import { Input } from '../atoms/Input';
import { MiniWrapper, FormWrapper } from '../atoms/Wrapper';
import { Button } from '../atoms/Button';
import { Suggestion } from '../atoms/Suggestion';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getApi } from '../../store/apiSlice';
import { setFlag } from '../../store/flagSlice';
import { setSearchValue } from '../../store/searchValue';
import { setSuggestion } from '../../store/suggestionSlice';
import { setValidationValue } from '../../store/validationSlice';


const Form = ({ onChange, value, name, id }) => {
    const dispatch = useDispatch()
    const suggestion = useSelector(state => state.suggestion.suggestion);

    const handleOnClick = (e) => {
        dispatch(setFlag(true));
        dispatch(getApi(e.target.id))
        dispatch(setSearchValue(e.target.id));
        dispatch(setSuggestion(''));
        dispatch(setValidationValue(''));
        };
    
    return (
        <FormWrapper>
            <p>Wpisz kategorie i wyszukaj zdjęcia</p>
            <MiniWrapper>
            <Input name={name} id={id} value={value} onChange={onChange} placeholder="Search" />
            <Button type="submit">Szukaj</Button>
            </MiniWrapper>
            {value.length > 2 ?
            <>
            {suggestion.length >= 1 ? suggestion.map((fuzzy, priority) => (
                <Suggestion key={priority} id={fuzzy.query} onClick={handleOnClick}>{fuzzy.query}</Suggestion>
            ))
                : <Suggestion>Brak wyników</Suggestion>}
            </>
            : null}
            
        </FormWrapper>
    );
};

export default Form;
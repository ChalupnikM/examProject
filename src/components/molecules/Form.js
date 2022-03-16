import React from 'react';
import { Input } from '../atoms/Input';
import { Wrapper } from '../atoms/Wrapper';
import { Button } from '../atoms/Button';
import { useSelector } from 'react-redux';
import { getApi } from '../../store/apiSlice';
import { setSearchValue } from '../../store/searchValue';
import { useDispatch } from 'react-redux';


const Form = ({ onChange, value, name, id }) => {
    const dispatch = useDispatch()
    const suggestion = useSelector(state => state.suggestion);
    const suge = suggestion.suggestion;
    const handleOnClick = (e) => {
        dispatch(getApi(e.target.id))
        dispatch(setSearchValue(true));
        };
    
    return (
        <Wrapper>
            <Input name={name} id={id} value={value} onChange={onChange} placeholder="Search" />
            {suge ? suge.map((fuzzy, priority) => (
                <div key={priority} id={fuzzy.query} onClick={handleOnClick}>{fuzzy.query}</div>

            ))
                : null}

            <Button type="submit">Send</Button>
        </Wrapper>
    );
};

export default Form;
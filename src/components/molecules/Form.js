import React from 'react';
import { Input } from '../atoms/Input';
import { Wrapper } from '../atoms/Wrapper';
import { Button } from '../atoms/Button';
import { useSelector } from 'react-redux';
import { getApi } from '../../store/apiSlice';
import { setFlag } from '../../store/flagSlice';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/searchValue';


const Form = ({ onChange, value, name, id }) => {
    const dispatch = useDispatch()
    const suggestion = useSelector(state => state.suggestion);
    const suge = suggestion.suggestion;
    const handleOnClick = (e) => {
        dispatch(getApi(e.target.id))
        dispatch(setFlag(true));
        dispatch(setSearchValue(e.target.id));
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
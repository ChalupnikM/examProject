import React from 'react';
import { Input } from '../atoms/Input';
import { Wrapper } from '../atoms/Wrapper';
import { Button } from '../atoms/Button';

const Form = ({ onChange, onSubmit, value, name, id, autoSuggested}) => {
    return (
        <Wrapper>
            <Input name={name} id={id} value={value} onChange={onChange} placeholder="Search" />
            {autoSuggested ? autoSuggested.map((fuzzy, priority) => (
                <div key={priority} onSubmit={onSubmit}>{fuzzy.query}</div>

            ))
                : null}

            <Button type="submit">Send</Button>
        </Wrapper>
    );
};

export default Form;
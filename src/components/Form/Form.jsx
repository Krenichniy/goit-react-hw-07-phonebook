import PropTypes from 'prop-types';
import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';

const Form = ({onNotValid }) => {
    const [userName, setName] = useState('');
    const [userTel, setTel] = useState('');
    const dispatch = useDispatch();
 


   const handleChange= (event) => {
        const { name, value } = event.currentTarget;
        name === 'name' ? setName(value) : setTel(value);
    }  

  
    const formValidation = ( event, showMessage)=> {
        event.preventDefault();
        const name = userName;
        const tel = userTel;
        if (!name || !tel) return showMessage('Please fill all fields');
        
        const newContact = { name,tel };
        dispatch(addContact(newContact));
        reset();
    }

    const reset = ()=> {
        setName('');
        setTel('');
    }

        return (
            <>
                <Container>
            <Header>Phonebook</Header>
            <FormContainer onSubmit={(event) => {formValidation(event, onNotValid)}}>
                <LabelContainer >
                    Name
                    <UserInput
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={userName}
                        onChange={handleChange} />
                </LabelContainer>

                <LabelContainer >
                    Phone Number
                    <UserInput
                        type="tel"
                        name="tel"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        title="Tel may contain only numbers. For example 654-59-78"
                        required
                        value={userTel}
                        onChange={handleChange} />
                    </LabelContainer>
                    <StyledBtn type='submit'>Add contact</StyledBtn>
                    </FormContainer>
                    </Container>
                </>
        )
}
    
    Form.propTypes = {
        onNotValid: PropTypes.func.isRequired,
    };
export default Form;
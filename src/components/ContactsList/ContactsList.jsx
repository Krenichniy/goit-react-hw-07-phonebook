
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredList } from 'redux/selectors';
import { Container } from '../Form/Form.styled';
import { StyledItem, StyledName, StyledNumber, StyledBtn } from './Contacts.styled';
import { removeContact } from 'redux/reducer';
import { useCallback } from 'react';
import styled from 'styled-components';

const ContactsList = () => {
    const contacts = useSelector(getFiltredList);
    const dispatch = useDispatch();

    const onRemoveContact = useCallback((id) => {
        dispatch(removeContact(id));
    }, [dispatch])
    return (
            <Container>
        <List>
             {contacts.map((el) => (
                 <StyledItem key={el.id}>
                     <StyledName>{el.name}</StyledName>:    
                     <StyledNumber>{el.tel}</StyledNumber>
                     <StyledBtn onClick={()=> onRemoveContact(el.id)}>Delete contact</StyledBtn>
                     </StyledItem>))}
                </List>
            </Container>
    )
}
const List = styled.div`
         padding:0;
`
export default ContactsList;
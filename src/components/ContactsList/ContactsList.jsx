
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredList } from 'redux/filters/selectors';
import { Container } from '../Form/Form.styled';
import { StyledItem, StyledName, StyledNumber, StyledBtn } from './Contacts.styled';
import { removeContact } from 'redux/contacts/contacts-slice';
import { useCallback } from 'react';
import styled from 'styled-components';
import { fetchContacts } from 'redux/contacts/conatcts-operations';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { getLoader } from 'redux/contacts/contacts-selectors';

const ContactsList = () => {
    const contacts = useSelector(getFiltredList);
    const loader = useSelector(getLoader);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onRemoveContact = useCallback((id) => {
        dispatch(removeContact(id));
    }, [dispatch])
    return (
            <Container>
            <List>
                {loader && <Loader/>}
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
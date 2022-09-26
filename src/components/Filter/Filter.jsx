import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filters/reducer-filter';
import { getFilter } from 'redux/filters/selectors';
import {Container, Header, LabelContainer, UserInput } from '../Form/Form.styled'

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onFilterChange = (event ) => {
        const { value } = event.currentTarget;
        dispatch(setFilter(value));
    }
        return (
            <>
                <Container>
                <Header>Contacts</Header>
                <LabelContainer>Find contacts by Name
            
                <UserInput
                    type="text"
                    name="filter"
                    placeholder='Enter name'
                    value={filter}
                    onChange={onFilterChange} />
                </LabelContainer>
                    </Container>
            </>
        )
}

    
export default Filter;
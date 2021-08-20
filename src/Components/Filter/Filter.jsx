import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getFiltred } from "../../redux/contacts/contactsSelector";
import { RiPhoneFindLine } from "react-icons/ri";
import { FilterContainer, Input, FilterTitle } from "./Filter.styled";
import { setFilter } from "redux/contacts/contactsSlices";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFiltred);

  return (
    <FilterContainer>
      <FilterTitle>
        <RiPhoneFindLine color='#c21111e2'></RiPhoneFindLine>
        Find contacts by name
      </FilterTitle>
      <Input
        type='text'
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder='enter name'
      />
    </FilterContainer>
  );
}
Filter.propTypes = {
  filter: PropTypes.string,
};

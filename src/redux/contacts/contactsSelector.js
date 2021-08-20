import { createSelector } from "@reduxjs/toolkit";

export const getError = (state) => state.error;

export const getLoading = (state) => state.isLoading;

export const getFiltred = (state) => state.filter;

export const getContactsList = (state) => state.contacts.items;

export const getFiltredContacts = createSelector(
  [getFiltred, getContactsList],
  (filter, contacts) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizeFilter) ||
        number.includes(normalizeFilter)
    );
  }
);

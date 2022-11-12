import { FC, useReducer, useEffect } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { StateEntries } from './entriesReducer';
import { entriesApi } from '../../apis';
import { useSnackbar } from 'notistack';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: JSX.Element;
}

export const EntriesProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const updatedEntry = async( { _id, description, status }: Entry, showSnackbar = false ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });

      dispatch({ type: StateEntries.UPDATED, payload: data});

      if ( showSnackbar ) {
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        });
      }

    } catch (error) {
      console.log({ error });
    }
  }

  const addNewEntry = async( description: string ) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: StateEntries.ADD, payload: data});
  }

  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: StateEntries.REFRESH_DATA, payload: data })
  }

  useEffect(() => {
    refreshEntries();
  }, [])
  

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updatedEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
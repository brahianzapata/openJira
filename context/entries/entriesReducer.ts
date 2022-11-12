import { EntriesState } from '.';
import { Entry } from '../../interfaces';

export enum StateEntries {
    ADD = '[Entry] - Add-Entry',
    UPDATED = '[Entry] - Updated-Entry',
    REFRESH_DATA = '[Entry] - REFRESH_DATA',
}

type EntriesActionType = 
| { type: StateEntries.ADD, payload: Entry }
| { type: StateEntries.UPDATED, payload: Entry }
| { type: StateEntries.REFRESH_DATA, payload: Entry[] }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType): EntriesState => {
    switch ( action.type ) {
        case StateEntries.REFRESH_DATA:
            return {
                ...state,
                entries: [ ...action.payload ]
            }
        case StateEntries.ADD:
            return {
                ...state,
                entries: [ ...state.entries, action.payload]
            }
        case StateEntries.UPDATED:
            return {
                ...state,
                entries: state.entries.map( entry => {
                    if (entry._id === action.payload._id){
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            }
    default:
        return state;
    }
}
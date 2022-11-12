import { List, Paper } from "@mui/material";
import { EntryCard } from './EntryCard';
import { EntryStatus } from '../../interfaces/entry';
import { DragEvent, FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updatedEntry } = useContext(EntriesContext);
    const { isDragging, endDragging } = useContext( UIContext );
    
    // cuando memorizar los valores cuando las entries cambios y no tener que renderizar el componente
    const entriesByStatus = useMemo( () => 
        entries?.filter( entry => entry.status === status ) , [ entries ]);

    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find( entry => entry._id === id )!;

        entry.status = status;
        updatedEntry(entry);
        endDragging();
    }

    return (
        <div
            onDrop={ onDropEntry }
            onDragOver= { allowDrop }
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper 
                sx={{ 
                    height: 'calc(100vh - 180px)', 
                    backgroundColor: 'transparent',
                    padding: '3px 5px',
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                        width: "3px",
                        bgcolor: "#454545",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "#4a148c",
                        border: "7px none #fffff",
                        borderRadius: "10px",
                    },
                }}
            >

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={entry}/>
                        ))
                    }
                </List>

            </Paper>
        </div>
    )
}

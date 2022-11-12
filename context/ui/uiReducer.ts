import { UIState } from './';

export enum StateUIEnum {
    OPEN = 'UI - Open Sidebar',
    CLOSE = 'UI - Close Sidebar',
    SET_ADD_ENTRY = 'UI - Set isAddingEntry',
    START_DRAGGING = 'UI - Start Dragging',
    END_DRAGGING = 'UI - End Dragging',
}

type UIActionType = 
| { type: StateUIEnum.OPEN }
| { type: StateUIEnum.CLOSE }
| { type: StateUIEnum.SET_ADD_ENTRY, payload: boolean }
| { type: StateUIEnum.START_DRAGGING }
| { type: StateUIEnum.END_DRAGGING }

export const uiReducer = ( state: UIState, action: UIActionType): UIState => {
   switch ( action.type ) {
        case StateUIEnum.OPEN:
            return {
                ...state,
                sidemenuOpen: true,
            }
        case StateUIEnum.CLOSE:
            return {
                ...state,
                sidemenuOpen: false,
            }
        case StateUIEnum.SET_ADD_ENTRY:
            return {
                ...state,
                isAddingEntry: action.payload,
            }
        case StateUIEnum.START_DRAGGING:
            return {
                ...state,
                isDragging: true,
            }
        case StateUIEnum.END_DRAGGING:
            return {
                ...state,
                isDragging: false,
            }
        default:
            return state;
    }
}
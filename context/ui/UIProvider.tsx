import { FC, useReducer } from 'react';
import { StateUIEnum, UIContext, uiReducer } from './';
export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface Props {
  children: JSX.Element;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: StateUIEnum.OPEN });
  }

  const closeSideMenu = () => {
    dispatch({ type: StateUIEnum.CLOSE });
  }

  const setIsAddingEntry = ( isAddingEntry: boolean ) => {
    dispatch({ type: StateUIEnum.SET_ADD_ENTRY, payload: isAddingEntry });
  }

  const startDragging = () => {
    dispatch({ type: StateUIEnum.START_DRAGGING });
  }

  const endDragging = () => {
    dispatch({ type: StateUIEnum.END_DRAGGING });
  }


  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
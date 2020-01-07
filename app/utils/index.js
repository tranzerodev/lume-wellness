import { CMS_API_URL } from '../configs';

const defaultState = {
  isLoading: false,
  isLoaded: false,
  error: null,
};

// Handles isLoading, isLoaded, error flags
export const createLoaderReducers = ({
  initialState = defaultState,
  requestActions = [],
  successActions = [],
  failActions = [],
  resetActions = [],
}) => {
  const isLoading = (state = initialState.isLoading, action) => {
    if (requestActions.includes(action.type)) {
      return true;
    }
    if (
      successActions.includes(action.type) ||
      failActions.includes(action.type)
    ) {
      return false;
    }
    if (resetActions.includes(action.type)) {
      return initialState.isLoading;
    }

    return state;
  };

  const isLoaded = (state = initialState.isLoaded, action) => {
    if (successActions.includes(action.type)) {
      return true;
    }
    if (
      requestActions.includes(action.type) ||
      failActions.includes(action.type)
    ) {
      return false;
    }
    if (resetActions.includes(action.type)) {
      return initialState.isLoaded;
    }

    return state;
  };

  const error = (state = initialState.error, action) => {
    if (failActions.includes(action.type)) {
      return {
        message: action.error.message,
        code: action.error.code,
      };
    }

    if (
      requestActions.includes(action.type) ||
      successActions.includes(action.type)
    ) {
      return null;
    }
    
    if (resetActions.includes(action.type)) {
      return initialState.error;
    }

    return state;
  };

  return {
    isLoading,
    isLoaded,
    error,
  };
};

export const getAssetsAPI = path => `${CMS_API_URL}${path}`;

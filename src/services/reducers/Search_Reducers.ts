import {SEARCH_CITY} from '../constants/Search';

const INIT_STATE = {
  searchResults: null,
  searchResultsLoading: false,
  searchResultsLoadingError: null,
};
export default function(state = INIT_STATE, action: any) {
  switch (action.type) {
    case SEARCH_CITY: {
      return {
        ...state,
        searchResultsLoading: true,
      };
    }
    default: {
      return state;
    }
  }
}

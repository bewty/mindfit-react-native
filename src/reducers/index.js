import { combineReducers } from 'redux';
import FetchMediaUrl from './reducer_fetch_media_url.js';
import FetchEntry from './reducer_fetch_entry.js';
// import EntrySelected from './reducer_entry_selected.js';

const rootReducer = combineReducers({
  entries: FetchEntry,
  // entrySelected: EntrySelected,
  mediaUrl: FetchMediaUrl,
});

export default rootReducer;

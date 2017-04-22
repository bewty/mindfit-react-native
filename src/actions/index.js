export const FETCH_ENTRY = 'FETCH_ENTRY';
export const ENTRY_SELECTED = 'ENTRY_SELECTED';
export const FETCH_MEDIA_URL = 'FETCH_MEDIA_URL';

export function fetchEntry(entries) {
  return {
    type: FETCH_ENTRY,
    payload: entries
  };
}

export function selectEntry(entry) {
  return {
    type: ENTRY_SELECTED,
    payload: entry
  };
}

export function fetchMediaUrl(url) {
  return {
    type: FETCH_MEDIA_URL,
    payload: url
  };
}

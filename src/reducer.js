export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   "BQBElYSApYvHm2eg9Yqok7879p4HPrTu207hoxvETvDAuklvgXEAXeuJOFr2uILUZcD-vapu4ESl-uDyIKieQVxuLmksyBf2DSxkg5W6ClHEEtSs93RsZ7iwFDbYyrkjRZCkN7XM33iQQjlX8ZjETElujDB1ClPL7zB1sCGbEqenYliTQ5X5",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const DELETING_SMURF = "DELETING_SMURF";
export const DELETED_SMURF = "DELETED_SMURF";
export const DELETE_ERROR = "DELETE_ERROR";

// const URL = 'http://localhost:3333/smurfs/';

export const fetchSmurfs = () => {
  // const smurfGet = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get("http://localhost:3333/smurfs")
    // smurfGet
      .then(response => {
        console.log(response);
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addNewSmurf = smurf => dispatch => {
  // const smurfPost = axios.post(`${URL}`, smurf);
  dispatch({ type: ADDING_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
  // smurfPost
    .then(response => {
      dispatch({ type: SMURF_ADDED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_ERROR, payload: err });
    });
};

export const deleteSmurf = id => {
  // const smurfDelete = axios.delete(`${URL}`, id)
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
    // smurfDelete
      .then(response => {
        dispatch({ type: DELETED_SMURF, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_ERROR, payload: err.message });
      });
  };
};

import {
  createAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "redaxios";

const URL = "http://localhost:8080";
export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    currentProject: {},
    message: "",
    loading: false,
  },

  reducers: {
    getProjects: (state, action) => {
      state.projects = action.payload;
    },
    // pass in the id
    getOneProject: (state, action) => {
      state.currentProject = action.payload;
    },
    loadingProject: (state, action) => {
      state.loading = action.payload;
    },
    projectError: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  getProjects,
  getOneProject,
  loadingProject,
  projectError,
} = projectSlice.actions;

export function GetProjectsThunk() {
  return (dispatch) => {
    axios
      .get(URL + "/api/projects")
      .then((response) => {
        let data = response.data;
        console.log("getting projects thunk", data);
        // dispatch(getProjects(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(projectError(error));
      });
  };
}

export function GetOneProjectThunk(id) {
  return (dispatch) => {
    axios
      .get(`${URL}/api/projects/${id}`)
      .then((response) => {
        let data = response.data;
        console.log("GRABBING PROJECT IN THUNK", data);
        //   dispatch(getOneProject(data))
      })
      .catch((error) => {
        console.log(error);
        dispatch(projectError(error));
      });
  };
}

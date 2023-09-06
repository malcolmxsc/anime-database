import React, { useContext, useReducer, useState,createContext } from 'react';

// actions

const loading = 'loading';
const get_popular_anime = 'get_popular_anime';


//reducer
const reducer = (state, action) => {
  switch (action.type){
    case loading:
      return {...state, loading: true}
    case get_popular_anime:
      return {...state, popularAnime: action.payload,loading: false}
    default:
      return state;
  }
  
}

const GlobalAnime = createContext()

export const GlobalAnimeProvider = ({ children }) => {
  const baseUrl = 'https://api.jikan.moe/v4'
  const initialState = {
    popularAnime: [],
    pictures: [],
    loading: false
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  // fetch popular anime
  const getPopularAnime = async () => {
    dispatch({type: loading})
    const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`)
    const data = await response.json()
    console.log(data.data)
    dispatch({type: get_popular_anime, payload: data.data})
  }

  //initial render

  React.useEffect(() => {
    getPopularAnime();

  }, [])

  return (
    <GlobalAnime.Provider value={{
      ...state,
    }}>
      {children}
    </GlobalAnime.Provider>
  );
};

export const useGlobalAnime = () => {
  return useContext(GlobalAnime);
}
import React from 'react'
import { useGlobalAnime } from '../GlobalAnimeProvider'
import { Link } from 'react-router-dom'

function Hot() {
    const {popularAnime,isSearch} = useGlobalAnime()

    const conditionalRender = () => {
        if (!isSearch) {
            return popularAnime.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt =""/>
                </Link>
            })
        
        }
    }
    return (
        <div>
            <div className='popular-anime'>
                {conditionalRender()}
            </div>
        </div>
    )
}

export default Hot
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AnimeItem() {
    const {id} = useParams()
    
    //state 
    const [anime,setAnime] = React.useState([])
    const [characters, setCharacters] = React.useState([])
    const[showMore, setShowMore] = React.useState(false)


    // destruct anime

    const {title,synopsis,trailer
          ,duration,aired,season,
          images,rank,score,scored_by
          ,popularity,status,rating,source,episodes} = anime
    // get anime by id
    const getAnime = async(anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        //plug data
        setAnime(data.data)
        console.log(data.data)
    }

    useEffect(() =>{
        getAnime(id)
    },[])

    return (
        <div>
            <h1>{title}</h1>
            <div className="details">
                <div className="detail">
                    <div className="image">
                       <img src={images?.jpg.large_image_url} alt="" /> 
                    </div>
                    <div className="anime-details">
                        <p><span>Aired: </span><span>{aired?.string}</span></p>
                        <p><span>Rating: </span><span>{rating}</span></p>
                        <p><span>Rank: </span><span>{rank}</span></p>
                        <p><span>Score: </span><span>{score}</span></p>
                        <p><span>Popularity: </span><span>{popularity}</span></p>
                        <p><span>Status: </span><span>{status}</span></p>
                        <p><span>Season: </span><span>{season}</span></p>
                        <p><span>Duration: </span><span>{duration}</span></p>
                        <p><span>Episodes: </span><span>{episodes}</span></p>
                    </div>
                </div>
                <p className="description">
                    {showMore ? synopsis : synopsis?.substring(0,350) + '...'}
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less' : 'Show More'}  </button>
                </p>
            </div>
        </div>
    )

}




export default AnimeItem 
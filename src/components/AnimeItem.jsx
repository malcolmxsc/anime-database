import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled  from 'styled-components'

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

    // find characters
    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)

    }


    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    },[])

    return (
        <AnimeItemStyled>
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
            <h3 className="title">Preview</h3>
            <div className="trailer-container">
                {trailer?.embed_url &&
                <iframe src={trailer?.embed_url} 
                width='800'
                height="400"
                title={title} 
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>}
            </div>
            <h3 className="characters">Characters</h3>
        </AnimeItemStyled>
    )

}


const AnimeItemStyled = styled.div`
    padding: 3rem 18rem;
    background-color: #EDEDED;
    h1 {
        display: inline-block;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        cursor: pointer;
        background: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .5s ease-in-out;
        &:hover{
            transform: skew(-4deg);
        }
    }

    .title {
        margin: 3rem 0;
        font-size: 2rem;
        cursor: pointer;
        background: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .5s ease-in-out;
        

    }

    .description {
        margin-top: 2rem;
        color: #6c7983;
        line-height: 1.7rem;

        button{
            background-color: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: #27AE60;
            font-weight: 600;
        }
    }

    .trailer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        iframe{
            padding: 1.25rem;
            outline: none;
            border: 5px solid #e5e7eb;
            border-radius: 10px;
            background-color: #FFFFFF;
        }


    }

    .details {
        background-color: #fff;
        padding: 2rem;
        border: 5px solid #e5e7eb;
        border-radius: 20px;

        .detail {
            display: grid;
            grid-template-columns: repeat(2,1fr);

            img {
                border-radius: 7px;
            }

        }
        .anime-details {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p {
                display: flex;
                gap: .25rem;
            }
            p span:first-child{
                font-weight: 600;
                color: #454e56;
            }
        }
        

    }


`;

export default AnimeItem 
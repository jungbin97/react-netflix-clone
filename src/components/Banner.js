import React, { useEffect, useState } from 'react'
import requests from '../api/requests';
import axios from '../api/axios';
import "./Banner.css";

export default function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정볼르 가져오기 (여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);
        
        // 여러 영화 중 영화 하나의 아이디를 랜덤으로 가져오기
        const movieId = 
        request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        // 특정 영화의 더 상세한 정보 가져오기(비디오 정보 포함)
        const {data : movieDetail} = await axios.get(`movie/${movieId}`, {
            params: {append_to_response: "videos"}
        });
        setMovie(movieDetail);
    };

    const truncate = (str, n) => {
        // 선택적 체이닝 (?.) 연산자가 지원되지 않음 => str이 null, undefined
        if(!str) return "";
        return str.length > n ? str.substr(0, n-1) + "..." : str;
    };


    return (
        <header
            className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            <div className='banner__contens'>
                <h1 className='banner__title'>
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button play'>
                        Play
                    </button>
                    <button className='banner__button info'>
                        <div className='space'></div>More Information
                    </button>
                </div>
                <h1 className='banner__description'>{truncate(movie.overview, 200)}</h1>
            </div>
            <div className='banner--fadeBottom'/>
        </header>
    )
}

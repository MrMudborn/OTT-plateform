export interface Genres {
    id: number
    name: string
}

export interface Results {
    adult: boolean
    backdrop_path: string
    genre_ids: []
    id: number
    media_type: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
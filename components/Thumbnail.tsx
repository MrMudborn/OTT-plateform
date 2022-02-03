import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Results } from '../utilities/typing'

interface Props {
  result: Results
}

const Thumbnail = ({ result }: Props) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  const router = useRouter()

  return (
    <div
      className="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105"
      onClick={() => router.push(`/media/${result.id}`)}
    >
      <Image
        priority
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="p-2 ">
        <p className="max-w-md truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`} &#xb7;{' '}
          {result.release_date} &#xb7; <ThumbUpIcon className="mx-2 h-5" />{' '}
          {result.vote_count}
        </p>
      </div>
    </div>
  )
}

export default Thumbnail

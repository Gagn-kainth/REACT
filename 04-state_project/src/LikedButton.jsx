import {useState} from 'react'

function LikedButton() {
    const [liked, setLiked] = useState(false);

  return (
      <>
        <button onClick={() => setLiked(!liked)}>
          {liked ? " ❤️liked" : "🤍like"} Text
        </button>
        </>
  )
}

export default LikedButton
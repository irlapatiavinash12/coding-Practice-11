// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, onImageContent} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} =
    eachThumbnail
  const onThumbNailImage = () => {
    onImageContent(id)
  }
  return (
    <li className="list-styling">
      <button className="button-styling">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbNail-image-styling"
          onClick={onThumbNailImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

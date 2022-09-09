// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listDetails} = props
  const {title, description, publishedDate} = listDetails

  return (
    <li className="item">
      <div className="title-date">
        <h1 className="title">{title} </h1>
        <p className="date">{publishedDate} </p>
      </div>
      <p className="description">{description} </p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem

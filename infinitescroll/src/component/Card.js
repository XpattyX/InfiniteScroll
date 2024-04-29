import './Card.css'

const Card = ({ post }) => {
    return (
      <div className='card'>
          <h2>{post.description}</h2>
          <a href={`${post.url}`}>Click Here for more</a>
          <div className="types">
            <h4>Type </h4>
            <span>{post.types}</span>
          </div>
          <div className="topics">
            <h4>Topic </h4>
            <span>{post.topics[0]}</span>
            <span>{post.topics[1]}</span>
            <span>{post.topics[2]}</span>
          </div>
      </div>
    );
  };
  
export default Card;

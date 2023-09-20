import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostThumb = ({ posts, result }) => {
    const { theme } = useSelector(state => state)

    if (result === 0) return <h2 className="text-center text-danger">Pas de publication</h2>

    return (
        <div>
            <div className="card-title mt-2 mr-2"  >
                 
            <h5 className="card-title" style={{ color: 'blue', marginRight: '1px'}}>Explorez plus de voitures</h5>

                    
            </div>




            <div className="post_thumb mb-2">
                {
                    posts.map(post => (
                        <Link key={post._id} to={`/post/${post._id}`}>
                            <div className="post_thumb_display">

                                {
                                    post.images[0].url.match(/video/i)
                                        ? <video controls src={post.images[0].url} alt={post.images[0].url}
                                            style={{ filter: theme ? 'invert(1)' : 'invert(0)' }} />

                                        : <img src={post.images[0].url} alt={post.images[0].url}
                                            style={{ filter: theme ? 'invert(1)' : 'invert(0)' }} />
                                }

                                <div className="post_thumb_menu">
                                    <i className="far fa-heart" style={{ color: 'red', cursor: 'pointer', marginRight: '5px', transform: 'scale(1.2)' }}>{post.likes.length}</i>
                                    <i className="far fa-comment" style={{ color: 'red', cursor: 'pointer', marginRight: '5px', transform: 'scale(1.2)' }}>{post.comments.length}</i>
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </div></div>
    )
}

export default PostThumb

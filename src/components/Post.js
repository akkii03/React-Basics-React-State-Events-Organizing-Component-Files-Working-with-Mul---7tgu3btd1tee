import React from 'react'
const Post = ({title,body,id}) => {
    return (
        <div className="post" key={"post"+id}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export { Post }

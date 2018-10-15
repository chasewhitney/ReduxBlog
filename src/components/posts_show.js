import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost } from '../actions';
import { deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  deletePost(id){
    console.log(`in deletePost (component) with id: ${id}`);
    this.props.deletePost(id);
  }
  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to='/'>Back to index</Link>
        <div className="text-xs-right">
          <button className="btn btn-primary" onClick={() => deletePost(post.id)}>
            Delete Post
          </button>
        </div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
};


function mapStateToProps({posts}, ownProps){
  return { post: posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost : fetchPost, deletePost : deletePost })(PostsShow);

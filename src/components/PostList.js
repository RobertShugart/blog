import React from "react";
import { conntect } from "react-redux";
import { fetchPost } from "../actions";
import { connect } from "http2";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(
  null,
  { fetchPost }
)(PostList);

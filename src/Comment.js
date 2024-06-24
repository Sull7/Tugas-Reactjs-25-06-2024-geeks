import React, { Component } from "react";
import { Comment, Header } from "semantic-ui-react";
import { faker } from "@faker-js/faker";

class CommentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          avatar: faker.image.avatar(),
          author: "Samsul",
          date: "Yesterday at 02:30AM",
          text: "HAII",
        },
        {
          avatar: faker.image.avatar(),
          author: "Erik",
          date: faker.date.recent().toLocaleDateString(),
          text: "Good Game",
        },
        {
          avatar: faker.image.avatar(),
          author: "Udin",
          date: "Today at 12:30AM",
          text: "Love Udin",
        },
      ],
    };
  }

  renderComments() {
    return this.state.comments.map((comment, index) => (
      <Comment key={index}>
        <Comment.Avatar src={comment.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{comment.author}</Comment.Author>
          <Comment.Metadata>
            <div>{comment.date}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    ));
  }

  render() {
    return (
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {this.renderComments()}
      </Comment.Group>
    );
  }
}

export default CommentExample;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class AppItem extends React.Component {
    render = () => {
      var app = this.props.app;
      return (
        <Card theme="ios" themeVariant="light">
          <Card.Content>
            <img
              alt="example"
              className="md-img"
              src={app.image}
              draggable="false"
            />
            <Card.Title>{app.title}</Card.Title>
            <Card.Subtitle>{app.dev}</Card.Subtitle>
            <div className="md-rank">
              {app.rank}
              <span className="mbsc-ic mbsc-ic-star3"></span>
            </div>
            <Button href={app.pdf} variant="outline-primary">
              Download Pdf
            </Button>
          </Card.Content>
        </Card>
      );
    };
  }

  export default AppItem;
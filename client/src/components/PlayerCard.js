import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const PlayersCard = ({players}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{players.name}</CardTitle>
        </CardBody>
        <CardBody>
          <CardText>{players.country}</CardText>
          <CardText>{players.searches}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlayersCard;
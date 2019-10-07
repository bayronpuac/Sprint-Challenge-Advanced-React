import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const PlayersCard = ({players}) => {
  return (
        <div className="player-card">
          <Card>
            <CardBody>
              <CardTitle>Name of Player: {players.name}</CardTitle>
            </CardBody>
            <CardBody>
              <CardText>Palyer's Country: {players.country}</CardText>
              <CardText># of searches: {players.searches}</CardText>
            </CardBody>
          </Card>
        </div>
  );
};

export default PlayersCard;
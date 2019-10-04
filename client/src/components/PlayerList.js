import React from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

class PlayerList extends React.Component {
    state = {
        players: []
    };

    componentDidMount() {
        axios
        .get("http://localhost:5000/api/players")
        .then (res => {
            console.log(res);
            this.setState({
                players: res.data
            });
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="players">
                {this.state.players.map( players => {
                    return (
                        <div>
                            <PlayerCard players={players} />;
                        </div>
                    )
                })}
            </div>
        )
    }
}
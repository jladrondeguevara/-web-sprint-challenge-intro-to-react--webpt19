import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';

const Character = (character) => {
    console.log(character.characters);
    return (
        // <div className = "character-container">
        //     <h2>{character.props.name}</h2>
        // </div>
        <CardColumns>
      <Card>
        <CardImg top width="20%" src={character.props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Name: {character.props.name}</CardTitle>
          <CardSubtitle>Gender: {character.props.gender}</CardSubtitle>
          <CardText>Created: {character.props.created}</CardText>
          <CardText>Located in {character.props.location.name}, this character is {character.props.status}.</CardText>

        </CardBody>
      </Card>
    </CardColumns>
    )

}

export default Character;

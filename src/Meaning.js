import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          {" "}
          <strong>Definition:</strong> <br />
          {props.meaning.definition}
        </p>
        <em> {props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}

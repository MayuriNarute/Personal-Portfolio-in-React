
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from 'axios';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const Quote = ({maxLength}) => {
    const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random?tags=success');
        const originalQuote = response.data.content;
        const truncatedQuote = originalQuote.length > maxLength ? originalQuote.slice(0, maxLength) : originalQuote;

        setRandomQuote(truncatedQuote);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);
    return(
        <>
<div class="alert alert-primary alert-dismissible fade show" role="alert">
  {randomQuote}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</>
    )
}
export default Quote;
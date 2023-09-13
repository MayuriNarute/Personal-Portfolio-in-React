
import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from 'axios';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const Quote = () => {
    
    return(
        <>
  <img style={{justifyContent:'center'}} src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light" />
        </>
    )
}
export default Quote;
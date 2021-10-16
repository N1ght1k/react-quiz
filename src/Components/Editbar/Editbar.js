import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';


const Editbar = (props) => {
	return (
		<div>
			<Link className="m-2" to={'editQuiz/' + props.quizId} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEdit} /></Link>
			<Link className="m-2" to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEye} /></Link>
			<Link className="m-2" to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTrashAlt} /></Link>
		</div>
	)
}

export default Editbar


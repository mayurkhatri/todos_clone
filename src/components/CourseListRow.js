import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseListRow = ({course}) => {
  return(
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td>{course.authorId}</td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
}

export default CourseListRow;
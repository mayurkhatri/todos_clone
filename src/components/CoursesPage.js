import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: {title: ""}
    // };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSaveData = this.onClickSaveData.bind(this);
  }

  // onTitleChange(event){
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }

  // onClickSaveData(){
  //   //alert(`Saving ${this.state.course.title}`);
  //   //this.props.dispatch(courseActions.createCourse(this.state.course));
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: (course) => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
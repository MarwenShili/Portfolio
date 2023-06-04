// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";

// Custom Actions


// START IMPORT ACTIONS
import ProjectsActions from "../redux/actions/ProjectsActions";

// END IMPORT ACTIONS

/** APIs

* actionsProjects.create
*	@description CRUD ACTION create
*
* actionsProjects.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsProjects.get
*	@description CRUD ACTION get
*	@returns projects
*

**/

class ProjectsEdit extends Component {
  // Init projects
  constructor(props) {
    super(props);
    this.state = {
      projects: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsProjects.loadProjects(this.props.match.params.id);
    }
    
  }

  // Insert props projects in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      projects: props.projects
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.projects._id) {
      this.props.actionsProjects.saveProjects(this.state.projects).then(data => {
        this.props.history.push("/projectses/");
      });
    } else {
      this.props.actionsProjects.createProjects(this.state.projects).then(data => {
        this.props.history.push("/projectses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Projects Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="description"
            label="Description"
            value={this.state.projects.description || ""}
            onChange={Utils.handleChange.bind(this, "projects")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.projects.name || ""}
            onChange={Utils.handleChange.bind(this, "projects")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="tasks"
            label="Tasks"
            value={this.state.projects.tasks || ""}
            onChange={Utils.handleChange.bind(this, "projects")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="technos"
            label="Technos"
            value={this.state.projects.technos || ""}
            onChange={Utils.handleChange.bind(this, "projects")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="time"
            label="Time"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.projects.time
                ? new Date(this.state.projects.time)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "projects", "time")}
            fullWidth
            autoOk
            disableFuture
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/projectses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsProjects: bindActionCreators(ProjectsActions, dispatch),
  };
};

// Validate types
ProjectsEdit.propTypes = { 
  actionsProjects: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    projects: state.ProjectsEditReducer.projects
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsEdit);

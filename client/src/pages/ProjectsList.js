// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import ProjectsActions from "../redux/actions/ProjectsActions";

// END IMPORT ACTIONS

/** APIs

* actionsProjects.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsProjects.list
*	@description CRUD ACTION list
*	@returns ARRAY OF projects
*

**/


class ProjectsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsProjects.loadProjectsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsProjects.deleteProjects(this.state.idDelete).then(data => {
      this.props.actionsProjects.loadProjectsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "description",
        type: "string",
        label: "Description"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "tasks",
        type: "custom",
        label: "Tasks"
      }, 
      {
        id: "technos",
        type: "custom",
        label: "Technos"
      }, 
      {
        id: "time",
        type: "date",
        label: "Time"
      },
    ];
    const link = "/projectses/";

    return (
      <div>
        <h1>Projects List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Tasks</TableCell>
              <TableCell align="right">Technos</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/projectses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.description }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.tasks }</TableCell>
                <TableCell align="right">{ row.technos }</TableCell>
                <TableCell align="right">{ row.time }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/projectses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
ProjectsList.propTypes = { 
  actionsProjects: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ProjectsListReducer.listProjects
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);

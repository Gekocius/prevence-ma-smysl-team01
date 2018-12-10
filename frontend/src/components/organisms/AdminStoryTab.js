import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
import { getAdminStories } from '../../services/AdminStories/reducer';
import { startFetchStories } from '../../services/AdminStories/actions'

export class AdminStoryTabRaw extends Component {

  componentDidMount(){
    this.props.startFetchStories();
  }
  render() {
    const { stories } = this.props;
    console.log(this.props);
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Jméno a věk pacienta</th>
            <th>Upravit</th>
            <th>Odstranit</th>
          </tr>
        </thead>
        <tbody>
          {stories.map( item => (
            <tr key={item.IDStory}>
              <th scope="row">{item.IDStory}</th>
              <td>{item.Name}, {item.Age}</td>
              <td><a href=""><i class="material-icons" id="cssFooterArrow">create</i></a></td>
              <td><a href=""><i class="material-icons" id="cssFooterArrow">delete</i></a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  const stories = getAdminStories(state.adminStories);

  return {
    stories,
  };
};

const mapDispatchToProps = {
  startFetchStories
}

export const AdminStoryTab = connect(mapStateToProps, mapDispatchToProps)(AdminStoryTabRaw);
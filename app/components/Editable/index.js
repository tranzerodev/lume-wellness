/**
 *
 * Editable
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EditableButton = styled.button`
	z-index: 1000 !important;
	background-color:blue;
	top: 0px;
	left: 0px;
	height: 100px;
	width: 100px;
`

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<b> Editing Section </b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight="true"
        styles={{ sidebar: { background: "white"}}}
      >
        <EditableButton onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </EditableButton>
      </Sidebar>
    );
  }
}

export default Editable;

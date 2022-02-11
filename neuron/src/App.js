import React from 'react';
import Modal from 'react-modal';
import './App.css';
// Custom Neuron Elements
import NeuronStatus from './neuron-elements/status';
import NeuronList from './neuron-elements/list';
import NeuronTitleCard from './neuron-elements/title-card';
import NeuronCard from './neuron-elements/card';
import NeuronCardTag from './neuron-elements/card-tag';
import NeuronAssignee from './neuron-elements/assignee';
//
import './data-managment/data-manager';
import ReactModal from 'react-modal';


function App() {
  return (
    <div className="grid-wrapper">
      <div className="navigation">
        <p>Navigation</p>

        <script defer src="info/status.js"></script>
        <span className="status">
          <a id="status-title">
            <NeuronStatus />
          </a>
        </span>

      </div>
      <div className="body">
        <div className="left-panel">
          <div className="left-panel upper">

          </div>
          <div className="left-panel mid">

          </div>
          <div className="left-panel lower">
            
          </div>
        </div>

        <div className="main-panel">
          <div className="content" id='lists'>
            <NeuronList title="List with Cards" >
              <NeuronTitleCard title="Test" />
              <NeuronCard title="First Card">
                <NeuronCardTag tag="Testing" />
              </NeuronCard>
              <NeuronCard title="Second Card">
                <NeuronCardTag tag="User Interface" />
              </NeuronCard>
              <NeuronCard title="Third Card">
                <NeuronCardTag tag="Ready for Production" />
                <NeuronCardTag tag="GUI" />

                <NeuronAssignee avatar="https://avatars.githubusercontent.com/u/96695272?s=400&u=f3b8efc18259ced75af323ab6a281068a7ba74fa&v=4" />
              </NeuronCard>
            </NeuronList>
          </div>
        </div>

      </div>

      <ReactModal />
    </div>
  );
}

export default App;

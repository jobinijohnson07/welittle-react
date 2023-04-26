import React, { Component } from 'react';
import './sidebar.css';
import WeLogo from '../../Assets/welogo.svg';
import DashboardIcon from '../../Assets/dashboardicon.svg';
import Consult from '../../Assets/consult.svg';
import Patient from '../../Assets/patient.svg';
import Revenue from '../../Assets/revenue.svg';
import Stoke from '../../Assets/stoke.svg';
import Enquires from '../../Assets/enquires.svg';
import Feedback from '../../Assets/feedback.svg';
import Dashboard from '../Dashboard/dashboard';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
  
  render() {
   return(   
    <div>
      <div class="d-flex align-items-start p-2">
        <div class="nav flex-column nav-pills sidebar-background" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link" 
            id="v-pills-home-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-home" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-home" 
            aria-selected="true">
            <div className="sidelogo-imgcontent">
              <img className="sidelogo-img" src={WeLogo} alt="sidelogo" />
            </div>
          </button>
          <button class="nav-link active" 
            id="v-pills-messages-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-messages" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-messages" 
            aria-selected="false">
            <div className="imgside-content"><img className="sidebaricon-imgcontent mr-1" src={DashboardIcon} alt="dashboardIcon" />Dashboard</div>
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-settings" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <div className="imgsides-content"><img className="sidebar-imgcontent mr-1" src={Consult} alt="dashboardIcon" />Consultations</div>
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-testtube" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
             <div className="imgsides-content"><img className="sidebar-imgcontent mr-1" src={Patient} alt="dashboardIcon" />Patient Summary</div>
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-grid" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <div className="imgsides-content"><img className="sidebar-imgcontent mr-1" src={Revenue} alt="dashboardIcon" />Revenue</div>
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-charts" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <div className="imgsides-content"><img className="sidebar-imgcontent mr-1" src={Stoke} alt="dashboardIcon" />Stock management</div>
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-computer" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <div className="imgsides-content"><img className="sidebar-imgcontent mr-1" src={Enquires} alt="dashboardIcon" />Enquiries</div>
          </button>
          <button class="nav-link" 
            id="v-pills-settings-tab" 
            data-bs-toggle="pill" 
            data-bs-target="#v-pills-computer" 
            type="button" 
            role="tab" 
            aria-controls="v-pills-settings" 
            aria-selected="false">
            <div className="imgsides-content"><img className="sidebar-imgcontent mr-1" src={Feedback} alt="dashboardIcon" />Feedback</div>
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade" 
            id="v-pills-home" 
            role="tabpanel" 
            aria-labelledby="v-pills-home-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-profile" 
            role="tabpanel" 
            aria-labelledby="v-pills-profile-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade show active"
            id="v-pills-messages" 
            role="tabpanel" 
            aria-labelledby="v-pills-messages-tab" 
            tabindex="0">
              <Dashboard />
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-settings-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade"   
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-testube-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-grid-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-charts-tab" 
            tabindex="0">
          </div>
          <div class="tab-pane fade" 
            id="v-pills-settings" 
            role="tabpanel" 
            aria-labelledby="v-pills-computer-tab" 
            tabindex="0">
          </div>
        </div>
      </div>
    </div>   
   );
  }
}
export default withRouter(Sidebar);
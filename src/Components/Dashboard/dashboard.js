import React from 'react';
import './dashboard.css';
import  PatientImg  from '../../Assets/dashboard/patientImg.svg';
import AppoinmentImg from '../../Assets/dashboard/appoinmentImg.svg';
import upcomingimg from '../../Assets/dashboard/upcomingImg.svg';
import {Stackedchart} from '../../widgets/stackedBarChart/stackedBarChart';
import FirstFeedback from '../../Assets/dashboard/40.svg';
import SecondFeedback from '../../Assets/dashboard/10.svg';
import ThirdFeedback from '../../Assets/dashboard/20.svg';
import FourthFeedback from '../../Assets/dashboard/18.svg';
import FifthFeedback from '../../Assets/dashboard/1.svg';
import Inventory from '../../Assets/dashboard/inventory.svg';
import FirstEllipse from '../../Assets/dashboard/firstellipse.svg';
import SecondEllipse from '../../Assets/dashboard/secondellipse.svg';
import ThirdEllipse from '../../Assets/dashboard/thirdellipse.svg';

function dashboard() {
const cards = [
    {
        name:'Patient',
        count:'1068',
        img:PatientImg,
        id:'patient'
    },
    {
        name:'Appoinment',
        count:'856',
        img:AppoinmentImg,
        id:'appoinment'
    },
    {
        name:'Upcoming',
        count:'56',
        img:upcomingimg,
        id:'upcoming'
    }
]
const data = [ {
    "labels" :[
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ],
    "datasets": [
      {
        "label": "Pre KYC Prep Complete",
        "backgroundColor": "#7764E4",
        "data": [20, 10, 30, 15, 40, 20, 60],
        "maxBarThickness": 15
      },
      {
        "label": "Review Not Completed",
        "backgroundColor": "#FB6340",
        "data": [ 20,  25, 10, 30, 15, 40 ],
        "maxBarThickness": 15
      },
      {
        "label": "Review Completed",
        "backgroundColor": "#FEB969",
        "data": [20,  25, 10, 30, 15, 40],
        "maxBarThickness": 15,
        "maxBarHeight":90
      }
    ]
  }];
  return (
    <div className="dashboard-section">
      hi
      <div className="dashboard-row">
        <div className="dashboard-content">Dashboard</div>
        <div class="btn-group">
          <select className="dropdown-content">
            <option value="volvo">All Clinic</option>
          </select>
        </div>
        <div class="btn-group">
          <select className="dropdown-content">
            <option value="volvo">This year</option>
          </select>
        </div>
      </div>
      <div className='card-section'>
        {cards.map((card)=>{
            return (
                <div className={`card card-${card.id}`}>
                    <div className='card-wrapper'>
                        <img className='img' src={card.img} alt={card.name} />
                        <div className='card-content'>
                          <p className='card-name'>{card.name}</p>
                          <p className="card-count">{card.count}</p>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
      <div className='stacked-chart'>
        <Stackedchart data={data} />
      </div>
      <div className="dashboard-row">
        <div className="feedback-card">
          <div className="feedback-content">Feedback</div>
          <div className="dashboard-row">
            <img className="feedback-imgcontent" src={FirstFeedback} alt="firstFeedback" />
            <img className="feedback-imgcontent" src={SecondFeedback} alt="secondFeedback" />
            <img className="feedback-imgcontent" src={ThirdFeedback} alt="thirdFeedback" />
            <img className="feedback-imgcontent" src={FourthFeedback} alt="fourthFeedback" />
            <img className="feedback-imgcontent" src={FifthFeedback} alt="fifthFeedback" />
          </div>
        </div>
        <div className="inventory-card">
          <div className="dashboard-row">
            <div>
              <div className="feedback-content">Inventory</div>
              <img src={Inventory} alt="inventory" />
            </div>
            <div className="inventory-secondcontent">
              <img className="ellipse-imgcontent" src={FirstEllipse} alt="firstEllipse" />
              <div className="ellipse-valuescontent">420<span className="stock-content">In stock</span></div>
              <img className="ellipse-imgcontent" src={SecondEllipse} alt="secondEllipse" />
              <div className="ellipse-valuescontent">200<span className="stock-content">Ordered</span></div>
              <img className="ellipse-imgcontent" src={ThirdEllipse} alt="thirdEllipse" />
              <div className="ellipse-valuescontent">100<span className="stock-content">Out stock</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard

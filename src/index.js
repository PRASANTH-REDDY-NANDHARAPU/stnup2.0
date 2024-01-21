import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Body from './body';
import { Outlet } from 'react-router';
import Contact from './contact';
import RoadMap from './roadmap';
import Courses from './courses';
import FeedBack from './feedback';
import Authentication from './signIn';
import { createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router'
import { Provider} from 'react-redux';
import appStore from './utils/appStore';
import Browse from './browse';
import Recordings from './recordings';
import Assignments from './assignments';
import Resume from './resume'
import Payment from './payment'
import Interview from './interview'
import MbNav from './mbNav';
const AppLayout=()=>{
  return (
    <Provider store={appStore}>
     <Navbar/>
     <MbNav/>
     <Outlet/>
  </Provider>
  )
}
const ways=createBrowserRouter(
  [
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Body/>
        },
        {
          path:'/signin',
          element:<Authentication/>
        },
        {
          path:'/courses',
          element:<Courses/>
        },
        {
          path:'/roadmap',
          element:<RoadMap/>
        },
        {
          path:'/feedbacks',
          element:<FeedBack/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
        ]

    },
    {
      path:'/browse',
      element:<Browse/>,
      children:[
        {
          path:'/browse',
          element:<Recordings/>,
          
        },
        {
          path:'/browse/assignments',
          element:<Assignments/>,
        },
        {
          path:'/browse/resume',
          element:<Resume/>,
        },
        {
          path:'/browse/interview',
          element:<Interview/>,
        },
        {
          path:'/browse/payment',
          element:<Payment/>,
        },
      ]
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);


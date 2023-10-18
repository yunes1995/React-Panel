import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./sideBar.css"
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";

const options = [
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
  },
  //   {
  //     name: 'Disable backdrop',
  //     scroll: false,
  //     backdrop: false,
  //   },
  //   {
  //     name: 'Enable body scrolling',
  //     scroll: true,
  //     backdrop: false,
  //   },
  //   {
  //     name: 'Enable both scrolling & backdrop',
  //     scroll: true,
  //     backdrop: true,
  //   },
];

function OffCanvasExample({ name, scroll, backdrop, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const offCanvasProps = {
    scroll: scroll ? backdrop ? 'false' : 'true' : undefined,
    backdrop: backdrop ? 'true' : undefined,
  };

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2 btnShow">
        show dashboard
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} {...offCanvasProps}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                  <Link to="/" className='link'>
                    <li className="sidebarListItem active">
                      <LineStyleIcon className="sidebarIcon" />
                      Home
                    </li>
                  </Link>
                  <li className="sidebarListItem">
                    <TimelineIcon className="sidebarIcon" />
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <TrendingUpIcon className="sidebarIcon" />
                    Sales
                  </li>
                </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                  <Link to="/users" className='link'>
                    <li className="sidebarListItem">
                      <PermIdentityIcon className="sidebarIcon" />
                      Users
                    </li>
                  </Link>
                  <Link to="/newuser" className='link'>
                    <li className="sidebarListItem">
                      <PermIdentityIcon className="sidebarIcon" />
                      New User
                    </li>
                  </Link>

                  <Link to="/products" className='link'>
                  <li className="sidebarListItem">
                    <StorefrontIcon className="sidebarIcon" />
                    Products
                  </li>
                  </Link>
                  <li className="sidebarListItem">
                    <AttachMoneyIcon className="sidebarIcon" />
                    Transactions
                  </li>
                  <li className="sidebarListItem">
                    <BarChartIcon className="sidebarIcon" />
                    Reports
                  </li>
                </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <MailOutlineIcon className="sidebarIcon" />
                    Mail
                  </li>
                  <li className="sidebarListItem">
                    <DynamicFeedIcon className="sidebarIcon" />
                    Feedback
                  </li>
                  <li className="sidebarListItem">
                    <ChatBubbleOutlineIcon className="sidebarIcon" />
                    Messages
                  </li>
                </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <WorkOutlineIcon className="sidebarIcon" />
                    Manage
                  </li>
                  <li className="sidebarListItem">
                    <TimelineIcon className="sidebarIcon" />
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <ReportIcon className="sidebarIcon" />
                    Reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default Example;

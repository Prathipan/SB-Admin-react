import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Sidebar = () => {
    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    const [showPage,setShowPage] = useState(false);
    const [toggle,setToggle] = useState(false)
  return (
    <>
    
        <ul className={toggle ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled" : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"} id="accordionSidebar">

            
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

             
            <hr className="sidebar-divider my-0" />
 
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
 
            <hr className="sidebar-divider" />
 
            <div className="sidebar-heading">
                Interface
            </div>
 
            <li className="nav-item">
                <Link className="nav-link" onClick={() => setOpen(!open)} data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </Link>
                {
                    open ? <div id="collapseTwo" className="collapse show"><div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <Link className="collapse-item" to="/portal/buttons">Buttons</Link>
                    <Link className="collapse-item" to="/portal/cards">Cards</Link>
                </div></div> : <></>
                }
                    
                {/* </div> */}
            </li>
 
            <li className="nav-item">
                <Link className="nav-link" onClick={() => setOpen1(!open1)} data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </Link>
                {
                    open1 ? <div id="collapseUtilities" className="collapse show" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link className="collapse-item" to="/portal/colors">Colors</Link>
                    </div>
                </div> : <></>
                }
            </li>
 
            <hr className="sidebar-divider" />
 
            <div className="sidebar-heading">
                Addons
            </div>
 
            <li className="nav-item">
                <a className="nav-link collapsed" onClick={() => setShowPage(!showPage)} data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                {showPage ? <div id="collapsePages" className="collapse show" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link className="collapse-item" to="/login">Login</Link>
                        <Link className="collapse-item" to="/register">Register</Link>
                        <Link className="collapse-item" to="/forgot-password">Forgot Password</Link>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Link className="collapse-item" to="/404">404 Page</Link>
                        <Link className="collapse-item" to="/blank-page">Blank Page</Link>
                    </div>
                </div> : <></>}
            </li>
 
            {/* <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>
 
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li> */}
 
            <hr className="sidebar-divider d-none d-md-block" />
 
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" onClick={() => setToggle(!toggle)} id="sidebarToggle"></button>
            </div>
 
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    </>
  )
}

export default Sidebar
import React, { useEffect } from 'react'
import RolUsuario from '../../components/roles/RolUsuario'
import { Link } from 'react-router-dom'
import jQuery from 'jquery'

import { useSelector } from 'react-redux'
import Avatar from '../../components/Avatar'

const UserRole = () => {
    const { auth } = useSelector(state => state)
    

    useEffect(() => {

        jQuery(function ($) {

            $(".sidebar-dropdown > a").click(function () {
                $(".sidebar-submenu").slideUp(200);
                if (
                    $(this)
                        .parent()
                        .hasClass("active")
                ) {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                        .parent()
                        .removeClass("active");
                } else {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                        .next(".sidebar-submenu")
                        .slideDown(200);
                    $(this)
                        .parent()
                        .addClass("active");
                }
            });

            $("#close-sidebar").click(function () {
                $(".page-wrapper").removeClass("toggled");
            });
            $("#show-sidebar").click(function () {
                $(".page-wrapper").addClass("toggled");
            });
        });
    }, [])

    const avatarSrc = auth?.user?.avatar;
    const username = auth?.user?.username;
    const role = auth?.user?.role || "Unknown Role"; // Valor predeterminado si role no está presente


   


    return (
        <div className="  sidebaraprove page-wrapper chiller-theme toggled" >

            <button id="show-sidebar" className="btn btn-sm btn-dark"  >
                <i className="fas fa-bars" />
            </button>

            <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
              <span style={{ fontSize: '1.5rem' }}>Tassili</span>
            </Link>
            <div id="close-sidebar">
            <i className="fas fa-bars" style={{ color: 'red', fontSize: '1.5rem' }} />



            </div>
          </div>
          <div className="sidebar-header" style={{ marginTop: '20px' }}>
            <div className="user-pic">
              {avatarSrc && <Avatar src={avatarSrc} className="img-responsive img-rounded" />}
            </div>
            <div className="user-info" style={{ marginTop: '10px' }}>
              <span className="user-name" style={{ color: '#fff', fontSize: '1.2rem' }}>
                {username && <strong>{username}</strong>}
              </span>
              <br />
              <strong>
                <span className="user-name" style={{ color: '#f39c12', fontSize: '1rem' }}>
                  Role : {role}
                </span>
              </strong>
            </div>
          </div>

          <div>
            <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => window.location.reload()}>Recevoir de nouveaux articles</button>

          </div>

          <div className="sidebar-menu" style={{ paddingTop: '20px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li className="header-menu" style={{ marginBottom: '10px', color: 'white', fontSize: '18px' }}>
                Outils d'administration
              </li>
              <li className="sidebar-dropdown" style={{ marginBottom: '10px' }}>
                <Link to="/administracion/postspendientes" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-chart-line" style={{ fontSize: '20px', marginRight: '10px' }} />
                  <span style={{ fontSize: '16px' }}>Approbation automobiles</span>
                </Link>
              </li>
              <li className="sidebar-dropdown" style={{ marginBottom: '10px' }}>
                <Link to="/pages/users/usersposts" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-chart-line" style={{ fontSize: '20px', marginRight: '10px' }} />
                  <span style={{ fontSize: '16px' }}>Liste d'utilisateur</span>
                </Link>
              </li>
              <li className="sidebar-dropdown" style={{ marginBottom: '10px' }}>
                <Link to="/pages/bloqueos/blockcomments" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-chart-line" style={{ fontSize: '20px', marginRight: '10px' }} />
                  <span style={{ fontSize: '16px' }}>Bloquer commentaires</span>
                </Link>
              </li>
              <li className="sidebar-dropdown" style={{ marginBottom: '10px' }}>
                <Link to="/pages/roles/userRole" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-chart-line" style={{ fontSize: '20px', marginRight: '10px' }} />
                  <span style={{ fontSize: '16px' }}>Attribuer des rôles</span>
                </Link>
              </li>
              <li className="sidebar-dropdown" style={{ marginBottom: '10px' }}>
                <Link to="/pages/bloqueos/blockposts" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-chart-line" style={{ fontSize: '20px', marginRight: '10px' }} />
                  <span style={{ fontSize: '16px' }}>Bloquer publication</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

           
            <main className="page-content">
                <div className="container-fluid">






                    <RolUsuario   />









                </div>

            </main>
      





        </div>
    )
}

export default UserRole
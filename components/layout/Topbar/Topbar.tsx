"use client";

import "./Topbar.css";

interface TopbarProps{

    onToggleSidebar:()=>void;

}

export default function Topbar({

    onToggleSidebar

}:TopbarProps){

    return(

        <header className="topbar">

            <div className="topbarLeft">

                <button
                    className="menuButton"
                    onClick={onToggleSidebar}
                >

                    ☰

                </button>

                <div className="welcome">

                    <h2>

                        Bienvenido, Andrés 👋

                    </h2>

                    <span>

                        Panel de administración

                    </span>

                </div>

            </div>

            <div className="topbarRight">

                <button className="iconButton">

                    🔔

                </button>

                <button className="iconButton">

                    ⚙️

                </button>

                <div className="topbarUser">

                    <div className="avatar">

                        A

                    </div>

                    <div className="userInfo">

                        <strong>

                            Andrés

                        </strong>

                        <small>

                            Administrador

                        </small>

                    </div>

                </div>

            </div>

        </header>

    );

}
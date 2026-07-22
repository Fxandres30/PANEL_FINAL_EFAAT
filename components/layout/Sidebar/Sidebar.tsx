"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./Sidebar.css";

interface SidebarProps{

    open:boolean;

    onClose:()=>void;

}

export default function Sidebar({

    open,

    onClose

}:SidebarProps){

    const pathname=usePathname();

    const menu=[

        {
            titulo:"Principal",
            items:[
                {
                    href:"/dashboard",
                    icon:"🏠",
                    label:"Dashboard"
                }
            ]
        },

        {
            titulo:"Bot",
            items:[
                {
                    href:"/sesiones",
                    icon:"📱",
                    label:"Sesiones"
                },
                {
                    href:"/eventos",
                    icon:"🎯",
                    label:"Eventos"
                },
                {
                    href:"/reservas",
                    icon:"🎟️",
                    label:"Reservas"
                }
            ]
        },

        {
            titulo:"Clientes",
            items:[
                {
                    href:"https://panel-api-v1.vercel.app/admin/chats",
                    icon:"💬",
                    label:"Chats"
                },
                {
                    href:"/clientes",
                    icon:"👥",
                    label:"Clientes"
                }
            ]
        },

        {
            titulo:"Sistema",
            items:[
                {
                    href:"/reportes",
                    icon:"📊",
                    label:"Reportes"
                },
                {
                    href:"/configuracion",
                    icon:"⚙️",
                    label:"Configuración"
                }
            ]
        }

    ];

    return(

        <aside

            className={

                open

                    ? "sidebar open"

                    : "sidebar"

            }

        >

            <div className="sidebarHeader">

                <div className="logoCircle">

                    E

                </div>

                <div>

                    <h2>

                        EFAAT

                    </h2>

                    <span>

                        Bot Manager

                    </span>

                </div>

            </div>

            {

                menu.map(grupo=>(

                    <div

                        key={grupo.titulo}

                        className="menuGroup"

                    >

                        <p className="menuTitle">

                            {grupo.titulo}

                        </p>

                        {

                            grupo.items.map(item=>(

                                <Link

                                    key={item.href}

                                    href={item.href}

                                    onClick={onClose}

                                    className={

                                        pathname===item.href

                                        ? "menuItem active"

                                        : "menuItem"

                                    }

                                >

                                    <span>

                                        {item.icon}

                                    </span>

                                    <span>

                                        {item.label}

                                    </span>

                                </Link>

                            ))

                        }

                    </div>

                ))

            }

            <div className="sidebarFooter">

                <div className="statusDot"/>

                <div>

                    <strong>

                        Sistema Online

                    </strong>

                    <span>

                        Todo funcionando

                    </span>

                </div>

            </div>

        </aside>

    );

}
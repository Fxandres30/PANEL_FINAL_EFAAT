"use client";

import "./DashboardLayout.css";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {

  return (

    <div className="layout">

      <Sidebar />

      <div className="content">

        <Topbar />

        <main>

          {children}

        </main>

      </div>

    </div>

  );

}
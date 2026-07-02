import "./SessionBotStatus.css";

import {

    FaRobot,

    FaStar,

    FaClock

} from "react-icons/fa";

type Props = {

    activa: boolean;

    principal: boolean;

};

export default function SessionBotStatus({

    activa,

    principal

}: Props) {

    return (

        <div className="session-bot-status">

            {activa && (

                <div className="session-badge bot-active">

                    <FaRobot />

                    <span>Bot activo</span>

                </div>

            )}

            {principal && (

                <div className="session-badge bot-principal">

                    <FaStar />

                    <span>Principal</span>

                </div>

            )}

            {!activa && !principal && (

                <div className="session-badge bot-waiting">

                    <FaClock />

                    <span>En espera</span>

                </div>

            )}

        </div>

    );

}
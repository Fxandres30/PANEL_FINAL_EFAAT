import "./EventoGrupo.css";

export default function EventoGrupo({

    evento

}){

    return(

        <div className="eventoGrupo">

            <div>

                <span>

                    👥 Grupo

                </span>

                <strong>

                    {

                        evento.grupo_nombre ||

                        evento.grupo_id

                    }

                </strong>

            </div>

            <div>

                <span>

                    🆔 ID

                </span>

                <small>

                    {evento.grupo_id}

                </small>

            </div>

        </div>

    );

}
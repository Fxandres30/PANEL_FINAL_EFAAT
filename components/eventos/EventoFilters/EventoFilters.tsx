import "./EventoFilters.css";

export default function EventoFilters(){

    return(

        <div className="eventoFilters">

            <input

                placeholder="Buscar evento..."

            />

            <select>

                <option>

                    Todos

                </option>

                <option>

                    Activos

                </option>

                <option>

                    Finalizados

                </option>

            </select>

        </div>

    );

}
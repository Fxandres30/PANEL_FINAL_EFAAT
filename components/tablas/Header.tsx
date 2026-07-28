interface Props {

    precio: number;

    grupo?: string;

    evento?: string;

    hora?: string;

}

export default function Header({

    precio,

    grupo = "Sin grupo",

    evento = "Sin evento",

    hora = "--:--"

}: Props) {

    return (

        <div className="bg-white border rounded-2xl shadow-sm p-6">

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-4xl font-bold">

                        💰 Tabla ${precio.toLocaleString()}

                    </h1>

                    <p className="mt-2 text-gray-500">

                        Administra las reservas de esta dinámica.

                    </p>

                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

                    🟢 Activa

                </span>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">

                <div>

                    <p className="text-gray-500 text-sm">

                        Grupo

                    </p>

                    <h3 className="font-bold text-lg">

                        {grupo}

                    </h3>

                </div>

                <div>

                    <p className="text-gray-500 text-sm">

                        Evento

                    </p>

                    <h3 className="font-bold text-lg">

                        {evento}

                    </h3>

                </div>

                <div>

                    <p className="text-gray-500 text-sm">

                        Hora

                    </p>

                    <h3 className="font-bold text-lg">

                        {hora}

                    </h3>

                </div>

            </div>

        </div>

    );

}
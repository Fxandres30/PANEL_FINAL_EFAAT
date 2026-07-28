interface Numero {

    estado: string;

    pagado: boolean;

}

interface Props {

    numeros: Numero[];

}

export default function Estadisticas({

    numeros

}: Props) {

    const libres = numeros.filter(

        n => n.estado === "libre"

    ).length;

    const reservados = numeros.filter(

        n => n.estado === "reservado"

    ).length;

    const pagados = numeros.filter(

        n => n.pagado

    ).length;

    return (

        <div className="grid grid-cols-4 gap-5">

            <div className="bg-green-500 text-white rounded-2xl p-5 shadow">

                <p className="text-sm opacity-80">

                    Libres

                </p>

                <h2 className="text-4xl font-bold">

                    {libres}

                </h2>

            </div>

            <div className="bg-yellow-500 text-white rounded-2xl p-5 shadow">

                <p className="text-sm opacity-80">

                    Reservados

                </p>

                <h2 className="text-4xl font-bold">

                    {reservados}

                </h2>

            </div>

            <div className="bg-red-600 text-white rounded-2xl p-5 shadow">

                <p className="text-sm opacity-80">

                    Pagados

                </p>

                <h2 className="text-4xl font-bold">

                    {pagados}

                </h2>

            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-5 shadow">

                <p className="text-sm opacity-80">

                    Total

                </p>

                <h2 className="text-4xl font-bold">

                    {numeros.length}

                </h2>

            </div>

        </div>

    );

}
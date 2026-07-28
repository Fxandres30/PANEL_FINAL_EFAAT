import Grid from "@/components/tablas/Grid";
import Botones from "@/components/tablas/Botones";
import { obtenerTabla } from "@/services/tablas/obtenerTabla";

interface Props {
    params: Promise<{
        precio: string;
    }>;
}

export default async function TablaPage({ params }: Props) {

    const { precio } = await params;

    const numeros = await obtenerTabla(Number(precio));

    return (

        <main className="max-w-7xl mx-auto p-8 space-y-8">

            <div className="flex justify-between items-center">

                <h1 className="text-4xl font-bold">
                    Tabla ${precio}
                </h1>

                <Botones
                    precio={Number(precio)}
                />

            </div>

            {

                numeros.length === 0 ? (

                    <div className="border rounded-xl p-10 text-center">

                        <h2 className="text-2xl font-bold mb-4">

                            La tabla está vacía

                        </h2>

                        <p className="text-gray-500 mb-8">

                            Presiona <b>Reiniciar</b> para crear automáticamente
                            los números del 00 al 99.

                        </p>

                    </div>

                ) : (

                    <Grid
                        numeros={numeros}
                    />

                )

            }

        </main>

    );

}
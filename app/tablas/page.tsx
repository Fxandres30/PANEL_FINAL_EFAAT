import Header from "@/components/tablas/Header";
import Botones from "@/components/tablas/Botones";
import Estadisticas from "@/components/tablas/Estadisticas";
import Grid from "@/components/tablas/Grid";

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

            <Header
                precio={Number(precio)}
                grupo="Rifas Medellín"
                evento="Sin evento"
                hora="--:--"
            />

            <Estadisticas
                numeros={numeros}
            />

            <Botones
                precio={Number(precio)}
            />

            <Grid
                numeros={numeros}
            />

        </main>

    );

}
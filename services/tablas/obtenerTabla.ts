import { supabase } from "@/lib/supabase";

const TABLAS: Record<number, string> = {
    1000: "reservas_2_cifras_1000",
    2000: "reservas_2_cifras_2000",
    3000: "reservas_2_cifras_3000",
    5000: "reservas_2_cifras_5000",
    10000: "reservas_2_cifras_10000"
};

export async function obtenerTabla(precio: number) {

    const tabla = TABLAS[precio];

    if (!tabla)
        throw new Error("Tabla no encontrada.");

    const { data, error } = await supabase
        .from(tabla)
        .select("*")
        .order("numero", { ascending: true });

    if (error)
        throw error;

    return data;

}
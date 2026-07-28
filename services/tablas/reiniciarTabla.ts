import { supabase } from "@/lib/supabase";

const TABLAS: Record<number, string> = {
    1000: "reservas_2_cifras_1000",
    2000: "reservas_2_cifras_2000",
    3000: "reservas_2_cifras_3000",
    5000: "reservas_2_cifras_5000",
    10000: "reservas_2_cifras_10000"
};

export async function reiniciarTabla(precio: number) {

    const tabla = TABLAS[precio];

    if (!tabla) {
        throw new Error("Tabla no encontrada.");
    }

    // Verificar si existen registros
    const { count, error: errorCount } = await supabase
        .from(tabla)
        .select("*", {
            count: "exact",
            head: true
        });

    if (errorCount) {
        throw errorCount;
    }

    // Si está vacía, crear 00-99
    if ((count ?? 0) === 0) {

        const numeros = [];

        for (let i = 0; i < 100; i++) {

            numeros.push({

                numero: i.toString().padStart(2, "0"),

                estado: "libre",

                comprador: null,
                contacto: null,
                contacto_lower: null,

                lib: null,

                grupo_id: null,
                grupo_nombre: null,

                evento_id: null,
                nombre_evento: null,

                usuario_id: null,
                telefono_bot: null,

                fecha_reserva: null,
                hora_reserva: null,

                fecha_pago: null,
                hora_pago: null,

                pagado: false,

                temporal_por: null,
                bloqueado_hasta: null,

                ip_reserva: null,

                notas: null,

                creado_en: new Date().toISOString(),
                actualizado_en: new Date().toISOString()

            });

        }

        const { error } = await supabase
            .from(tabla)
            .insert(numeros);

        if (error) {
            throw error;
        }

        return true;
    }

    // Si ya existe, reiniciar la tabla
    const { error } = await supabase
        .from(tabla)
        .update({

            estado: "libre",

            comprador: null,
            contacto: null,
            contacto_lower: null,

            lib: null,

            grupo_id: null,
            grupo_nombre: null,

            evento_id: null,
            nombre_evento: null,

            usuario_id: null,
            telefono_bot: null,

            fecha_reserva: null,
            hora_reserva: null,

            fecha_pago: null,
            hora_pago: null,

            pagado: false,

            temporal_por: null,
            bloqueado_hasta: null,

            ip_reserva: null,

            notas: null,

            actualizado_en: new Date().toISOString()

        })
        .not("id", "is", null);

    if (error) {
        throw error;
    }

    return true;
}
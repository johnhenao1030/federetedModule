import React from "react";

// Asegúrate de que el componente acepte props
const FederatedComponent = (props) => {
    // Utiliza JSON.stringify para convertir el objeto EVENTO en una cadena de texto formateada
    // Asegúrate de que props.EVENTO exista antes de intentar mostrarlo
    const eventoString = props.EVENTO ? JSON.stringify(props.EVENTO, null, 2) : "No hay evento disponible";

    return (
        <div>
            Este es nuestro primer microfrontend / prueba 1
            {/* Muestra el JSON formateado dentro de un <pre> para mejor legibilidad */}
            <pre>{eventoString}</pre>
        </div>
    );
};

export default FederatedComponent;

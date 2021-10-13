import react, { Fragment } from "react";
import {revisaPresupuesto} from '../Helpers'

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>

            <div className={revisaPresupuesto (presupuesto, restante)} >
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}

export default ControlPresupuesto;
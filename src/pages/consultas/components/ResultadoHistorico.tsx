import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GridRow } from 'src/components/ui/Bootstrap';
import { ResultConsultaHistorico } from 'src/types';
import moment from 'moment';
/**
 * Fecha pago
 * Fecha captura labbs
 * Estado
 */
interface ResultadoHistoricoViewProps {
  result: ResultConsultaHistorico | undefined;
  goBackClick: () => void;
}

const formatDate = (date: Date) => {
  return moment(date).format('MM/DD/YYYY');
};
const ResultadoHistoricoView = ({
  result,
  goBackClick
}: ResultadoHistoricoViewProps) => {
  return (
    <>
      <GridRow>
        <div className="col-md-12">
          <Link
            to="/consulta/historico"
            onClick={goBackClick}
            style={{ float: 'right' }}
          >
            <FaArrowLeft /> Volver a consulta
          </Link>
        </div>
      </GridRow>
      <GridRow>
        {/* <div className="col-md-6">
          <TextInputField
            label="Nombre"
            value={result?.NombrePersona}
            disabled={true}
          />
        </div>

        <div className="col-md-6">
          <TextInputField
            label="Apellido"
            value={result?.ApellidoPerson}
            disabled={true}
          />
        </div> */}

        <div className="col-md-12">
          <br />
          <h6 className="h6">Resultado de busqueda</h6>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Fecha Pago</th>
                <th>Fecha Captura Labbs</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {result?.HistoricoPagoLabbs.length == 0 ? (
                <tr>
                  <td colSpan={3} className="center-content">
                    No se han encontrado registros (favor verifique la
                    información suministrada)
                  </td>
                </tr>
              ) : (
                result?.HistoricoPagoLabbs.map(
                  ({ Estado, FechaLabbs, FechaPago }) => {
                    return (
                      <tr>
                        <td>{formatDate(FechaPago)}</td>
                        <td>{formatDate(FechaLabbs)}</td>
                        <td>{Estado}</td>
                      </tr>
                    );
                  }
                )
              )}
            </tbody>
          </table>
        </div>
      </GridRow>
    </>
  );
};

export default ResultadoHistoricoView;

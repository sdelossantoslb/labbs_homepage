import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import FormContent from 'src/components/form';
import { GridRow } from 'src/components/ui/Bootstrap';
import TextInputField from 'src/components/ui/TextInput';
import useNotification from 'src/hooks/useNotification';
import { PostConsultaHistorico } from 'src/types/index';
interface ConsultaHistoricoProps {
  onFormSubmit: (form: PostConsultaHistorico) => void;
}

const FormConsultaHistorico = ({ onFormSubmit }: ConsultaHistoricoProps) => {
  const notify = useNotification();
  const [consultaForm, setConsultaForm] = useState<PostConsultaHistorico>({
    documento: '',
    reciboPago: '',
    serie: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (consultaForm.serie === null || consultaForm.serie === '') {
      notify.warning('Número de Serie', 'Número de Serie obligatorio');
      return;
    }
    if (consultaForm.documento === null || consultaForm.documento === '') {
      notify.warning('Número de Documento', 'Número de documento obligatorio');
      return;
    }
    if (consultaForm.reciboPago === null || consultaForm.reciboPago === '') {
      notify.warning('Número de Recibo', 'Número de recibo obligatorio');
      return;
    }
    onFormSubmit(consultaForm);
  };

  const handleChange = (e: ChangeEvent<{ name: string; value: string }>) => {
    setConsultaForm({
      ...consultaForm,
      [e.target.name]: [e.target.value.replace(' ', '')]
    });
  };

  return (
    <GridRow>
      <div className="col-md-12">
        <FormContent onSubmit={handleSubmit}>
          <TextInputField
            type="text"
            onChange={handleChange}
            name="serie"
            label="Número de Serie:"
            placeHolder=""
            value={consultaForm.serie}
            smallText="Escriba el número de serie de su arma"
          />
          <TextInputField
            type="text"
            name="documento"
            onChange={handleChange}
            value={consultaForm.documento}
            placeHolder=""
            label="Documento de Identidad:"
            smallText="Escriba su documento de identidad (cedula, RNC, etc)"
          />
          <TextInputField
            type="text"
            name="reciboPago"
            value={consultaForm.reciboPago}
            placeHolder=""
            onChange={handleChange}
            label="Número de Recibo:"
            smallText="Escriba el número del recibo de su ultimo pago"
          />
          <div className="col-md-12">
            <button type="submit" className="default-btn ">
              <FaSearch /> Buscar
            </button>
          </div>
        </FormContent>
      </div>
    </GridRow>
  );
};

export default FormConsultaHistorico;

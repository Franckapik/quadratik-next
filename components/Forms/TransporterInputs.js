import { useEffect } from "react";
import { FormGroup } from "react-bootstrap";

export const TransporterInputs = ({
  register,
  errors,
  setValue,
  nextId,
  unregister,
}) => {
  useEffect(() => {
    setValue("transporter.transporter_id", nextId);
    setValue("invoice.transporter_id", nextId);

    return () => {
      unregister("transporter");
      unregister("invoice.transporter_id");
    };
  }, [setValue, unregister, nextId]);

  return (
    <>
      <Form.Group>
        <Form.Label htmlFor="t_id">Identifiant transporter</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          placeholder={nextId}
          disabled
        ></input>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="t_coldate">Date de départ livraison</Form.Label>
        <Form.Control
          className="form-control"
          type="date"
          {...register("transporter.col_date", { required: true })}
        ></input>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="t_fdp">Frais de ports</Form.Label>
        <Form.Control
          className="form-control"
          type="number"
          {...register("transporter.fdp", { required: true })}
        ></input>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="t_deldate">Date de livraison estimée</Form.Label>
        <Form.Control
          className="form-control"
          type="date"
          {...register("transporter.del_date", { required: true })}
        ></input>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="t_serv">Service de transport</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("transporter.service", { required: true })}
        ></input>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="t_order">Date d'achat de livraison</Form.Label>
        <Form.Control
          className="form-control"
          type="date"
          {...register("transporter.order_date", { required: true })}
        ></input>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="t_ref">Nom de livraison</Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("transporter.reference", { required: true })}
        ></input>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="t_nbcol">Nombre de colis</Form.Label>
        <Form.Control
          className="form-control"
          type="number"
          {...register("transporter.colis_nb", { required: true })}
        ></input>
      </Form.Group>
    </>
  );
};

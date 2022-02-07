import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from "react-bootstrap";

const ModifyCustomerForm = ({ c_selected }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      user_id: c_selected.user_id,
      session_id: c_selected.session_id,
      name: c_selected.name,
      firstname: c_selected.firstname,
      address: c_selected.address,
      postal: c_selected.postal,
      mail: c_selected.mail,
      city: c_selected.city,
      country: c_selected.country,
    },
  });

  const handleRegistration = (data) => console.log(data);

  const handleError = (errors) => console.log("error", errors);

  return (
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="user_id">
          {" "}
          Id{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="number"
          {...register("user_id")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="session_id">
          {" "}
          Session Id{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("session_id")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="c_name">
          {" "}
          Nom{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors.name?.type === "required" && "Un nom est requis"}
        {errors.name?.type === "maxLength" && "Le nom est trop long"}
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="c_firstname">
          {" "}
          Prénom{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("firstname", { required: true, maxLength: 20 })}
        />
        {errors.name?.type === "required" && "Un prénom est requis"}
        {errors.name?.type === "maxLength" && "Le prénom est trop long"}
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="c_address">
          {" "}
          Adresse{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("address", { required: true, maxLength: 150 })}
        />
        {errors.name?.type === "required" && "Une adresse est requise"}
        {errors.name?.type === "maxLength" && "L'adresse est trop longue"}
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="c_postal">
          {" "}
          Postal{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("postal", { required: true, maxLength: 5 })}
        />
        {errors.name?.type === "required" && "Un code postal est requis"}
        {errors.name?.type === "maxLength" && "Le code postal est trop long"}
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="c_mail">
          {" "}
          Mail{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("mail", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
        {errors.name?.type === "required" && "Une adresse mail est requise"}
        {errors.name?.type === "pattern" && "L'adresse mail est erronée"}
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="c_city">
          {" "}
          City{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("city", { required: true, maxLength: 80 })}
        />
        {errors.name?.type === "required" && "Une ville est requise"}
        {errors.name?.type === "maxLength" && "Le nom de ville est trop long"}
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-control-label" htmlFor="c_country">
          {" "}
          Pays{" "}
        </Form.Label>
        <Form.Control
          className="form-control"
          type="text"
          {...register("country", { required: true, maxLength: 20 })}
        />
        {errors.name?.type === "required" && "Un pays est requis"}
        {errors.name?.type === "maxLength" && "Le nom de pays est trop long"}
      </Form.Group>

      <Button>+</Button>
    </Form>
  );
};

export default ModifyCustomerForm;

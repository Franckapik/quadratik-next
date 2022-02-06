import { Button, Form } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";

import CustomerInputs from "./CustomerInputs";

const CustomerForm = ({ customerList }) => {
  const methods = useForm({
    defaultValues: {
      user_id: customerList[customerList.length - 1].user_id + 1,
      session_id: "admin" + "aucuneidee",
    },
  });

  const handleRegistration = (data) => console.log(data);

  const handleError = (errors) => console.log("error", errors);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(handleRegistration, handleError)}>
        <CustomerInputs></CustomerInputs>
        <Button>+</Button>
      </Form>
    </FormProvider>
  );
};

export default CustomerForm;

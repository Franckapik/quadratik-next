import { FormProvider, useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { DeliveryInputs } from "./DeliveryInputs";

const DeliveryForm = ({ deliveryList }) => {
  const nextDeliveryId =
    deliveryList.length &&
    deliveryList[deliveryList.length - 1].delivery_id + 1;

  const methods = useForm({
    defaultValues: {
      delivery: {
        delivery_id: nextDeliveryId,
      },
    },
  });

  const handleRegistration = (data) => console.log(data);

  const handleError = (errors) => console.log("error", errors);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(handleRegistration, handleError)}>
        {/*         <DeliveryInputs nextId={nextDeliveryId}></DeliveryInputs>
         */}{" "}
        <Button>+</Button>
      </Form>
    </FormProvider>
  );
};

export default DeliveryForm;

import useToggle from "hooks/useToggle";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Card,
  CardTitle,
  Form,
  Form,
  InputGroup,
  InputGroupAddon,
} from "react-bootstrap";
import { CollectionForm } from "./CollectionForm";
import { PackagingForm } from "./PackagingForm";
import { PerformanceForm } from "./PerformanceForm";
import { PropertyForm } from "./PropertyForm";

export default function ModifyProductForm({
  p_selected,
  productList,
  collectionList,
  packagingList,
  propertyList,
  performanceList,
}) {
  const nextCollectionId =
    collectionList[collectionList.length - 1].collection_id + 1;
  const nextPerformanceId =
    performanceList[performanceList.length - 1].performance_id + 1;
  const nextPropertyId = propertyList[propertyList.length - 1].property_id + 1;
  const nextPackagingId =
    packagingList[packagingList.length - 1].packaging_id + 1;

  const p = productList.filter((obj) => {
    return obj.product_id === p_selected.product_id;
  });

  const methods = useForm({
    defaultValues: {
      product: {
        product_id: p[0].product_id,
        performance_id: p[0].performance_id,
        name: p[0].name,
        price: p[0].price,
        img: "", //filename error
        stock: p[0].stock,
        collection_id: p[0].collection_id,
        packaging_id: p[0].packaging_id,
        property_id: p[0].property_id,
        product_publish: p[0].product_publish,
      },
    },
  });

  const { register } = methods;

  const [errorsForm, setErrors] = useState();

  const handleRegistration = (data) => console.log(data);

  const handleError = (errors) => {
    console.log(errors);
    setErrors(errors);
  };

  const [newCollection, addCollection] = useToggle();
  const [newPerformance, addPerformance] = useToggle();
  const [newPackaging, addPackaging] = useToggle();
  const [newProperty, addProperty] = useToggle();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(handleRegistration, handleError)}>
        <Form.Group>
          <Form.Label htmlFor="prod_ident">Identifiant produit</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder={p_selected.product_id}
            disabled
          ></input>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="product_name">Nom</Form.Label>
          <Form.Control
            className="form-control"
            {...register("product.name", { required: true, maxLength: 20 })}
          />

          {errorsForm &&
            errorsForm.product &&
            errorsForm.product.name?.type === "required" && (
              <Alert color="warning">Un nom est requis</Alert>
            )}

          {errorsForm &&
            errorsForm.product &&
            errorsForm.product.name?.type === "maxLength" && (
              <Alert color="warning">Le nom est trop long</Alert>
            )}
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="product_price">Prix</Form.Label>
          <Form.Control
            className="form-control"
            type="number"
            {...register("product.price", {
              required: true,
              min: 0,
              max: 1000,
            })}
          />
          {errorsForm &&
            errorsForm.product &&
            errorsForm.product.price?.type === "required" && (
              <Alert color="warning">Un prix est requis</Alert>
            )}
          {errorsForm &&
            errorsForm.product &&
            errorsForm.product.price?.type === "min" && (
              <Alert color="warning">Prix positif seulement</Alert>
            )}
          {errorsForm &&
            errorsForm.product &&
            errorsForm.product.price?.type === "max" && (
              <Alert color="warning">Prix trop important</Alert>
            )}
        </Form.Group>

        <FormGroup
          style={{
            display: !newCollection ? "block" : "none", // toggle the visbility of an input
          }}
        >
          <Form.Label htmlFor="collection_id">Collection</Form.Label>
          <InputGroup>
            <select
              className="form-control"
              type="select"
              {...register("product.collection_id", { required: true })}
            >
              <option disabled selected value="">
                {" "}
                -- Choisir une collection --{" "}
              </option>
              {Array.from(collectionList).map((a, i) => {
                return <option value={a.collection_id}>{a.col_name}</option>;
              })}
            </select>
            <InputGroupAddon addonType="append">
              <Button onClick={addCollection}>+</Button>
            </InputGroupAddon>
          </InputGroup>
          {errorsForm &&
            errorsForm.product &&
            errorsForm.product.collection_id?.type === "required" && (
              <Alert color="warning">Une collection est requise</Alert>
            )}
        </Form.Group>
        {newCollection ? (
          <Card color="info">
            <CardTitle>
              Nouvelle Collection |{" "}
              <small onClick={addCollection}>Collection Existante</small>
            </CardTitle>
            <Card.Body>
              <CollectionForm
                nextId={nextCollectionId}
                errorsForm={errorsForm}
              />
            </Card.Body>
          </Card>
        ) : null}

        <Form.Group>
          <Form.Label htmlFor="product_img">Image</Form.Label>
          <Form.Control
            className="form-control"
            type="file"
            {...register("product.img")}
          />
        </Form.Group>
        {newPerformance ? (
          <Card color="info">
            <CardTitle>
              Nouvelle Performance |{" "}
              <small onClick={addPerformance}>Performance Existante</small>
            </CardTitle>
            <Card.Body>
              <PerformanceForm
                nextId={nextPerformanceId}
                errorsForm={errorsForm}
                register={register}
              />
            </Card.Body>
          </Card>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="product_perf">Performance</Form.Label>
            <InputGroup>
              <select
                className="form-control"
                type="select"
                {...register("product.performance_id", { required: true })}
              >
                <option disabled selected value="">
                  {" "}
                  -- Choisir une performance --{" "}
                </option>

                {Array.from(performanceList).map((a, i) => {
                  return <option value={a.performance_id}>{a.spectre}</option>;
                })}
              </select>
              <InputGroupAddon addonType="append">
                <Button onClick={addPerformance}>+</Button>
              </InputGroupAddon>
            </InputGroup>
            {errorsForm &&
              errorsForm.product &&
              errorsForm.product.performance_id?.type === "required" && (
                <Alert color="warning">Une performance est requise</Alert>
              )}
          </Form.Group>
        )}

        {newPackaging ? (
          <Card color="info">
            <CardTitle>
              Nouveau Packaging |{" "}
              <small onClick={addPackaging}>Packaging Existant</small>
            </CardTitle>
            <Card.Body>
              <PackagingForm
                nextId={nextPackagingId}
                errorsForm={errorsForm}
                register={register}
              />
            </Card.Body>
          </Card>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="product_pack">Packaging</Form.Label>
            <InputGroup>
              <select
                className="form-control"
                type="select"
                {...register("product.packaging_id", { required: true })}
              >
                <option disabled selected value="">
                  {" "}
                  -- Choisir un packaging --{" "}
                </option>

                {Array.from(packagingList).map((a, i) => {
                  return <option value={a.packaging_id}>{a.reference}</option>;
                })}
              </select>
              <InputGroupAddon addonType="append">
                <Button onClick={addPackaging}>+</Button>
              </InputGroupAddon>
            </InputGroup>
            {errorsForm &&
              errorsForm.product &&
              errorsForm.product.packaging_id?.type === "required" && (
                <Alert color="warning">Un packaging est requis</Alert>
              )}
          </Form.Group>
        )}

        {newProperty ? (
          <Card color="info">
            <CardTitle>
              Nouvelle Propriété |{" "}
              <small onClick={addProperty}>Propriété Existante</small>
            </CardTitle>
            <Card.Body>
              <PropertyForm
                nextId={nextPropertyId}
                errorsForm={errorsForm}
                register={register}
              />
            </Card.Body>
          </Card>
        ) : (
          <Form.Group>
            <Form.Label htmlFor="product_prop">Propriétés</Form.Label>
            <InputGroup>
              <select
                className="form-control"
                type="select"
                {...register("product.property_id", { required: true })}
              >
                <option disabled selected value="">
                  {" "}
                  -- Choisir une propriété --{" "}
                </option>

                {Array.from(propertyList).map((a, i) => {
                  return <option value={a.property_id}>{a.type}</option>;
                })}
              </select>
              <InputGroupAddon addonType="append">
                <Button onClick={addProperty}>+</Button>
              </InputGroupAddon>
            </InputGroup>
            {errorsForm &&
              errorsForm.product &&
              errorsForm.product.property_id?.type === "required" && (
                <Alert color="warning">Une propriété est requise</Alert>
              )}
          </Form.Group>
        )}

        <Form.Group>
          <Form.Label htmlFor="product_stock">Stock</Form.Label>
          <select
            className="form-control"
            type="select"
            {...register("product.stock")}
          >
            <option>Disponible</option>
            <option>En cours de fabrication</option>
            <option>En rupture de stock</option>
          </select>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="product_publish">Publication</Form.Label>
          <select
            className="form-control"
            type="select"
            {...register("product.product_publish")}
          >
            <option value="true">Publication en boutique</option>
            <option value="false">Stockage caché</option>
          </select>
        </Form.Group>
        <Button>Modifier</Button>
      </Form>
    </FormProvider>
  );
}

/* {
  defaultValues: {
    product: {
      product_id: nextProductId,
      performance_id: 1,
      name: 'Woodik-7',
      price: 88,
      img: '',
      stock: 'Disponible',
      collection_id: '',
      packaging_id: 1,
      property_id: 1,
      product_publish: false,
    },
    collection: {
      collection_id: '',
      col_name: 'Nouvelle collection',
      desc: 'Description de la collection',
      folder: 'nouvelleCollection',
      col_publish: false,
    },
    performance: {
      performance_id: '',
      desc: 'Description des performances',
      freq_min: '1040',
      freq_max: '2048',
      spectre: '1040-2048 Hz',
    },
    property: {
      property_id: '',
      depth: 100,
      length: 500,
      weight: 2,
      width: 500,
      width_cel: 68,
      area: 4,
      part_nb: 64,
      cel_nb: 49,
      paint: false,
      wood: 'peuplier',
      finish: 'vernis',
    },
    packaging: {
      packaging_id: '',
      length: 500,
      width: 600,
      weight: 4,
      depth: 500,
      price: 3,
      unit: 1,
    },
  },
} */

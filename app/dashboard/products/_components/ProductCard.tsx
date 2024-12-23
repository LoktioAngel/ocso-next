import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="max-w-[350px] mb-10">
      <CardHeader>{product.productName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Nombre del producto: <b>{product.productName}</b>
        </p>
        <p>
          Precio del producto: <b>{product.price}</b>
        </p>
        <p>
          Proveedor: <b>{product.provider.providerName}</b>
        </p>
      </CardBody>
    </Card>
  );
}

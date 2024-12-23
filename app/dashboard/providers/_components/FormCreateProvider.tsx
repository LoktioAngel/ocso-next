import createprovider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider() {
  return (
    <form action={createprovider} className="flex flex-col gap-2 flex-grow-0">
      <h1 className="text-2xl text-white">Crear Proveedor</h1>
      <Input label="Nombre" placeholder="Pecsi" name="providerName" />
      <Input
        label="Correo"
        placeholder="business@pecsi.com"
        name="providerEmail"
      />
      <Input
        label="Número"
        placeholder="444XXXXXX"
        name="providerPhoneNumber"
      />
      <Button color="primary" type="submit">
        Crear Proveedor
      </Button>
    </form>
  );
}

import updateManager from "@/actions/managers/update";
import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";
export default async function FormUpdateManager({
  manager,
}: {
  manager: Manager;
}) {
  const updateManagerwithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
  });
  const stores = await responseStores.json();
  return (
    <form
      action={updateManagerwithId}
      className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2"
    >
      <h1>Actualizar Manager</h1>
      <Input
        required={true}
        isRequired
        label="Nombre completo"
        defaultValue={manager.managerFullName}
        placeholder="Marco Aurelio"
        name="managerFullName"
      />
      <Input
        required={true}
        isRequired
        label="Correo Electronico"
        defaultValue={manager.managerEmail}
        placeholder="manager@ocso.com"
        name="managerEmail"
      />
      <Input
        required={true}
        isRequired
        label="Salario"
        defaultValue={String(manager.managerSalary)}
        placeholder="12000"
        name="managerSalary"
      />
      <Input
        required={true}
        isRequired
        label="Número de teléfono"
        defaultValue={manager.managerPhoneNumber}
        placeholder="4426131618"
        name="managerPhoneNumber"
      />
      <SelectStore
        stores={stores}
        defaultStore={manager?.location?.locationId}
      />
      <Button color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
}

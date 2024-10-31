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
    <form action={updateManagerwithId} className="bg-orange-400 rounded-md">
      <h1>Actualizar Manager</h1>
      <Input
        defaultValue={manager.managerFullName}
        placeholder="Marco Aurelio"
        name="managerFullName"
      />
      <Input
        defaultValue={manager.managerEmail}
        placeholder="manager@ocso.com"
        name="managerEmail"
      />
      <Input
        defaultValue={String(manager.managerSalary)}
        placeholder="12000"
        name="managerSalary"
      />
      <Input
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

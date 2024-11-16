import { LuPlus } from "react-icons/lu";
import FormCreateManager from "./_components/FormCreateManager";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Location } from "@/entities";
import ModalGeneric from "../_components/ModalGeneric";

const ManagersPage = async () => {
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
  });
  const stores: Location[] = await responseStores.json();
  return (
    <ModalGeneric icon={<LuPlus size="20" />}>
      <FormCreateManager stores={stores} />
    </ModalGeneric>
  );
};

export default ManagersPage;

"use client";

import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectStore({
  stores,
  defaultStore,
}: {
  stores: Location[];
  defaultStore: number;
}) {
  const disableStores = stores
    .map((store: Location) => {
      if (store.manager !== undefined && store.locationId !== defaultStore) {
        return String(store.locationId);
      }
    })
    .filter((storeId) => storeId !== undefined);
  return (
    <Select
      label="Tienda"
      name="location"
      defaultSelectedKeys={defaultStore ? [defaultStore] : undefined}
      disabledKeys={disableStores}
    >
      {stores.map((store: Location) => (
        <SelectItem key={store.locationId}>{store.locationName}</SelectItem>
      ))}
    </Select>
  );
}

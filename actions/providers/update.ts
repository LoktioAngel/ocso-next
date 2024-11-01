"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateProvider(
  providerId: string,
  formData: FormData
) {
  let provider: any = {};
  for (const key of formData.keys()) {
    provider[key] = formData.get(key);
  }

  delete provider['$ACTION_REF_0'];
  delete provider['$ACTION_0:1'];
  delete provider['$ACTION_0:0'];

  const response = await fetch(`${API_URL}/providers/${providerId}`, {
    method: "PATCH",
    body: JSON.stringify(provider),
    headers: { ...authHeaders(), "content-type": "application/json" },
  });

  if (response.status === 200) {
    revalidateTag("dashboard:providers");
  }
}

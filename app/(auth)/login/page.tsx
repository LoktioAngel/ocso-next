"use client";
import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [submitting, setSubmtting] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    setSubmtting(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    let authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(authData),
        credentials: "include",
        headers: { "content-type": "application/json" },
      });
      if (response.status === 201) router.push("/dashboard");

      setSubmtting(false);
    } catch (e) {
      setSubmtting(false);
    }
    return;
  };
  return (
    <form
      className="bg-orange-500 px-10 py-2 rounded-md"
      onSubmit={handleSubmit}
    >
      <p className=" text-2xl my-4 text-white">
        Iniciar sesion <span></span>
      </p>
      <div className=" flex flex-col gap-2 my-4 items-center">
        <Input
          label="Email"
          name="userEmail"
          type="email"
          isRequired={true}
          size="sm"
        ></Input>
        <Input
          label="Contraseña"
          type="password"
          name="userPassword"
          isRequired={true}
          size="sm"
        ></Input>
      </div>
      <div className="text-white flex flex-col items-center gap-2">
        <Button color="primary" type="submit" disabled={submitting}>
          {submitting ? "Enviando..." : "Iniciar sesión"}
        </Button>
        <p>
          ¿No tienes cuenta?{" "}
          <Link href={"/signup"} className="text-red-600 underline">
            Registrarse
          </Link>
        </p>
      </div>
    </form>
  );
}

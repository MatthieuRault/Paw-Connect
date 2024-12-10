"use client";

import { createAnimal } from "../../services/Animals";
import { useState, useEffect } from "react";
import { useToast } from "../../context/toastContext";
import Menu from "../dashboard/Menu";
import Image from "next/image";

export function Add() {
  const [userId, setUserId] = useState(null);
  const { showToastMessage } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");

    if (token) {
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      setUserId(decodedPayload.id);
    }
  }, []);

  const validateForm = (formData) => {
    const requiredFields = [
      "name",
      "species",
      "description",
      "gender",
      "availability",
      "location",
      "photo",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData.get(field)
    );

    if (missingFields.length > 0) {
      showToastMessage(
        null,
        false,
        `Les champs suivants sont manquants : ${missingFields.join(", ")}`
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("user_id", userId);

    if (!validateForm(formData)) {
      return;
    }

    const fetchData = async () => {
      const data = await createAnimal(formData);
      if (data) {
        showToastMessage(5, true); // Index of message to display, success
      } else {
        showToastMessage(5, false); // Index of error message to display, error
      }

      return data;
    };

    fetchData();
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Menu />
        <h3 className="font-bold text-2xl mb-6 text-center">
          Ajout d'un animal
        </h3>
        <form
          className="w-full max-w-lg mx-auto space-y-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <Image
              src="/chien.webp"
              alt="Chien"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              width={400}
              height={500}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                type="text"
                className="grow"
                name="name"
                placeholder="Nom de l'animal"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                type="text"
                className="grow"
                name="species"
                placeholder="Espèce de l'animal"
              />
            </label>
          </div>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="grow"
              name="race"
              placeholder="Race de l'animal (optionnel)"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="grow"
              name="description"
              placeholder="Description de l'animal"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <select className="grow" name="gender">
                <option value="">Sexe de l'animal</option>
                <option value="Mâle">Mâle</option>
                <option value="Femelle">Femelle</option>
              </select>
            </label>

            <label className="input input-bordered flex items-center gap-2 w-full">
              <select className="grow" name="availability">
                <option value="">Disponibilité de l'animal</option>
                <option className="" value="true">
                  Disponible
                </option>
                <option value="false">Non disponible</option>
              </select>
            </label>
          </div>

          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="grow"
              name="location"
              placeholder="Localisation de l'animal"
            />
          </label>

          <p className="text-center text-lg">
            {" "}
            <span className="font-bold">Formats acceptés : </span> jpg, jpeg,
            gif et png. Maximum 1MB
          </p>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w "
            name="photo"
            required
          />

          <div className="modal-action mt-6 flex justify-center ">
            <button
              type="submit"
              className="btn bg-primary-color w-full text-2xl  font-bold hover:bg-secondary-color"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

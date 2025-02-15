import { Request, User, Animal } from "../models/associations.js";

// Give all Requests in DB
export const getAllRequests = async (req, res) => {
  const userId = req.user.id;
  const requests = await Request.findAll({
    include: [
      {
        model: User,
        as: "user",
        attributes: ["name"],
      },
      {
        model: Animal,
        as: "animal",
        attributes: ["name"],
      },
    ],
  });
  res.status(200).json({ requests, userId });
};

// Give one request by ID
export const getOneRequest = async (req, res) => {
  const requestId = parseInt(req.params.id);
  const userId = req.user.id;

  if (isNaN(requestId)) {
    return res.status(404).json({
      error: "Request not found. Please verify the provided ID.",
    });
  }

  const request = await Request.findByPk(requestId);

  if (!request) {
    return res
      .status(404)
      .json({ error: "Request not found. Please verify the provided ID." });
  }

  res.status(200).json({ request, userId });
};

// Add a request
export const addRequest = async (req, res) => {
  const { animal_id, date } = req.body;
  const user_id = req.user.id;

  const createdRequest = await Request.create({
    user_id,
    animal_id,
    date,
  });

  res.status(201).json(`Request created with ID: ${createdRequest.id}`);
};

// Update a request
export const updateRequestStatus = async (req, res) => {
  const requestId = parseInt(req.params.id);
  const { status } = req.body;
  const userId = req.user.id;

  const stateStatus = ["Acceptée", "Refusée"];

  // Vérification du statut
  if (status !== stateStatus[0] && status !== stateStatus[1]) {
    return res
      .status(400)
      .json({ error: "The status must be 'Acceptée' or 'Refusée'" });
  }

  const request = await Request.findByPk(requestId);

  if (!request) {
    return res
      .status(404)
      .json({ error: "Request not found. Please verify the provided ID." });
  }

  await request.update({ status });

  // Si la demande est acceptée, mettre à jour l'animal
  if (status === "Acceptée") {
    await Animal.update(
      { availability: false },
      { where: { id: request.animal_id } }
    );
  }

  res.status(200).json({ request, userId });
};

// Delete a request
export const deleteRequest = async (req, res) => {
  const requestId = parseInt(req.params.id);
  const userId = req.user.id;

  const request = await Request.findByPk(requestId);

  if (!request) {
    return res
      .status(404)
      .json({ error: "Request not found. Please verify the provided ID." });
  }

  await request.destroy();

  res.status(204).json({ message: "Request deleted", deletedBy: userId });
};

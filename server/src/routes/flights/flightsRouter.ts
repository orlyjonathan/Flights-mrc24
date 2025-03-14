import express from "express";
import {
  getAllFlights,
  addFlight,
  searchFlightsByDate,
  deleteFlight,
  updateFlight,
  updateAllFlights,
  filterFlights,
  getFlightDestinations,
  getFlightOrigin,
  getFlightById,
} from "../../controllers/flights/flightsCont";

const router = express.Router();

// Get all flights
router.get("/get-all-flights", getAllFlights);
router.post("/add-flight", addFlight);
router.get("/search-flights", searchFlightsByDate);
router.delete("/delete-flight/:flightId", deleteFlight);
router.put("/update-flight/:flightId", updateFlight);
router.put("/update-all-flights", updateAllFlights);
router.get("/filter-flights", filterFlights);
router.get("/flight-destinations", getFlightDestinations);
router.get("/flight-origin", getFlightOrigin);
router.get("/:flightId", getFlightById);

export default router;

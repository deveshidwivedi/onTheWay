const rideModel = require('../models/ride.model');
const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        // Validate pickup coordinates first
        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        if (!pickupCoordinates || isNaN(pickupCoordinates.ltd) || isNaN(pickupCoordinates.lng)) {
            console.error("Invalid pickup coordinates:", pickupCoordinates);
            return res.status(400).json({ message: "Invalid pickup coordinates" });
        }
        console.log(pickupCoordinates);

        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2);
        console.log("Captains in Radius:", captainsInRadius);

        if (captainsInRadius.length === 0) {
            console.warn("⚠ No captains found in radius!");
        }


        const ride = await rideService.createRide({ 
            user: req.user._id, 
            pickup, 
            destination, 
            vehicleType 
        });

        res.status(201).json(ride); 

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};



module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
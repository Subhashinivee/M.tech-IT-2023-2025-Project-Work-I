//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VehicleDetails {
    uint public vehicleId;
    mapping(uint => Vehicle) vehicles;
    mapping(uint => bool) public isDeleted;

    struct Vehicle {
        uint vehicleId;
        uint timestamp;
        string ownerName;
        string licensePlate;
        string make;
        string model;
        uint year;
        string color;
    }

    event VehicleDetails__AddVehicle(
        uint vehicleId,
        uint timestamp,
        string ownerName,
        string licensePlate,
        string make,
        string model,
        uint year,
        string color
    );

    event VehicleDetails__DeleteVehicle(
        uint vehicleId,
        uint timestamp,
        string ownerName,
        string licensePlate,
        string make,
        string model,
        uint year,
        string color
    );

    function addVehicle(
        string memory _ownerName,
        string memory _licensePlate,
        string memory _make,
        string memory _model,
        uint _year,
        string memory _color
    ) public {
        vehicleId++;
        vehicles[vehicleId] = Vehicle(
            vehicleId,
            block.timestamp,
            _ownerName,
            _licensePlate,
            _make,
            _model,
            _year,
            _color
        );

        emit VehicleDetails__AddVehicle(
            vehicleId,
            block.timestamp,
            _ownerName,
            _licensePlate,
            _make,
            _model,
            _year,
            _color
        );
    }

    function deleteVehicle(uint _vehicleId) public {
        require(!isDeleted[_vehicleId], "The vehicle is already deleted");
        Vehicle storage vehicle = vehicles[_vehicleId];

        emit VehicleDetails__DeleteVehicle(
            vehicle.vehicleId,
            block.timestamp,
            vehicle.ownerName,
            vehicle.licensePlate,
            vehicle.make,
            vehicle.model,
            vehicle.year,
            vehicle.color
        );

        isDeleted[_vehicleId] = true;
    }

    function getVehicle(
        uint _vehicleId
    )
        public
        view
        returns (
            uint,            // timestamp
            string memory,   // ownerName
            string memory,   // licensePlate
            string memory,   // make
            string memory,   // model
            uint,            // year
            string memory    // color
        )
    {
        Vehicle storage vehicle = vehicles[_vehicleId];
        return (
            vehicle.timestamp,
            vehicle.ownerName,
            vehicle.licensePlate,
            vehicle.make,
            vehicle.model,
            vehicle.year,
            vehicle.color
        );
    }

    function getVehicleId() public view returns (uint) {
        return vehicleId;
    }

    function getTimeStamp(uint _vehicleId) public view returns (uint) {
        return vehicles[_vehicleId].timestamp;
    }

    function getOwnerName(uint _vehicleId) public view returns (string memory) {
        return vehicles[_vehicleId].ownerName;
    }

    function getLicensePlate(uint _vehicleId) public view returns (string memory) {
        return vehicles[_vehicleId].licensePlate;
    }

    function getMake(uint _vehicleId) public view returns (string memory) {
        return vehicles[_vehicleId].make;
    }

    function getModel(uint _vehicleId) public view returns (string memory) {
        return vehicles[_vehicleId].model;
    }

    function getYear(uint _vehicleId) public view returns (uint) {
        return vehicles[_vehicleId].year;
    }

    function getColor(uint _vehicleId) public view returns (string memory) {
        return vehicles[_vehicleId].color;
    }

    function getDeleted(uint _vehicleId) public view returns (bool) {
        return isDeleted[_vehicleId];
    }
}

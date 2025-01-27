// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VehicleInsuranceRecords {
    uint public recordId;
    mapping(uint => InsuranceRecord) records;
    mapping(uint => bool) public isDeleted;

    struct InsuranceRecord {
        uint recordId;
        uint timestamp;
        string ownerName;
        string licensePlate;
        string vehicleType;
        uint insuredAmount;
        uint insuranceExpiryYear;
        string claimStatus;
    }

    event VehicleInsuranceRecords__AddRecord(
        uint recordId,
        uint timestamp,
        string ownerName,
        string licensePlate,
        string vehicleType,
        uint insuredAmount,
        uint insuranceExpiryYear,
        string claimStatus
    );

    event VehicleInsuranceRecords__DeleteRecord(
        uint recordId,
        uint timestamp,
        string ownerName,
        string licensePlate,
        string vehicleType,
        uint insuredAmount,
        uint insuranceExpiryYear,
        string claimStatus
    );

    function addRecord(
        string memory _ownerName,
        string memory _licensePlate,
        string memory _vehicleType,
        uint _insuredAmount,
        uint _insuranceExpiryYear,
        string memory _claimStatus
    ) public {
        recordId++;
        records[recordId] = InsuranceRecord(
            recordId,
            block.timestamp,
            _ownerName,
            _licensePlate,
            _vehicleType,
            _insuredAmount,
            _insuranceExpiryYear,
            _claimStatus
        );

        emit VehicleInsuranceRecords__AddRecord(
            recordId,
            block.timestamp,
            _ownerName,
            _licensePlate,
            _vehicleType,
            _insuredAmount,
            _insuranceExpiryYear,
            _claimStatus
        );
    }

    function deleteRecord(uint _recordId) public {
        require(!isDeleted[_recordId], "The record is already deleted");
        InsuranceRecord storage record = records[_recordId];

        emit VehicleInsuranceRecords__DeleteRecord(
            record.recordId,
            block.timestamp,
            record.ownerName,
            record.licensePlate,
            record.vehicleType,
            record.insuredAmount,
            record.insuranceExpiryYear,
            record.claimStatus
        );

        isDeleted[_recordId] = true;
    }

    function getRecord(
        uint _recordId
    )
        public
        view
        returns (
            uint,
            string memory,
            string memory,
            string memory,
            uint,
            uint,
            string memory
        )
    {
        InsuranceRecord storage record = records[_recordId];
        return (
            record.timestamp,
            record.ownerName,
            record.licensePlate,
            record.vehicleType,
            record.insuredAmount,
            record.insuranceExpiryYear,
            record.claimStatus
        );
    }

    function getRecordId() public view returns (uint) {
        return recordId;
    }

    function getTimeStamp(uint _recordId) public view returns (uint) {
        return records[_recordId].timestamp;
    }

    function getOwnerName(uint _recordId) public view returns (string memory) {
        return records[_recordId].ownerName;
    }

    function getLicensePlate(uint _recordId) public view returns (string memory) {
        return records[_recordId].licensePlate;
    }

    function getVehicleType(uint _recordId) public view returns (string memory) {
        return records[_recordId].vehicleType;
    }

    function getInsuredAmount(uint _recordId) public view returns (uint) {
        return records[_recordId].insuredAmount;
    }

    function getInsuranceExpiryYear(uint _recordId) public view returns (uint) {
        return records[_recordId].insuranceExpiryYear;
    }

    function getClaimStatus(uint _recordId) public view returns (string memory) {
        return records[_recordId].claimStatus;
    }

    function getDeleted(uint _recordId) public view returns (bool) {
        return isDeleted[_recordId];
    }
}

const VehicleInsuranceRecords = artifacts.require("VehicleInsuranceRecords");

module.exports = function (deployer) {
    deployer.deploy(VehicleInsuranceRecords);
};

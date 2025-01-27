const Web3 = require("web3");
require("dotenv").config();

// Load environment variables
const {
  VEHICLE_CONTRACT_ADDRESS,
  INSURANCE_CONTRACT_ADDRESS,
  VEHICLE_ACCOUNT,
  VEHICLE_PRIVATE_KEY,
  INSURANCE_ACCOUNT,
  INSURANCE_PRIVATE_KEY,
  VEHICLE_RPC,
  INSURANCE_RPC,
} = process.env;

// ABIs of the Vehicle and Insurance contracts
const vehicleABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "vehicleId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ownerName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "licensePlate",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "make",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "model",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "year",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "color",
        "type": "string"
      }
    ],
    "name": "VehicleDetails__AddVehicle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "vehicleId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ownerName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "licensePlate",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "make",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "model",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "year",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "color",
        "type": "string"
      }
    ],
    "name": "VehicleDetails__DeleteVehicle",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "isDeleted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "vehicleId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_ownerName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_licensePlate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_make",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_model",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_year",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_color",
        "type": "string"
      }
    ],
    "name": "addVehicle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "deleteVehicle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getVehicle",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getVehicleId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getTimeStamp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getOwnerName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getLicensePlate",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getMake",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getModel",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getYear",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getColor",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vehicleId",
        "type": "uint256"
      }
    ],
    "name": "getDeleted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
const insuranceABI = [
  
];

// Connect to the Vehicle and Insurance blockchains
const vehicleWeb3 = new Web3(new Web3.providers.HttpProvider(VEHICLE_RPC));
const insuranceWeb3 = new Web3(new Web3.providers.HttpProvider(INSURANCE_RPC));

// Create contract instances
const vehicleContract = new vehicleWeb3.eth.Contract(
  vehicleABI,
  VEHICLE_CONTRACT_ADDRESS
);
const insuranceContract = new insuranceWeb3.eth.Contract(
  insuranceABI,
  INSURANCE_CONTRACT_ADDRESS
);

// Function to fetch vehicle data and update insurance data
async function syncVehicleToInsurance(vehicleId, policyId, coverageAmount, premiumAmount) {
  try {
    // Fetch vehicle details from the VehicleDetails contract
    const vehicleData = await vehicleContract.methods.getVehicle(vehicleId).call({
      from: VEHICLE_ACCOUNT,
    });

    console.log("Fetched Vehicle Data:", vehicleData);


    const data = insuranceContract.methods
      .addPolicy(
        policyId,
        vehicleData[1], 
        "Vehicle Insurance", 
        coverageAmount, 
        premiumAmount
      )
      .encodeABI();

    const tx = {
      from: INSURANCE_ACCOUNT,
      to: INSURANCE_CONTRACT_ADDRESS,
      gas: 3000000,
      data: data,
    };

    // Sign and send the transaction using the Insurance account
    const signedTx = await insuranceWeb3.eth.accounts.signTransaction(
      tx,
      INSURANCE_PRIVATE_KEY
    );
    const receipt = await insuranceWeb3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    console.log("Insurance data updated:", receipt.transactionHash);
  } catch (error) {
    console.error("Error in syncVehicleToInsurance:", error);
  }
}

// Run the Oracle
(async () => {
  console.log("Starting Oracle...");

  const vehicleId = 1; 
  const policyId = 101; 
  const coverageAmount = 10000; 
  const premiumAmount = 500; 

  await syncVehicleToInsurance(vehicleId, policyId, coverageAmount, premiumAmount);
})();

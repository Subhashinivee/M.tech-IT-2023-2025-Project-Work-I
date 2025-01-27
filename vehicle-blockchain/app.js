const CONTRACT_ADDRESS = "0x1B6078639F28AcAcf17AF6a815765A812d2F1E99";
const CONTRACT_ABI = [
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


let web3;
let contract;

window.onload = async () => {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask detected!");

    // Initialize Web3 instance
    web3 = new Web3(window.ethereum);

    try {
      // Request account access
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      console.log("Connected account:", accounts[0]);

      // Initialize contract
      contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Failed to connect to MetaMask. Check the console for details.");
    }
  } else {
    alert("MetaMask is not installed. Please install it and try again.");
  }
};

// Add Vehicle
document.getElementById("addVehicleForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const ownerName = document.getElementById("ownerName").value;
  const licensePlate = document.getElementById("licensePlate").value;
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = parseInt(document.getElementById("year").value);
  const color = document.getElementById("color").value;

  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Adding vehicle from account:", accounts[0]);

    await contract.methods
      .addVehicle(ownerName, licensePlate, make, model, year, color)
      .send({ from: accounts[0] });

    alert("Vehicle added successfully!");
  } catch (error) {
    console.error("Error adding vehicle:", error);
    alert("Failed to add vehicle. Check the console for details.");
  }
});

// Delete Vehicle
document.getElementById("deleteVehicleForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const vehicleId = parseInt(document.getElementById("deleteVehicleId").value);

  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Deleting vehicle from account:", accounts[0]);

    await contract.methods.deleteVehicle(vehicleId).send({ from: accounts[0] });

    alert("Vehicle deleted successfully!");
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    alert("Failed to delete vehicle. Check the console for details.");
  }
});

// Get Vehicle
document.getElementById("getVehicleForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const vehicleId = parseInt(document.getElementById("getVehicleId").value);

  try {
    const vehicle = await contract.methods.getVehicle(vehicleId).call();
    console.log("Vehicle details:", vehicle);

    document.getElementById("vehicleDetails").innerHTML = `
      <p><strong>Owner Name:</strong> ${vehicle[1]}</p>
      <p><strong>License Plate:</strong> ${vehicle[2]}</p>
      <p><strong>Make:</strong> ${vehicle[3]}</p>
      <p><strong>Model:</strong> ${vehicle[4]}</p>
      <p><strong>Year:</strong> ${vehicle[5]}</p>
      <p><strong>Color:</strong> ${vehicle[6]}</p>
    `;
  } catch (error) {
    console.error("Error getting vehicle details:", error);
    alert("Failed to get vehicle details. Check the console for details.");
  }
});

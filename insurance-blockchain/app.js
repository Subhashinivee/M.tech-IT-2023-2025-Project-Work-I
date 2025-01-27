const contractAddress = "0x124261B74CCedceCA1197723b3b5FF89627B56f5"; // Replace with your contract address
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "recordId",
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
        "name": "vehicleType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "insuredAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "insuranceExpiryYear",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "claimStatus",
        "type": "string"
      }
    ],
    "name": "VehicleInsuranceRecords__AddRecord",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "recordId",
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
        "name": "vehicleType",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "insuredAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "insuranceExpiryYear",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "claimStatus",
        "type": "string"
      }
    ],
    "name": "VehicleInsuranceRecords__DeleteRecord",
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
    "name": "recordId",
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
        "name": "_vehicleType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_insuredAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_insuranceExpiryYear",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_claimStatus",
        "type": "string"
      }
    ],
    "name": "addRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "deleteRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getRecord",
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
    "name": "getRecordId",
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
        "name": "_recordId",
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
        "name": "_recordId",
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
        "name": "_recordId",
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
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getVehicleType",
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
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getInsuredAmount",
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
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getInsuranceExpiryYear",
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
        "name": "_recordId",
        "type": "uint256"
      }
    ],
    "name": "getClaimStatus",
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
        "name": "_recordId",
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
    if (typeof window.ethereum !== 'undefined') {
        console.log("MetaMask detected.");
        web3 = new Web3(window.ethereum);

        try {
            // Request access to the user's MetaMask accounts
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            console.log("Connected accounts:", accounts);

            // Initialize the contract instance
            contract = new web3.eth.Contract(contractABI, contractAddress);
            console.log("Contract initialized:", contract);
        } catch (error) {
            console.error("MetaMask connection failed:", error);
            alert("Error connecting to MetaMask: " + error.message);
        }
    } else {
        alert("MetaMask is not installed. Please install MetaMask to use this app.");
    }
};

// Add a new insurance record
document.getElementById('addRecordForm').onsubmit = async (e) => {
    e.preventDefault();

    try {
        const accounts = await web3.eth.getAccounts();
        const ownerName = document.getElementById('ownerName').value;
        const licensePlate = document.getElementById('licensePlate').value;
        const vehicleType = document.getElementById('vehicleType').value;
        const insuredAmount = document.getElementById('insuredAmount').value;
        const insuranceExpiryYear = document.getElementById('insuranceExpiryYear').value;
        const claimStatus = document.getElementById('claimStatus').value;

        await contract.methods
            .addRecord(ownerName, licensePlate, vehicleType, insuredAmount, insuranceExpiryYear, claimStatus)
            .send({ from: accounts[0] });

        document.getElementById('statusMessage').innerText = "Record added successfully!";
    } catch (error) {
        console.error("Error adding record:", error);
        document.getElementById('statusMessage').innerText = "Error adding record: " + error.message;
    }
};

// Delete a record by ID
document.getElementById('deleteRecordForm').onsubmit = async (e) => {
    e.preventDefault();

    try {
        const accounts = await web3.eth.getAccounts();
        const recordId = document.getElementById('deleteRecordId').value;

        await contract.methods.deleteRecord(recordId).send({ from: accounts[0] });

        document.getElementById('statusMessage').innerText = "Record deleted successfully!";
    } catch (error) {
        console.error("Error deleting record:", error);
        document.getElementById('statusMessage').innerText = "Error deleting record: " + error.message;
    }
};

// View a record by ID
document.getElementById('viewRecordButton').onclick = async () => {
    const recordId = document.getElementById('viewRecordId').value;

    try {
        const record = await contract.methods.getRecord(recordId).call();

        document.getElementById('ownerNameDisplay').innerText = record[1];
        document.getElementById('licensePlateDisplay').innerText = record[2];
        document.getElementById('vehicleTypeDisplay').innerText = record[3];
        document.getElementById('insuredAmountDisplay').innerText = record[4];
        document.getElementById('insuranceExpiryYearDisplay').innerText = record[5];
        document.getElementById('claimStatusDisplay').innerText = record[6];
    } catch (error) {
        console.error("Error fetching record:", error);
        document.getElementById('statusMessage').innerText = "Error fetching record: " + error.message;
    }
};

// MetaMask connection event listeners
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', (accounts) => {
        console.log('Accounts changed:', accounts);
        if (accounts.length === 0) {
            alert("Please connect your MetaMask wallet.");
        }
    });

    window.ethereum.on('chainChanged', (chainId) => {
        console.log('Chain changed to:', chainId);
        window.location.reload();
    });
}

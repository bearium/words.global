'use strict';

const contractAddress = "0xa8ec30db34e92c10912aa0844566efaa5f2534a7";
const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "refugee",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addShares",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "donateByAddress",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "donateByName",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "doPayout",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "donator",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "charity",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "onDonated",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "refugee",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "removeShares",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "spendDonatedPayouts",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "tc",
				"type": "address"
			},
			{
				"name": "cdb",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "refugee",
				"type": "address"
			}
		],
		"name": "charityOf",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "refugee",
				"type": "address"
			}
		],
		"name": "donatedPayoutsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "charity",
				"type": "address"
			}
		],
		"name": "donationsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "charity",
				"type": "address"
			},
			{
				"name": "merchant",
				"type": "address"
			}
		],
		"name": "getCharitySpendingAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "charity",
				"type": "address"
			}
		],
		"name": "getTotalCharitySpendingAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "refugee",
				"type": "address"
			}
		],
		"name": "sharesOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "address"
			}
		],
		"name": "totalDonationsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "charity",
				"type": "address"
			}
		],
		"name": "totalShares",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

class EthWrapperError extends Error{
	constructor(msg){
		super(msg);
		this.name = "EthWrapperError";
	}
}
class EthWrapperEnableError extends Error{
	constructor(msg, denied){
		super(msg);
		this.name = "EthWrapperEnableError";
		this.denied = Boolean(denied);
	}
}
const assert = function(e, msg){
	if (!e){
		throw new EthWrapperError(msg);
	}
}

let loaded = false;
let callLoad = false;
let currentAccount;
let accountChecker;
let web3;
let BigNumber;
let theCouncil;

let loginListeners = [];

let EthWrapper = {
	async load(){
		if (callLoad){
			throw new Error("Don't call load multiple times");
		}
		callLoad = true;
		// Modern dapp browsers...
		if (window.ethereum) {
			web3 = new Web3(ethereum);
			try {
				await ethereum.enable();
			} catch (error) {
				throw new EthWrapperEnableError("Permission not given", true);
			}
		}
		// Legacy dapp browsers...
		else if (window.web3) {
			web3 = new Web3(window.web3.currentProvider);
		}
		// Non-dapp browsers...
		else {
			throw new EthWrapperEnableError("Metamask not installed", false);
		}
		currentAccount = web3.eth.accounts[0];
		BigNumber = web3.BigNumber;
		accountChecker = setInterval(function() {
		  if (web3.eth.accounts[0] !== currentAccount) {
			currentAccount = web3.eth.accounts[0];
			let checksumAddress = web3.toChecksumAddress(currentAccount);
			for (let i = 0; i < loginListeners.length; i += 1){
				loginListeners[i](checksumAddress);
			}
		  }
		}, 500);
		loaded = true;
		theCouncil = web3.eth.contract(contractABI).at(contractAddress);
	},
	getBigNumberConstructor(){
		return BigNumber;
	},
	getCurrentAccount(){
		assert(loaded, "Not loaded");
		return web3.toChecksumAddress(currentAccount);
	},
	addLoginCallback(func){
		assert(loaded, "Not loaded");
		if(loginListeners.indexOf(func) == -1) {
			let i = 0;
			while(loginListeners[i] != null) {
				i += 1;
			}
			loginListeners[i] = func;
		}
	},
	removeLoginCallback(func){
		assert(loaded, "Not Loaded");
		for (let i = 0; i < loginListeners.length; i += 1) {
			if (loginListeners[i] == func){
				delete loginListeners[i];
				break;
			}
		}
		for (let i = loginListeners.length - 1; i >= 0; i -= 1) {
			if (loginListeners[i] == null){
				loginListeners.pop();
			}else{
				break;
			}
		}
	},
	// charityfINANCE-specific data

	// Chairty functions
	
	doPayout(amount){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.doPayout(amout, (err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},
	withdraw(amount){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.withdraw(amout, (err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},

	charityOf(refugee) {
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.charityOf(refugee, (err, charity) => {
				if (err) {
					reject(err);
				} else {
					resolve(charity);
				}
			});
		})
	},

	sharesOf(refugee) {
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.sharesOf(refugee, (err, shares) => {
				if (err) {
					reject(err);
				} else {
					resolve(shares);
				}
			});
		})
	},

	totalShares(charity) {
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.totalShares(charity, (err, shares) => {
				if (err) {
					reject(err);
				} else {
					resolve(shares);
				}
			});
		})
	},

	addShares(refugee, amount){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.addShares(refugee, amount, (err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},

	removeShares(refugee, amount){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.removeShares(refugee, amount, (err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},

	donatedPayoutsOf(refugee) {
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.donatedPayoutsOf(refugee, (err, shares) => {
				if (err) {
					reject(err);
				} else {
					resolve(shares);
				}
			});
		})
	},

	spendDonatedPayouts(to, amount){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.spendDonatedPayouts(to, amount, (err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},


	getCharitySpendingAmount(charity, merchant){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.getCharitySpendingAmount(charity, merchant, (err, fundsSpent) => {
				if (err) {
					reject(err);
				} else {
					resolve(fundsSpent);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},

	getTotalCharitySpendingAmount(charity){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.getTotalCharitySpendingAmount(charity, (err, fundsSpent) => {
				if (err) {
					reject(err);
				} else {
					resolve(fundsSpent);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},

	donateByAddress(addr, eth){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.donateByAddress(addr, {value: eth}, (err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},

	donateByName(name, eth){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.donateByName(name, {value: eth}, (err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},

	donationsOf(address, charity){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.donateByName(address, charity, (err, donatedAmount) => {
				if (err) {
					reject(err);
				} else {
					resolve(donatedAmount);
				}
			});
		})
	},
	totalDonationsOf(address){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.totalDonationsOf(address, (err, donatedAmount) => {
				if (err) {
					reject(err);
				} else {
					resolve(donatedAmount);
				}
			});
		})
	}
}

module.exports = EthWrapper;

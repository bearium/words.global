'use strict';

const contractAddress = "0x6B9B895Ce81bE8edd717867AB6772194073a95a7";
const contractABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "organizationAddresses",
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
		"constant": false,
		"inputs": [
			{
				"name": "t",
				"type": "uint8"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "fullName",
				"type": "string"
			},
			{
				"name": "otherData",
				"type": "uint256"
			}
		],
		"name": "register",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "organizations",
		"outputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "submitter",
				"type": "address"
			},
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "t",
				"type": "uint8"
			},
			{
				"name": "otherData",
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
				"name": "str",
				"type": "string"
			}
		],
		"name": "toUpperCase",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "getOrganizationByName",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint8"
			},
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
				"name": "name",
				"type": "string"
			}
		],
		"name": "getOrganizationAddressByName",
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
				"name": "name",
				"type": "string"
			}
		],
		"name": "validateName",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "user",
				"type": "address"
			},
			{
				"name": "t",
				"type": "uint8"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "fullName",
				"type": "string"
			},
			{
				"name": "otherData",
				"type": "uint256"
			}
		],
		"name": "registerOther",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getOrganization",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint8"
			},
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
		"inputs": [
			{
				"name": "tc",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "submitter",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "t",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "otherData",
				"type": "uint256"
			}
		],
		"name": "onRegistered",
		"type": "event"
	}
]

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
	// charityDB-specific data
	getOrganization(address) {
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.getOrganization(address,(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						address: result[0], 
						submitter: result[1],
						name: result[2], 
						fullName: result[3],
						type: result[4],
						otherData: result[5]
					});
				}
			});
		})
	},
	getOrganizationByName(name) {
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.getOrganization(name,(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve({
						address: result[0], 
						submitter: result[1],
						name: result[2], 
						fullName: result[3],
						type: result[4],
						otherData: result[5]
					});
				}
			});
		})
	},
	validateName(name) {
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.validateName(name,(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		})
	},
	register(type, name, fullName, otherData){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.vouchForUser(type, name, fullName, otherData,(err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	},
	registerOther(address, type, name, fullName, otherData){
		assert(loaded, "Not Loaded");
		return new Promise((resolve, reject) => {
			theCouncil.vouchForUser(address, type, name, fullName, otherData,(err, txHash) => {
				if (err) {
					reject(err);
				} else {
					resolve(txHash);
					// You can say something like "Visit https://ropsten.etherscan.io/tx/"+txHash
				}
			});
		})
	}
}

module.exports = EthWrapper;

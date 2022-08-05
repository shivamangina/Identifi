// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

// Import this file to use console.log
import "hardhat/console.sol";

contract Lock {
    address public owner;

    constructor() {
        owner = msg.sender;
    }
}

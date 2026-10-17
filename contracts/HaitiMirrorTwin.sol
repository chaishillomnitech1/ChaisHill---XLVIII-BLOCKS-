// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.20;

/// @notice Ledger-only mirror: payAndErase records a payment and erases the matching debt.
contract HaitiMirrorTwin {
    address public immutable owner;
    mapping(address => uint256) public debt;
    mapping(address => uint256) public erased;

    event Erased(address indexed account, uint256 amount);

    constructor() { owner = msg.sender; }

    function setDebt(address account, uint256 amount) external {
        require(msg.sender == owner, "owner");
        debt[account] = amount;
    }

    function payAndErase() external payable {
        uint256 d = debt[msg.sender];
        require(d > 0 && msg.value == d, "exact debt");
        debt[msg.sender] = 0;
        erased[msg.sender] += d;
        emit Erased(msg.sender, d);
    }
}

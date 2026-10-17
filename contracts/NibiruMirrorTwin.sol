// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.20;

interface IHaitiMirrorTwin { function erased(address) external view returns (uint256); }

/// @notice restoreAndGain pays back the erased amount plus 10% (Lose-to-Earn). Must be funded in advance.
contract NibiruMirrorTwin {
    IHaitiMirrorTwin public immutable haiti;
    mapping(address => bool) public restored;

    event Restored(address indexed account, uint256 amount);

    constructor(IHaitiMirrorTwin h) { haiti = h; }

    receive() external payable {}

    function restoreAndGain() external {
        require(!restored[msg.sender], "done");
        uint256 e = haiti.erased(msg.sender);
        require(e > 0, "nothing erased");
        restored[msg.sender] = true;
        uint256 payout = e + e / 10;
        (bool ok, ) = msg.sender.call{value: payout}("");
        require(ok, "transfer");
        emit Restored(msg.sender, payout);
    }
}

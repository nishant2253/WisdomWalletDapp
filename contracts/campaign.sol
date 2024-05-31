// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

// CampaignFactory contract is responsible for deploying new Campaign contracts
contract CampaignFactory {
    // Array to store addresses of deployed Campaign contracts
    address[] public deployedCampaigns;

    // Event emitted when a new campaign is created
    event campaignCreated(
        string title,
        uint requiredAmount,
        address indexed owner,
        address campaignAddress,
        string imgURI,
        uint indexed timestamp,
        string indexed category
    );

    // Function to create a new Campaign contract
    function createCampaign(
        string memory campaignTitle, 
        uint requiredCampaignAmount, 
        string memory imgURI, 
        string memory category,
        string memory storyURI) public
    {
        // Create a new Campaign contract and pass initial parameters
        Campaign newCampaign = new Campaign(
            campaignTitle, requiredCampaignAmount, imgURI, storyURI, msg.sender);

        // Add the address of the new Campaign to the deployedCampaigns array
        deployedCampaigns.push(address(newCampaign));

        // Emit the campaignCreated event with the provided details
        emit campaignCreated(
            campaignTitle, 
            requiredCampaignAmount, 
            msg.sender, 
            address(newCampaign),
            imgURI,
            block.timestamp,
            category
        );
    }
}

// Campaign contract to handle individual campaigns
contract Campaign {
    // Public variables to store campaign details
    string public title;
    uint public requiredAmount;
    string public image;
    string public story;
    address payable public owner;
    uint public receivedAmount;

    // Event emitted when a donation is made
    event donated(address indexed donar, uint indexed amount, uint indexed timestamp);

    // Constructor to initialize the Campaign contract with initial values
    constructor(
        string memory campaignTitle, 
        uint requiredCampaignAmount, 
        string memory imgURI,
        string memory storyURI,
        address campaignOwner
    ) {
        title = campaignTitle;
        requiredAmount = requiredCampaignAmount;
        image = imgURI;
        story = storyURI;
        owner = payable(campaignOwner);
    }

    // Function to allow donations to the campaign
    function donate() public payable {
        // Ensure that the required amount is not yet fulfilled
        require(requiredAmount > receivedAmount, "required amount fullfilled");

        // Transfer the donation amount to the campaign owner
        owner.transfer(msg.value);

        // Update the received amount with the donation
        receivedAmount += msg.value;

        // Emit the donated event with the donation details
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}


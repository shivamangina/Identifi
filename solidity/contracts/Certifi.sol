// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "./Owner.sol";

contract Certifi is Owner {
    struct User {
        string firstName;
        string lastName;
        string gender; // M or F
        bool isActive;
        address publicKey;
        string typeOfUser; // individual, company
        string location;
        bool userCreated;
    }

    struct Issuer {
        address publicKey;
        string typeOfIssuer; // college, university, rto, etc
        string org; //private or govt
        string name;
        bool isApproved;
        bool isActive;
        bool issuerCreated;
    }

    struct Certificate {
        string id;
        string name;
        string typeOfCertificate; // Degree, DL, PAN etc
        string version;
        string issuedDate;
        string expiresAt;
        bool isPermanent;
        bool isPublic;
        bool isActive;
        address issuerPublicKey;
        address userPublicKey;
    }

    Certificate[] public certificates;
    mapping(address => Issuer) public issuers;
    mapping(address => User) public users;
    mapping(string => mapping(address => bool)) public accessList;

    event userCreated(address userPublicKey);
    event issuerCreated(address issuerPublicKey);
    event userDisabled(address userPublicKey);
    event userEnabled(address userPublicKey);
    event issuerDisabled(address issuerId);
    event issuerEnabled(address issuerId);
    event certificateIssued(
        address userPublicKey,
        address issuerPublicKey,
        string id
    );
    event certificateRevoked(string certificateId);

    function createUser(
        string memory _firstName,
        string memory _lastName,
        string memory _gender,
        string memory _typeOfUser,
        string memory _location
    ) public returns (bool) {
        require(users[msg.sender].userCreated != true, "User already exists");
        users[msg.sender] = User(
            _firstName,
            _lastName,
            _gender,
            true,
            msg.sender,
            _typeOfUser,
            _location,
            true
        );

        emit userCreated(msg.sender);
        return true;
    }

    function createIssuer(
        address _publicKey,
        string memory _typeOfIssuer,
        string memory _org,
        string memory _name
    ) public isOwner returns (bool) {
        require(
            issuers[_publicKey].issuerCreated != true,
            "Issuer already exists"
        );
        issuers[_publicKey] = Issuer(
            _publicKey,
            _typeOfIssuer,
            _org,
            _name,
            true,
            true,
            true
        );
        emit issuerCreated(_publicKey);
        return true;
    }

    function disableUser(address _userPublicKey) public isOwner returns (bool) {
        // onlyOwner can disable
        users[_userPublicKey].isActive = false;
        emit userDisabled(_userPublicKey);
        return true;
    }

    function enableUser(address _userPublicKey) public isOwner returns (bool) {
        // onlyOwner can disable
        users[_userPublicKey].isActive = true;
        emit userEnabled(_userPublicKey);
        return true;
    }

    function disableIssuer(address _issuerId) public isOwner returns (bool) {
        // onlyOwner can disable
        issuers[_issuerId].isActive = false;
        emit issuerDisabled(_issuerId);
        return true;
    }

    function enableIssuer(address _issuerId) public isOwner returns (bool) {
        // onlyOwner can disable
        issuers[_issuerId].isActive = true;
        emit issuerEnabled(_issuerId);
        return true;
    }

    function issueCertificate(
        string memory _id,
        string memory _name,
        string memory _typeOfCertificate,
        string memory _version,
        string memory _issuedDate,
        string memory _expiresAt,
        bool _isPermanent,
        bool _isPublic,
        bool _isActive,
        address _userPublicKey
    ) public returns (bool) {
        require(issuers[msg.sender].isActive == true, "Not a valid issuer");

        Certificate memory myCertificate = Certificate(
            _id,
            _name,
            _typeOfCertificate,
            _version,
            _issuedDate,
            _expiresAt,
            _isPermanent,
            _isPublic,
            _isActive,
            msg.sender,
            _userPublicKey
        );

        certificates.push(myCertificate);
        emit certificateIssued(_userPublicKey, msg.sender, _id);

        return true;
    }

    function revokeCertificate(string memory _certificateId)
        public
        returns (bool)
    {
        //TODO: only owner and issuer can revoke the certificate
        for (uint256 index = 0; index < certificates.length; index++) {
            if (
                keccak256(abi.encode(certificates[index].id)) ==
                keccak256(abi.encode(_certificateId))
            ) {
                certificates[index].isActive = false;
                emit certificateRevoked(_certificateId);
                return true;
            }
        }
        return false;
    }

    function shareCertificate(string memory _certificateId, address _userId)
        public
        returns (bool)
    {
        // share certificate with other users
        Certificate memory myCertificate;

        for (uint256 i = 0; i < certificates.length; i++) {
            if (
                keccak256(abi.encode(certificates[i].id)) ==
                keccak256(abi.encode(_certificateId))
            ) {
                myCertificate = certificates[i];
            }
        }

        require(myCertificate.isActive, "No Active cerificate found");
        require(
            myCertificate.userPublicKey == msg.sender,
            "Not the owner of the certificate"
        );

        accessList[_certificateId][_userId] = true;

        return true;
    }

    function revokeSharedCertificate(
        string memory _certificateId,
        address _userId
    ) public returns (bool) {
        Certificate memory myCertificate;
        for (uint256 i = 0; i < certificates.length; i++) {
            if (
                keccak256(abi.encode(certificates[i].id)) ==
                keccak256(abi.encode(_certificateId))
            ) {
                myCertificate = certificates[i];
            }
        }

        require(myCertificate.isActive, "No Active cerificate found");
        require(
            myCertificate.userPublicKey == msg.sender,
            "Not the owner of the certificate"
        );

        accessList[_certificateId][_userId] = false;

        return true;
    }

    function getCertificatesByUser()
        public
        view
        returns (Certificate[] memory)
    {
        Certificate[] memory myCertificates = new Certificate[](
            certificates.length
        );
        for (uint256 i = 0; i < certificates.length; i++) {
            if (
                certificates[i].userPublicKey == msg.sender ||
                accessList[certificates[i].id][msg.sender]
            ) {
                myCertificates[i] = (certificates[i]);
            }
        }
        return myCertificates;
    }

    function verifyCertificate(string memory _certificateId)
        public
        view
        returns (bool)
    {
        // get the certificate
        for (uint256 i = 0; i < certificates.length; i++) {
            if (
                keccak256(abi.encode(certificates[i].id)) ==
                keccak256(abi.encode(_certificateId))
            ) {
                if (
                    issuers[certificates[i].issuerPublicKey].isActive && // check if the issuer is active
                    users[certificates[i].userPublicKey].isActive && // check if the user is active
                    certificates[i].isActive // check if the certificate is active
                ) {
                    return true;
                }
            }
        }

        return false;
    }

    function getUserData(address _address)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            bool,
            address,
            string memory,
            string memory,
            bool
        )
    {
        require(users[_address].publicKey != address(0), "No User Found");
        User memory myUser = users[_address];
        return (
            myUser.firstName,
            myUser.lastName,
            myUser.gender,
            myUser.isActive,
            myUser.publicKey,
            myUser.typeOfUser,
            myUser.location,
            myUser.userCreated
        );
    }

    function getIssuerData(address _address)
        public
        view
        returns (
            address,
            string memory,
            string memory,
            string memory,
            bool,
            bool,
            bool
        )
    {
        require(issuers[_address].publicKey != address(0), "No Issuer Found");
        Issuer memory myIssuer = issuers[_address];
        return (
            myIssuer.publicKey,
            myIssuer.typeOfIssuer,
            myIssuer.org,
            myIssuer.name,
            myIssuer.isApproved,
            myIssuer.isActive,
            myIssuer.issuerCreated
        );
    }

    function getCertificatesByIssuer()
        public
        view
        returns (Certificate[] memory)
    {
        Certificate[] memory myCertificates = new Certificate[](
            certificates.length
        );
        for (uint256 i = 0; i < certificates.length; i++) {
            if (certificates[i].issuerPublicKey == msg.sender) {
                myCertificates[i] = (certificates[i]);
            }
        }
        return myCertificates;
    }
}

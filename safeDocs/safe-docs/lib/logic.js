'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.safedocs.documents.ChangeAssetValue} changeAssetValue
 * @transaction
 */
// function onChangeAssetValue(changeAssetValue) {
//     var assetRegistry;
//     var id = changeAssetValue.relatedAsset.assetId;
//     return getAssetRegistry('org.safedocs.documents.Documents')
//         .then(function(ar) {
//             assetRegistry = ar;
//             return assetRegistry.get(id);
//         })
//         .then(function(asset) {
//             asset.value = changeAssetValue.newValue;
//             return assetRegistry.update(asset);
//         });
// }

/**
 * Sample transaction
 * @param {org.safedocs.documents.AddUser} addUser
 * @transaction
 */

 function AddUserDetails(addUser){
     var factory = getFactory();
     var NS = 'org.safedocs.documents';

     //create user
     var user = factory.newResource(NS, 'User', 'aditya1');
     user.email = 'aditya1@aditya.org';
     return getParticipantRegistry(NS + '.User')
        .then(function(userRegistry){
            //add user
            return userRegistry.addAll([user]);
        })
 }

 /**
 * Sample transaction
 * @param {org.safedocs.documents.AddDocs} addDocs
 * @transaction
 */

 function addDocument(addDocs){
    var factory = getFactory();
    var NS = 'org.safedocs.documents';

    //create document
    var docs = factory.newResource(NS, 'Documents', 'aditya1');
    docs.value = 'Heyyy !!!';
    return getAssetRegistry(NS + '.Documents')
        .then(function(saveDocs){
            return saveDocs.addAll([docs]);
        })
 }
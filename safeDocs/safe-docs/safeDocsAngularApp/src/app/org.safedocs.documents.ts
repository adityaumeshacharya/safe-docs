import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Asset} from './org.hyperledger.composer.system';
// export namespace org.safedocs.documents{
   export class User extends Participant {
      username: string;
      email: string;
   }
   export class Documents extends Asset {
      username: string;
      value: string;
   }
   export class ChangeAssetValue extends Transaction {
      newValue: string;
      relatedAsset: Asset;
   }
   export class AddUser extends Transaction {
   }
   export class AddDocs extends Transaction {
   }
// }

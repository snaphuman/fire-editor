import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
     
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

     public storeAllContracts(_allContracts: string[]): void {
          // insert updated array to local storage
          this.storage.set("ALL_CONTRACT_CODES", _allContracts);
          console.log("Stored contracts to storage.");
     }

     public getAllContracts() : string[] {
          console.log("Fetched all contracts from storage");
          return this.storage.get("ALL_CONTRACT_CODES") || [];
     }

     public showStorage(_key: string) : any {
          return this.storage.get(_key);
     }

  /*    public storeAllContracts(contractCode: string[]): void {
          
      // get array of contracts from local storage
      const currentContractCodes = this.storage.get("ALL_CONTRACT_CODES") || [];
      // push new task to array
      currentContractCodes.push({
          title: taskTitle,
          isChecked: false 
      });
      // insert updated array to local storage
      this.storage.set(STORAGE_KEY, currentTodoList);
      console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
 } */

}
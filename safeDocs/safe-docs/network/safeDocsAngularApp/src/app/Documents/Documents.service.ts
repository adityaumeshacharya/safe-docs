import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Documents } from '../org.safedocs.documents';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class DocumentsService {

	
		private NAMESPACE: string = 'org.safedocs.documents.Documents';
	



    constructor(private dataService: DataService<Documents>) {
    };

    public getAll(): Observable<Documents[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Documents> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Documents> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Documents> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Documents> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

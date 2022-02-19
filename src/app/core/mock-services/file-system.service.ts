import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FileModel } from 'src/app/shared/model/file.model';
import { FILE_DATA } from '../mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService {

  constructor() { }

  getFile(): Observable<FileModel> {
    let data: FileModel = FILE_DATA;
    return of(data).pipe(delay(1000));
  }
}

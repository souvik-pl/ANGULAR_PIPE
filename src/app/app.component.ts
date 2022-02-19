import { Component, OnInit } from '@angular/core';
import { FileSystemService } from './core/mock-services/file-system.service';
import { FileModel } from './shared/model/file.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isFileLoaded: boolean = false;
  public fileData: FileModel | undefined;

  constructor(
    private fileSystemService: FileSystemService
  ) {}

  ngOnInit() {
    this.getFile();
  }

  private getFile() {
    this.fileSystemService.getFile()
    .subscribe((response: FileModel) => {
      this.fileData = response;
      this.isFileLoaded = true;
    });
  }
}

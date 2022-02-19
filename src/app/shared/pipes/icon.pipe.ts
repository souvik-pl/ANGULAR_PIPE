import { Pipe, PipeTransform } from '@angular/core';
import { FileModel } from '../model/file.model';

@Pipe({
  name: 'icon',
  pure: true
})
export class IconPipe implements PipeTransform {

  transform(file: FileModel | undefined, ...args: unknown[]): string {
    console.log('Pipe called');

    let mimeType: string | null = (file?.mimeType) ? file.mimeType : null;

    if (mimeType && mimeType.indexOf('/') > 0) {

      switch (mimeType.split('/')[0]) {
        case 'image':
          return 'image.svg';
        case 'audio':
          return 'audio.svg';
        case 'video':
          return 'video.svg';
        case 'text':
          return 'txt.svg';
        default:
          return 'application.svg';
      }
    } else {
      return 'application.svg';
    }
  }

}

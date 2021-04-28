import { Pipe, PipeTransform } from '@angular/core';
import { TimeBlock } from 'src/model/TimeBlock.enum';


@Pipe({
  name: 'eNumToString',
  pure: true
})

export class ENumToStringPipe implements PipeTransform {


  transform(enumToTranslate: any): any {
    return Object.values(TimeBlock)[enumToTranslate];
  }
}
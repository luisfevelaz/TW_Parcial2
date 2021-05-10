import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeEnlaces'
})
export class PipeEnlacesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let ruta:string;
    switch(value){
      case 0:
        ruta = 'https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/71/2/109028/109028.jpg';
        break;
      case 1:
        ruta = 'https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/71/2/91538/91538.jpg';
        break;
      case 2:
        ruta = 'https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/71/2/111171/111171.jpg';
        break;
      case 3:
        ruta = 'https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/71/2/117980/117980.jpg';
        break;
      case 4:
        ruta = 'https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/71/2/144930/144930.jpg';
        break;
      case 5:
        ruta = 'https://s3.amazonaws.com/lmxwebsite/media/wpagephotos/71/2/111260/111260.jpg';
        break;
    }

    return ruta;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {

  transform(pass:string): string {
    // const last2 = pass.slice(pass.length-2,pass.length)
    // const size = pass.length-2;
    const size = pass.length;
    let maskpassword = '';
    for (let index = 0; index < size; index++) {
      maskpassword = maskpassword +"*";

    }
    // maskpassword += last2;
    return maskpassword;
  }

}

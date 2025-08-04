import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {

  transform(pass:string): string {

    if (pass.length <= 2) {
    // Mask entire password if length is 2 or less
    return '*'.repeat(pass.length);
  }

    const last2 = pass.slice(pass.length-2,pass.length)
    const size = pass.length-2;

    // const size = pass.length;
    let maskpassword = '';

    for (let index = 0; index < size; index++) {

      maskpassword = maskpassword +"*";

    }
    return maskpassword += last2;
    // return maskpassword;
  }

}

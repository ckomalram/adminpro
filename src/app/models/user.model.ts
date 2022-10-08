import { environment } from "src/environments/environment";

const  BASE_URL = environment.BASE_URL;

export class User {

  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public google?: boolean,
    public img?: string,
    public role?: string,
    public uid?: string) { }

    // /upload/users/nombreImagen.xxx
    get imgUrl(){

      //cuando las imagenes fueron guardadas por google login.
      if (this.img?.includes('https')) {
        return this.img;
      }

      if (this.img) {
          return `${BASE_URL}/upload/users/${this.img}`;
      }

      return `${BASE_URL}/upload/users/no-image`;

    }






}

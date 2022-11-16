import { isUndefined } from "util";
import Cookies from "universal-cookie";
import axios from 'axios';
import app from '../../app.json';


const {APIHOST} = app;
const cookies = new Cookies();

export function calcularExpirarSesion(){
    const now = new Date().getTime();
    const newDate = now + 60*30*1000;
    return new Date(newDate);
}

export function getSession() {
    return isUndefined(cookies.get("_s")) ? false: cookies.get("_s");
}

function renovarSesion() {
    const sesion = getSession();
    if (!sesion) window.location.href = "/login";

    cookies.set("_s", sesion, {
      path: "/",
      expires: calcularExpirarSesion(),
    });
    return sesion;
}

export const request = {
    get: function (services) {
      let token = renovarSesion();
      return axios.get(`${APIHOST}${services}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
      },
    };
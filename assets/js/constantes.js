/* API sheetdb by Alejo */
const APIcomments_URL = "https://sheetdb.io/api/v1";
const APIcomments_URN = "19tmb6aoa1d1v";
export const APIcomments_URI = `${APIcomments_URL}/${APIcomments_URN}`;
export const TOKEN_APIcomments = 'rhsihhd4xhdlh997npxcrd5pflq98e1yaah9wher';

/* API ShhetDB by Mario 
   ias				"id,nombre,link,image"
	ia_types			"id,nombre,image"
	comments			"contact_name,contact_email,contact_comment, commet_date"
	rel_ia_type:	"ias_id,ia_types_is" */
const APImrl_URL_BASE = "https://sheetdb.io/api/v1";
const APImrl_URN = "5rjx8rw4ysznr";
export const APImrl_URI_BASE = `${APImrl_URL_BASE}/${APImrl_URN}`;
export const IAS_SHEET = "ias";
export const IA_TYPES_SHEET = "ia_types";
export const COMMENTS_SHEET = "comments";
export const REL_IA_TYPE_SHEET = "rel_ia_type";

export const TOKEN_APImrl = 'x5cyqde43ofnt76sm6kzghqyfsvew3ldwg9pmhgx';

export const API_URL = 'http://localhost:8000/api/';


/*  DATA in JSON */
/* 
export const IAs_URI = "./assets/JSON/ias.json";
export const IAsType_URI = "../assets/JSON/iasType.json";
*/

export const iaType = [
   {nombre:"Arte & Creatividad",image:"./assets/media/icons/1.png",iaTypeID: 1},
   {nombre:"Conversasionales",image: "./assets/media/icons/2.png", iaTypeID: 2},
   {nombre:"Diseño",image: "./assets/media/icons/3.png", iaTypeID: 3},
   {nombre:"Educación",image: "./assets/media/icons/4.png", iaTypeID: 4},
   {nombre:"Programación",image: "./assets/media/icons/5.png", iaTypeID: 5},
   {nombre:"Automatización",image: "./assets/media/icons/6.png", iaTypeID: 6},
   {nombre:"Texto & Traducción",image: "./assets/media/icons/7.png", iaTypeID: 7}   
];

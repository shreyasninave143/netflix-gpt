export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/12824231?v=4";
export const USER_AVATAR_TOM = "https://pyxis.nymag.com/v1/imgs/4e5/1f7/a917c50e70a4c16bc35b9f0d8ce0352635-14-tom-cruise.2x.rhorizontal.w710.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY;
    }
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const BG_IMG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const SUPPORTED_LANGUAGES = [
    { identifier: 'en', name: 'English' },
    { identifier: 'hindi', name: 'Hindi' },
    { identifier: 'spanish', name: 'Spanish' },
]
// export const OPENAI_KEY = "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";  // key - sninave1433@gmail.com
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;  // Key - shreyasninave143@gmail.com
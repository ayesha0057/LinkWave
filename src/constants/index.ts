export const PRIMARY_COLOR = 'rgba(159, 232, 112, 1)';
export const PRIMARY_COLOR_DARK = 'rgba(19, 45, 0, 1)';
export const SECONDARY_COLOR = 'rgba(22, 51, 0, 1)';
export const BACKGROUND_COLOR_MAIN = 'rgba(255, 255, 255, 1)';
export const BACKGROUND_COLOR_SECONDARY = 'rgba(250, 250, 250, 255)';
export const TEXT_COLOR_MAIN = 'rgba(86, 86, 86, 1)';
export const TEXT_COLOR_SECONDARY = 'rgba(32, 32, 32, 1)';
export const TEXT_COLOR_LABELS = 'rgba(170, 178, 170, 1)';
export const BLACK = 'rgba(0, 0, 0, 1)';
export const WHITE = 'rgba(255, 255, 255, 1)';
export const BASIC_GREEN = '#F1FCEA';
export const BASIC_GREY = '#FAFAFA';
export const NEON_GREEN = '#9FE870';
export const TEXT_CHARCOAL = '#202020';
export const GREYONE = 'rgb(213,217,213)';
export const DARK_PRIMARY_COLOR = 'rgba(159, 232, 112, 1)';
export const DARK_SECONDARY_COLOR = 'rgba(22, 51, 0, 1)';
export const DARK_BACKGROUND_COLOR_MAIN = 'rgba(32, 32, 32, 1)';
export const DARK_BACKGROUND_COLOR_SECONDARY = 'rgba(43, 43, 43, 1)';
export const DARK_TEXT_COLOR_MAIN = 'rgba(213, 217, 213, 1)';
export const DARK_TEXT_COLOR_SECONDARY = 'rgba(250, 250, 250, 1)';
export const DARK_TEXT_COLOR_LABELS = 'rgba(170, 178, 170, 1)';

export const ERROR_COLOR = 'rgba(197, 0, 0, 1)';
export const SUCCESS_COLOR = 'rgba(0, 102, 0, 1)';
export const WARNING_COLOR = 'rgb(209, 209, 1)';
export const INFO_COLOR = 'rgba(0, 0, 221, 1)';
export const HOVER_GREYISH = 'rgba(240, 243, 246, 1)';

export const FONT = "'Montserrat', sans-serif";
export const FONT_SECONDARY = "'Racama', sans-serif";

export const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT as string;
export const LOGIN_PAGE_ROUTE = process.env.NEXT_PUBLIC_LOGIN_PAGE as string;
export const SIGN_UP_PAGE_ROUTE = process.env.NEXT_PUBLIC_SIGNUP_PAGE as string;

export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const DOMAIN_REGEX = /^(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,}$/;
export const URL_REGEX = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s?#\/]+)*(?:\?[^\s#]+)?$/;

const manual_deploy = 'v_1';

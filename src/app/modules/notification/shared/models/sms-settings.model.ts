export interface ISmsSettings {
  gateway: GatewayType;
  username: string;
  password: string;
  phoneNumber: string;
}

export enum GatewayType {
  TWILIO = 'https://www.twilio.com/',
  PLIVO = 'https://www.plivo.com'
}

import { capitilizeFirstLetter, snakeToCamelCase } from '@rws-air/utils';
import { Oauth2Permissions, UserPrivileges } from 'store/oauth2/oauth2Types';

export const noOp = () => undefined;

export const transformPrivileges = (privileges: UserPrivileges) =>
  privileges
    .map((entry) => `can${capitilizeFirstLetter(snakeToCamelCase(entry.toLowerCase()))}`)
    .reduce<Oauth2Permissions>((prevVal, curVal) => ({ [curVal]: true, ...prevVal }), {});

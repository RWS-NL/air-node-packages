import { ReactNode } from 'react';

export type label = string | ReactNode;
export type cellContent = label;
export type customCss = string | string[];
export type dataQa = string;

export const objectHasProperty = <O extends {}>(obj: O, prop: keyof O) => prop in obj && obj[prop];
import { CSSProperties } from 'react';

export enum ResizeModes {
  fixed,
  dynamic,
  stretch
}

export interface PanelType {
  minSize?: number;
  maxSize?: number;
  resize?: ResizeModes;
  fixedSize?: number;
  size?: number;
  snap?: number[];
  style?: CSSProperties;
}

export type WindowCoordinates = {
  x: number;
  y: number;
};

/**
 * MIT License
 *
 * Copyright (c) 2018 Dan Fessler
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import clsx from 'clsx';
import React, { Component, CSSProperties, HTMLAttributes } from 'react';
import { ResizeModes } from './types';

interface PanelProps extends HTMLAttributes<Element> {
  resize?: ResizeModes;
  onWindowResize?:
    | ((panelIndex: number, size: { x: number; y: number }, callback?: () => void, node?: any) => void)
    | null;
  panelID: number;
  style: CSSProperties;

  panelWrapperClasses?: string | string[];
}

export class Panel extends Component<PanelProps, {}> {
  node: any;

  static defaultProps = {
    resize: undefined,
    onWindowResize: undefined,
    style: {}
  };

  // Find the resizeObject if it has one
  componentDidMount() {
    if (this.props.resize === ResizeModes.stretch) {
      // @ts-ignore
      this.refs.resizeObject.addEventListener('load', () => this.onResizeObjectLoad());
      // @ts-ignore
      this.refs.resizeObject.data = 'about:blank';
      this.calculateStretchWidth(); // this.onNextFrame(this.calculateStretchWidth);
    }
  }

  // Attach resize event listener to resizeObject
  onResizeObjectLoad = () => {
    // @ts-ignore
    this.refs.resizeObject.contentDocument.defaultView.addEventListener('resize', () => this.calculateStretchWidth());
  };

  // Utility function to wait for next render before executing a function
  onNextFrame = (callback: FrameRequestCallback) => {
    setTimeout(() => {
      window.requestAnimationFrame(callback);
    }, 0);
  };

  // Recalculate the stretchy panel if it's container has been resized
  calculateStretchWidth = () => {
    if (this.props.onWindowResize !== null) {
      const rect = this.node.getBoundingClientRect();

      // @ts-ignore
      this.props.onWindowResize(
        this.props.panelID,
        { x: rect.width, y: rect.height },
        undefined,
        this.node.parentElement
        // recalcalculate again if the width is below minimum
        // Kinda hacky, but for large resizes like fullscreen/Restore
        // it can't solve it in one pass.
        // function() {this.onNextFrame(this.calculateStretchWidth)}.bind(this)
      );
    }
  };

  createResizeObject() {
    const style: { resizeObject: CSSProperties } = {
      resizeObject: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0
      }
    };

    // only attach resize object if panel is stretchy.  Others dont need it
    return this.props.resize === ResizeModes.stretch ? (
      <object aria-label='panel' style={style.resizeObject} ref='resizeObject' type='text/html' />
    ) : null;
  }

  // Render component
  render() {
    const resizeObject = this.createResizeObject();

    return (
      <div
        ref={(node) => {
          this.node = node;
        }}
        className={clsx('panelWrapper', this.props.panelWrapperClasses)}
        style={this.props.style}
      >
        {resizeObject}
        {this.props.children}
      </div>
    );
  }
}

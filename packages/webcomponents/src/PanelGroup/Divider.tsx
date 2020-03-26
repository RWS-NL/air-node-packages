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

import React, {
  Component,
  CSSProperties,
  HTMLAttributes,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent
} from 'react';
import { WindowCoordinates } from './types';

interface DividerProps extends HTMLAttributes<Element> {
  dividerWidth: number;
  handleBleed: number;
  direction: string;
  panelID: number;
  handleResize: (...args: any[]) => any;
  showHandles: boolean;
  borderColor: string;
  onResizeStart: (...args: any[]) => any;
  onResizeEnd: (...args: any[]) => any;
}

type DividerState = {
  dragging: boolean;
  initPos: { x: number | null; y: number | null };
};

export class Divider extends Component<DividerProps, DividerState> {
  static defaultProps = {
    dividerWidth: 1,
    handleBleed: 4,
    showHandles: false,
    direction: undefined,
    borderColor: undefined,
    onResizeStart: undefined,
    onResizeEnd: undefined
  };
  constructor(props: DividerProps) {
    super(props);

    this.state = {
      dragging: false,
      initPos: { x: null, y: null }
    };
  }
  // Add/remove event listeners based on drag state
  componentDidUpdate(_props: DividerProps, state: DividerState) {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener('mousemove', this.onMouseMove as any);
      document.addEventListener('touchmove', this.onTouchMove as any, {
        passive: false
      });
      document.addEventListener('mouseup', this.handleDragEnd);
      document.addEventListener('touchend', this.handleDragEnd, {
        passive: false
      });
      // maybe move it to setState callback ?
      this.props.onResizeStart();
    } else if (!this.state.dragging && state.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove as any);
      document.removeEventListener('touchmove', this.onTouchMove as any, {
        // @ts-ignore
        passive: false
      });
      document.removeEventListener('mouseup', this.handleDragEnd);
      // @ts-ignore
      document.removeEventListener('touchend', this.handleDragEnd, {
        passive: false
      });
      this.props.onResizeEnd();
    }
  }
  // Start drag state and set initial position
  handleDragStart = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>, x: number, y: number) => {
    this.setState({
      dragging: true,
      initPos: {
        x,
        y
      }
    });

    e.stopPropagation();
    e.preventDefault();
  };

  // End drag state
  handleDragEnd = (e: MouseEvent | TouchEvent) => {
    this.setState({ dragging: false });
    e.stopPropagation();
    e.preventDefault();
  };

  // Call resize handler if we're dragging
  handleDragMove = (
    e: ReactMouseEvent<HTMLDivElement, MouseEvent> | ReactTouchEvent<HTMLDivElement>,
    x: number,
    y: number
  ) => {
    if (!this.state.dragging) return;

    const initDelta = {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      x: x - this.state.initPos.x!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      y: y - this.state.initPos.y!
    };

    const flowMask = {
      x: this.props.direction === 'row' ? 1 : 0,
      y: this.props.direction === 'column' ? 1 : 0
    };

    const flowDelta = initDelta.x * flowMask.x + initDelta.y * flowMask.y;

    // Resize the panels
    const resultDelta = this.handleResize(this.props.panelID, initDelta);

    // if the divider moved, reset the initPos
    if (resultDelta + flowDelta !== 0) {
      // Did we move the expected amount? (snapping will result in a larger delta)
      const expectedDelta = resultDelta === flowDelta;

      this.setState({
        initPos: {
          // if we moved more than expected, add the difference to the Position
          x: x + (expectedDelta ? 0 : resultDelta * flowMask.x),
          y: y + (expectedDelta ? 0 : resultDelta * flowMask.y)
        }
      });
    }

    e.stopPropagation();
    e.preventDefault();
  };

  // Call resize on mouse events
  // Event onMosueDown
  onMouseDown = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    // only left mouse button
    if (e.button !== 0) return;
    this.handleDragStart(e, e.pageX, e.pageY);
  };

  // Event onMouseMove
  onMouseMove = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    this.handleDragMove(e, e.pageX, e.pageY);
  };

  // Call resize on Touch events (mobile)
  // Event ontouchstart
  onTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    this.handleDragStart(
      (e as unknown) as ReactMouseEvent<HTMLDivElement, MouseEvent>,
      e.touches[0].clientX,
      e.touches[0].clientY
    );
  };

  // Event ontouchmove
  onTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    this.handleDragMove(e, e.touches[0].clientX, e.touches[0].clientY);
  };

  // Handle resizing
  handleResize = (i: number, delta: WindowCoordinates) => this.props.handleResize(i, delta);

  // Utility functions for handle size provided how much bleed
  // we want outside of the actual divider div
  getHandleWidth = () => this.props.dividerWidth + this.props.handleBleed * 2;
  getHandleOffset = () => this.props.dividerWidth / 2 - this.getHandleWidth() / 2;

  // Render component
  render() {
    const style: { divider: CSSProperties; handle: CSSProperties } = {
      divider: {
        width: this.props.direction === 'row' ? this.props.dividerWidth : 'auto',
        minWidth: this.props.direction === 'row' ? this.props.dividerWidth : 'auto',
        maxWidth: this.props.direction === 'row' ? this.props.dividerWidth : 'auto',
        height: this.props.direction === 'column' ? this.props.dividerWidth : 'auto',
        minHeight: this.props.direction === 'column' ? this.props.dividerWidth : 'auto',
        maxHeight: this.props.direction === 'column' ? this.props.dividerWidth : 'auto',
        flexGrow: 0,
        position: 'relative'
      },
      handle: {
        position: 'absolute',
        width: this.props.direction === 'row' ? this.getHandleWidth() : '100%',
        height: this.props.direction === 'column' ? this.getHandleWidth() : '100%',
        left: this.props.direction === 'row' ? this.getHandleOffset() : 0,
        top: this.props.direction === 'column' ? this.getHandleOffset() : 0,
        backgroundColor: this.props.showHandles ? 'rgba(0,128,255,0.25)' : 'auto',
        cursor: this.props.direction === 'row' ? 'col-resize' : 'row-resize',
        zIndex: 100
      }
    };
    Object.assign(style.divider, { backgroundColor: this.props.borderColor });

    // Add custom role if dragging
    let role = 'divider';
    if (this.state.dragging) {
      role += ' dragging';
    }

    return (
      <div role={role} style={style.divider} onMouseDown={this.onMouseDown} onTouchStart={this.onTouchStart}>
        <div style={style.handle} />
      </div>
    );
  }
}

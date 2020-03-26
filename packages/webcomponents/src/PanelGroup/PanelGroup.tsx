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

import classnames from 'classnames';
import React, { Children, CSSProperties, ReactNodeArray } from 'react';
import { DeepRequired } from 'utility-types';
import { Divider } from './Divider';
import { Panel } from './Panel';
import { PanelType, ResizeModes, WindowCoordinates } from './types';

export interface PanelGroupProps extends React.HTMLAttributes<Element> {
  spacing?: number;
  direction?: CSSProperties['flexDirection'];
  panelWidths?: PanelType[];
  onUpdate?: (data: PanelType[]) => any;
  onResizeStart?: (...args: any[]) => any;
  onResizeEnd?: (...args: any[]) => any;
  panelColor?: string;
  borderColor?: string;
  showHandles?: boolean;
  length?: any;

  /** Custom classes to apply to the PanelGroup component */
  panelGroupClasses?: string | string[];
}

export type PanelGroupState = {
  length?: number;
  panels: Required<PanelType>[];
  slice?: any;
  size?: any;
};

type CreatePanelArgs = {
  panelStyle: CSSProperties;
  index: number;
  initialChildren: any;
};

type MaybeDivideArgs = {
  initialChildren: any;
  newChildren: any;
  index: number;
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export class PanelGroup extends React.Component<PanelGroupProps, PanelGroupState> {
  node: any;

  static defaultProps = {
    spacing: 1,
    direction: 'row',
    panelWidths: [],
    onUpdate: undefined,
    onResizeStart: undefined,
    onResizeEnd: undefined,
    panelColor: undefined,
    borderColor: undefined,
    showHandles: false
  };

  // Load initial panel configuration from props
  constructor(props: PanelGroupProps) {
    super(props);
    this.state = this.loadPanels(this.props as DeepRequired<PanelGroupProps>);
  }

  // reload panel configuration if props update
  UNSAFE_componentWillReceiveProps(nextProps: any) {
    const nextPanels = nextProps.panelWidths;

    // Only update from props if we're supplying the props in the first place
    if (nextPanels.length) {
      // if the panel array is a different size we know to update
      if (this.state.panels.length !== nextPanels.length) {
        this.setState(this.loadPanels(nextProps));
      } else {
        // otherwise we need to iterate to spot any difference
        for (let i = 0; i < nextPanels.length; i++) {
          if (
            this.state.panels[i].size !== nextPanels[i].size ||
            this.state.panels[i].minSize !== nextPanels[i].minSize ||
            this.state.panels[i].maxSize !== nextPanels[i].maxSize ||
            this.state.panels[i].resize !== nextPanels[i].resize
          ) {
            this.setState(this.loadPanels(nextProps));
            break;
          }
        }
      }
    }
  }

  private defaultResize(props: DeepRequired<PanelGroupProps>, index: number, defaultResize: ResizeModes) {
    let resize = defaultResize;
    if (props.panelWidths[index].resize) {
      resize = props.panelWidths[index].resize;
    } else {
      resize = props.panelWidths[index].size ? ResizeModes.dynamic : resize;
    }
    return resize;
  }

  // load provided props into state
  private loadPanels(props: DeepRequired<PanelGroupProps>): { panels: Required<PanelType>[] } {
    const panels: Required<PanelType>[] = [];
    if (props.children) {
      // Default values if none were provided
      const defaultSize = 256;
      const defaultMinSize = 48;
      const defaultMaxSize = 0;
      const defaultFixedSize = 0;
      const defaultResizeProp = ResizeModes.stretch;

      let stretchIncluded = false;
      const children = Children.toArray(props.children);

      for (let i = 0; i < children.length; i++) {
        if (i < props.panelWidths.length && props.panelWidths[i]) {
          const widthObj = {
            size: props.panelWidths[i].size !== undefined ? props.panelWidths[i].size : defaultSize,
            minSize: props.panelWidths[i].minSize !== undefined ? props.panelWidths[i].minSize : defaultMinSize,
            maxSize: props.panelWidths[i].maxSize !== undefined ? props.panelWidths[i].maxSize : defaultMaxSize,
            resize: this.defaultResize(props, i, defaultResizeProp),
            snap: props.panelWidths[i].snap !== undefined ? props.panelWidths[i].snap : [],
            fixedSize: props.panelWidths[i].fixedSize !== undefined ? props.panelWidths[i].fixedSize : defaultFixedSize,
            style: {
              // making the ability to not have to be so terse for style settings on panel
              ...Panel.defaultProps.style,
              ...(props.panelWidths[i].style || {})
            }
          };
          panels.push(widthObj);
        } else {
          // default values if no props are given
          panels.push({
            size: defaultSize,
            resize: defaultResizeProp,
            minSize: defaultMinSize,
            maxSize: defaultMaxSize,
            fixedSize: defaultFixedSize,
            snap: [],
            style: {}
          });
        }

        // if none of the panels included was stretchy, make the last one stretchy
        if (panels[i].resize === ResizeModes.stretch) stretchIncluded = true;
        if (!stretchIncluded && i === children.length - 1) panels[i].resize = ResizeModes.stretch;
      }
    }
    return {
      panels
    };
  }

  // Pass internal state out if there's a callback for it
  // Useful for saving panel configuration
  onUpdate = (panels: PanelType[]) => {
    if (this.props.onUpdate) {
      this.props.onUpdate(panels.slice());
    }
  };

  onResizeStart = () => {
    if (this.props.onResizeStart) {
      // actually this slice clones only array, underlying objects stays the same
      this.props.onResizeStart(this.state.panels.slice());
    }
  };

  onResizeEnd = () => {
    if (this.props.onResizeEnd) {
      this.props.onResizeEnd(this.state.panels.slice());
    }
  };

  // For styling, track which direction to apply sizing to
  getSizeDirection = (caps?: unknown) => {
    if (caps) {
      return this.props.direction === 'column' ? 'Height' : 'Width';
    }
    return this.props.direction === 'column' ? 'height' : 'width';
  };

  getStyle() {
    const container = {
      width: '100%',
      height: '100%',
      [`min${this.getSizeDirection(true)}`]: this.getPanelGroupMinSize(
        this.props.spacing ?? PanelGroup.defaultProps.spacing
      ),
      display: 'flex',
      flexDirection: this.props.direction,
      flexGrow: 1
    };

    return {
      container,
      panel: {
        flexGrow: 0,
        display: 'flex'
      }
    };
  }

  getPanelStyle(index: number) {
    const { direction, panelColor } = this.props;

    const panel = this.state.panels[index];
    const { style } = panel;

    // setting up the style for this panel.  Should probably be handled
    // in the child component, but this was easier for now
    let newPanelStyle: CSSProperties = {
      [this.getSizeDirection()]: panel.size,
      [direction === 'row' ? 'height' : 'width']: '100%',
      [`min${this.getSizeDirection(true)}`]: panel.resize === ResizeModes.stretch ? 0 : panel.size,

      flexGrow: panel.resize === ResizeModes.stretch ? 1 : 0,
      flexShrink: panel.resize === ResizeModes.stretch ? 1 : 0,
      display: 'flex',
      overflow: 'hidden',
      position: 'relative',
      ...style
    };

    if (panelColor !== null) {
      // patch in the background color if it was supplied as a prop
      newPanelStyle = {
        ...newPanelStyle,
        backgroundColor: panelColor
      };
    }

    return newPanelStyle;
  }

  createPanelProps({ panelStyle, index, initialChildren }: CreatePanelArgs) {
    const panelState = this.state.panels[index];
    let stretchIncluded = false;

    // give position info to children
    const metadata = {
      isFirst: index === 0,
      isLast: index === initialChildren.length - 1,
      resize: panelState.resize,

      // window resize handler if this panel is stretchy
      onWindowResize: panelState.resize === ResizeModes.stretch ? this.setPanelSize : null
    };

    // if none of the panels included was stretchy, make the last one stretchy
    if (panelState.resize === ResizeModes.stretch) stretchIncluded = true;
    if (!stretchIncluded && metadata.isLast) metadata.resize = ResizeModes.stretch;

    return {
      style: panelStyle,
      key: index,
      panelID: index,
      ...metadata
    };
  }

  createPanel({ panelStyle, index, initialChildren }: CreatePanelArgs) {
    return <Panel {...this.createPanelProps({ panelStyle, index, initialChildren })}>{initialChildren[index]}</Panel>;
  }

  maybeDivide({ initialChildren, newChildren, index }: MaybeDivideArgs) {
    // add a handle between panels
    if (index < initialChildren.length - 1) {
      newChildren.push(
        <Divider
          borderColor={this.props.borderColor}
          key={`divider${index}`}
          panelID={index}
          handleResize={this.handleResize}
          dividerWidth={this.props.spacing}
          direction={this.props.direction}
          showHandles={this.props.showHandles}
          onResizeStart={this.onResizeStart}
          onResizeEnd={this.onResizeEnd}
        />
      );
    }
  }

  // Entry point for resizing panels.
  // We clone the panel array and perform operations on it so we can
  // setState after the recursive operations are finished
  handleResize = (i: number, delta: WindowCoordinates) => {
    const tempPanels = this.state.panels.slice() as Required<PanelType>[];
    const returnDelta = this.resizePanel(i, this.props.direction === 'row' ? delta.x : delta.y, tempPanels);
    this.setState({ panels: tempPanels });
    this.onUpdate(tempPanels);
    return returnDelta;
  };

  // Recursive panel resizing so we can push other panels out of the way
  // if we've exceeded the target panel's extents
  resizePanel = (panelIndex: number, delta: number, panels: Required<PanelType>[]) => {
    // 1) first let's calculate and make sure all the sizes add up to be correct.
    let masterSize = 0;
    for (let iti = 0; iti < panels.length; iti += 1) {
      masterSize += panels[iti].size;
    }

    const boundingRect = this.node.getBoundingClientRect();
    const boundingSize =
      (this.props.direction === 'column' ? boundingRect.height : boundingRect.width) -
      (this.props.spacing as number) * ((this.props.children as ReactNodeArray).length - 1);

    if (Math.abs(boundingSize - masterSize) <= 0.01) {
      // 2) Rectify the situation by adding all the unacounted for space to the first panel
      panels[panelIndex].size += boundingSize - masterSize;
    }

    // track the progressive delta so we can report back how much this panel
    // actually moved after all the adjustments have been made
    let resultDelta = delta;

    // make the changes and deal with the consequences later
    panels[panelIndex].size += delta;
    panels[panelIndex + 1].size -= delta;

    // Min and max for LEFT panel
    let minsize = this.getPanelMinSize(panelIndex, panels);
    let maxsize = this.getPanelMaxSize(panelIndex, panels);

    // if we made the left panel too small
    if (panels[panelIndex].size < minsize) {
      delta = minsize - panels[panelIndex].size;

      if (panelIndex === 0) {
        resultDelta = this.resizePanel(panelIndex, delta, panels);
      } else {
        resultDelta = this.resizePanel(panelIndex - 1, -delta, panels);
      }
    }

    // if we made the left panel too big
    if (maxsize !== 0 && panels[panelIndex].size > maxsize) {
      delta = panels[panelIndex].size - maxsize;

      if (panelIndex === 0) {
        resultDelta = this.resizePanel(panelIndex, -delta, panels);
      } else {
        resultDelta = this.resizePanel(panelIndex - 1, delta, panels);
      }
    }

    // Min and max for RIGHT panel
    minsize = this.getPanelMinSize(panelIndex + 1, panels);
    maxsize = this.getPanelMaxSize(panelIndex + 1, panels);

    // if we made the right panel too small
    if (panels[panelIndex + 1].size < minsize) {
      delta = minsize - panels[panelIndex + 1].size;

      if (panelIndex + 1 === panels.length - 1) {
        resultDelta = this.resizePanel(panelIndex, -delta, panels);
      } else {
        resultDelta = this.resizePanel(panelIndex + 1, delta, panels);
      }
    }

    // if we made the right panel too big
    if (maxsize !== 0 && panels[panelIndex + 1].size > maxsize) {
      delta = panels[panelIndex + 1].size - maxsize;

      if (panelIndex + 1 === panels.length - 1) {
        resultDelta = this.resizePanel(panelIndex, delta, panels);
      } else {
        resultDelta = this.resizePanel(panelIndex + 1, -delta, panels);
      }
    }

    // Iterate through left panel's snap positions
    for (let i = 0; i < panels[panelIndex].snap.length; i++) {
      if (Math.abs(panels[panelIndex].snap[i] - panels[panelIndex].size) < 20) {
        delta = panels[panelIndex].snap[i] - panels[panelIndex].size;

        if (
          delta !== 0 &&
          panels[panelIndex].size + delta >= this.getPanelMinSize(panelIndex, panels) &&
          panels[panelIndex + 1].size - delta >= this.getPanelMinSize(panelIndex + 1, panels)
        ) {
          resultDelta = this.resizePanel(panelIndex, delta, panels);
        }
      }
    }

    // Iterate through right panel's snap positions
    for (let i = 0; i < panels[panelIndex + 1].snap.length; i++) {
      if (Math.abs(panels[panelIndex + 1].snap[i] - panels[panelIndex + 1].size) < 20) {
        delta = panels[panelIndex + 1].snap[i] - panels[panelIndex + 1].size;

        if (
          delta !== 0 &&
          panels[panelIndex].size + delta >= this.getPanelMinSize(panelIndex, panels) &&
          panels[panelIndex + 1].size - delta >= this.getPanelMinSize(panelIndex + 1, panels)
        ) {
          resultDelta = this.resizePanel(panelIndex, -delta, panels);
        }
      }
    }

    // return how much this panel actually resized
    return resultDelta;
  };

  // Utility function for getting min pixel size of panel
  getPanelMinSize = (panelIndex: number, panels: Required<PanelType>[]): number => {
    if (panels[panelIndex].resize === ResizeModes.fixed) {
      if (!panels[panelIndex].fixedSize) {
        panels[panelIndex].fixedSize = panels[panelIndex].size;
      }
      return panels[panelIndex].fixedSize;
    }
    return panels[panelIndex].minSize;
  };

  // Utility function for getting max pixel size of panel
  getPanelMaxSize = (panelIndex: number, panels: Required<PanelType>[]) => {
    if (panels[panelIndex].resize === ResizeModes.fixed) {
      if (!panels[panelIndex].fixedSize) {
        panels[panelIndex].fixedSize = panels[panelIndex].size;
      }
      return panels[panelIndex].fixedSize;
    }
    return panels[panelIndex].maxSize;
    // return 0;
  };

  // Utility function for getting min pixel size of the entire panel group
  getPanelGroupMinSize = (spacing: number) => {
    let size = 0;
    for (let i = 0; i < this.state.panels.length; i++) {
      size += this.getPanelMinSize(i, this.state.panels);
    }
    return size + (this.state.panels.length - 1) * spacing;
  };

  // Utility function for getting max pixel size of the entire panel group
  getPanelGroupMaxSize = (spacing: number) => {
    let size = 0;
    for (let i = 0; i < this.state.panels.length; i++) {
      size += this.getPanelMaxSize(i, this.state.panels);
    }
    return size + (this.state.panels.length - 1) * spacing;
  };

  // Hard-set a panel's size
  // Used to recalculate a stretchy panel when the window is resized
  setPanelSize = (panelIndex: number, size: { x: number; y: number }, callback: any, node: any) => {
    if (!this.node && node) {
      // due to timing child elements may have parent node first!
      this.node = node;
    }

    const newSize = this.props.direction === 'column' ? size.y : size.x;

    if (newSize !== this.state.panels[panelIndex].size) {
      const tempPanels = this.state.panels;
      // make sure we can actually resize this panel this small
      if (newSize < tempPanels[panelIndex].minSize) {
        let diff = tempPanels[panelIndex].minSize - newSize;
        tempPanels[panelIndex].size = tempPanels[panelIndex].minSize;

        // 1) Find all of the dynamic panels that we can resize and
        // decrease them until the difference is gone
        for (let i = 0; i < tempPanels.length; i += 1) {
          if (i !== panelIndex && tempPanels[i].resize === ResizeModes.dynamic) {
            const available = tempPanels[i].size - tempPanels[i].minSize;
            const cut = Math.min(diff, available);
            tempPanels[i].size -= cut;
            // if the difference is gone then we are done!
            diff -= cut;
            if (diff === 0) {
              break;
            }
          }
        }
      } else {
        tempPanels[panelIndex].size = newSize;
      }
      this.setState({ panels: tempPanels });

      if (panelIndex > 0) {
        this.handleResize(panelIndex - 1, { x: 0, y: 0 });
      } else if (this.state.panels.length > 2) {
        this.handleResize(panelIndex + 1, { x: 0, y: 0 });
      }

      if (callback) {
        callback();
      }
    }
  };

  render() {
    const { children } = this.props;

    const style = this.getStyle();

    // lets build up a new children array with added resize borders
    const initialChildren = React.Children.toArray(children);
    const newChildren = [];

    for (let i = 0; i < initialChildren.length; i++) {
      const panelStyle = this.getPanelStyle(i);
      const newPanel = this.createPanel({
        panelStyle,
        index: i,
        initialChildren
      });
      newChildren.push(newPanel);
      this.maybeDivide({ initialChildren, newChildren, index: i });
    }

    return (
      <div
        className={classnames('panelGroup', this.props.panelGroupClasses)}
        style={style.container}
        ref={(node) => {
          this.node = node;
        }}
      >
        {newChildren}
      </div>
    );
  }
}

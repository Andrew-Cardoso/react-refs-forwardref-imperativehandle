import React from "react";

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
}

interface State {}

export class ClassInput extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (<input type='text' ref={this.props.inputRef} />)
  }
}
import React from "react";
import { ClassInput } from "./ComponentClassInput";
import { ClassTwo } from "./ComponentClassTwo";

interface ClassOneProps {

}
interface ClassOneState {
  
}

export class ClassOne extends React.Component<ClassOneProps, ClassOneState> {
  classTwoRef: React.RefObject<ClassTwo>;
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);

    this.classTwoRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.classTwoRef.current?.printComponent()
    this.inputRef.current?.focus();
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Class component</h1>
        <ClassTwo ref={this.classTwoRef} />
        <ClassInput inputRef={this.inputRef} />
      </div>
    )
  }
}
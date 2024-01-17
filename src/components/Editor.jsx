import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = (e) => {
      this.setState({ value: e.target.value });
    };
  }

  render() {
    return (
      <div className="container">
        {/* Initial textarea without onChange and value props */}
        <div className="input">
          <h2>INPUT</h2>

          <textarea className="input-text" onChange={this.handleChange} spellCheck="false" id="input"/>
        </div>

        <div className="output">
          <h2>PRO NOTE</h2>
            <textarea
              defaultValue={this.state.value}
              readOnly
              id="note"
            />
        </div>
      </div>
    );
  }
}

export default Editor;

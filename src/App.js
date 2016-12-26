import React, { Component } from 'react';
import './App.css';
import Remarkable from 'remarkable';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getRawMarkup = this.getRawMarkup.bind(this);
    const exampleText = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
    `;

    this.state = {value: exampleText};
  }

  render() {
    return (
      <div className="App">
      	<table>
      	<tr>
      	<td>
        <textarea
          onChange={this.handleChange}
          value={this.state.value} />
        </td>
        <td className="App-output">
        <div
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
        </td>
        </tr>
        </table>
      </div>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }
}

export default App;

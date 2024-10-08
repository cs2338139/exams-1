import React from "react";
import ReactDOM from "react-dom";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount() {
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <div>
        {" "}
        <h2>{this.state.count}</h2> <button onClick={this.handleAddCount}>Add</button>{" "}
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById("root"));


//問題說明：
//此範例的問題在於，當使用者點擊Add按鈕時，預期的結果是數字會依序加3，但實際上只會加1。是因為setState是非同步的，React會將多個setState合併成一個，所以只會加1。
// 正確的做法是使用prevState來獲取前一狀態值，這樣就可以確保每次setState都是基於前一次的結果去做更改。
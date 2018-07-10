import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import key from "weak-key";

const mapStateToProps = state => {
  return { 
    triggerRefetch: state.triggerRefetch
  };
};

class Table extends Component {

  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    data: [],
    loaded: false,
    placeholder: "Loading..."
  };

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        console.log('API Queried...');
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render() {
    const { data, loaded, placeholder } = this.state;
    console.log(this.state);
    console.log(this.props.triggerRefetch);
    console.log(data, loaded, placeholder);
    return loaded ? (
      !data.length ? (
        <p>Nothing to show.</p>
      ) : (
        <div className="column is-12">
          <h2 className="subtitle">
            Showing <strong>{data.length} items</strong>
          </h2>
          <table className="table is-striped" style={{width: "100%"}}>
            <thead>
              <tr>
                {Object.entries(data[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map(el => (
                <tr key={el.id}>
                  {Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    ) : <p>{placeholder}</p>;
  }
}

const ConnectedTable = connect(mapStateToProps)(Table);

export default ConnectedTable;
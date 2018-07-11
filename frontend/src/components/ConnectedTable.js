import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import key from "weak-key";

const mapStateToProps = state => {
  return { 
    triggerRefetch: state.triggerRefetch,
    updateTableData: state.updateTableData
  };
};

class Table extends Component {

  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    data: this.props.updateTableData,
    loaded: false,
    placeholder: "Loading...",
    refetch: this.props.triggerRefetch
  };

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }

  render() {
    const { data, loaded, placeholder, refetch } = this.state;
    return this.props.triggerRefetch ? (
      !this.props.updateTableData.length ? (
        <p className="has-text-centered has-text-danger">Nothing to show.</p>
      ) : (
        <div className="column is-12">
          <h2 className="subtitle">
            Showing <strong className="has-text-primary">{this.props.updateTableData.length} items</strong>
          </h2>
          <table className="table is-striped" style={{width: "100%"}}>
            <thead>
              <tr>
                {Object.entries(this.props.updateTableData[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
              </tr>
            </thead>
            <tbody>
              {this.props.updateTableData.map(el => (
                <tr key={el.id}>
                  {Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    ) : (
      loaded ? (
        !data.length ? (
          <p className="has-text-centered has-text-danger">Nothing to show.</p>
        ) : (
          <div className="column is-12">
            <h2 className="subtitle">
              Showing <strong className="has-text-primary">{data.length} items</strong>
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
      ) : <p className="has-text-centered has-text-danger">{placeholder}</p>
    )
  }
}

const ConnectedTable = connect(mapStateToProps)(Table);

export default ConnectedTable;
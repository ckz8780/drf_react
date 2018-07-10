import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import key from "weak-key";

const mapStateToProps = state => {
  return { 
    data: state.leads,
  };
};

const ConnectedTable = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">
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
  );

ConnectedTable.propTypes = {
  data: PropTypes.array.isRequired
};

const Table = connect(mapStateToProps) (ConnectedTable);

export default Table;
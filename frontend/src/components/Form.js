// import React, { Component } from "react";
// // import { connect } from "react-redux";
// import PropTypes from "prop-types";
// // import { addLead } from "../js/actions/index";

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     addLead: lead => dispatch(addLead(lead))
// //   };
// // };

// class Form extends Component {
//   static propTypes = {
//     endpoint: PropTypes.string.isRequired
//   };

//   state = {
//     name: "",
//     email: "",
//     message: ""
//   };

//   baseState = this.state;

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, email, message } = this.state;
//     const lead = { name, email, message };
//     const conf = {
//       method: "post",
//       body: JSON.stringify(lead),
//       headers: new Headers({ "Content-Type": "application/json" })
//     };
//     fetch(this.props.endpoint, conf).then(response => {
//       if (response.status !== 201) {
//         return this.setState({ placeholder: "Something went wrong" });
//       }
//       console.log(response);
//       this.setState(this.baseState);
//     });
//   };

//   render() {
//     const { name, email, message } = this.state;
//     return (
//       <div className="column is-12">
//         <form id="new-msg-form" onSubmit={this.handleSubmit}>
//           <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//               <input
//                 className="input"
//                 type="text"
//                 name="name"
//                 onChange={this.handleChange}
//                 value={name}
//                 required
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Email</label>
//             <div className="control">
//               <input
//                 className="input"
//                 type="email"
//                 name="email"
//                 onChange={this.handleChange}
//                 value={email}
//                 required
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Message</label>
//             <div className="control">
//               <textarea
//                 className="textarea"
//                 type="text"
//                 name="message"
//                 onChange={this.handleChange}
//                 value={message}
//                 required
//               />
//             </div>
//           </div>
//           <div className="control">
//             <button type="submit" className="button is-info">
//               Send message
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// // const Form = connect(null, mapDispatchToProps)(ConnectedForm);

// export default Form;
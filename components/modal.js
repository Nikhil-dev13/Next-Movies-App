import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.closeButton = null;
  }

  closeModal() {
    this.closeButton.click();
  }

  submitModal = () => {
    alert("SubmitModal");
    closeButton.click();
  };

  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  ref={(ele) => (this.closeButton = ele)}
                >
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button
                    onClick={this.submitModal}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// const Modal = (props) => {
//   let closeButton = null;

//   const submitModal = () => {
//     alert("SubmitModal");
//     closeButton.click();
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         Create Movie
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">{props.children}</div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 ref={(ele) => (closeButton = ele)}
//               >
//                 Close
//               </button>
//               {props.hasSubmit && (
//                 <button
//                   onClick={submitModal}
//                   type="button"
//                   className="btn btn-primary"
//                 >
//                   Save Changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default Modal;

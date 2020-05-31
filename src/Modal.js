import React from 'react';
function Modal(){
    return(
        <div className="modal1 fade" style={{background:"rgba(0, 0, 0, 0.8)"}} id="modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="row" id="colorPicker">
                    <SketchPicker className="col-3" color={ this.state.col1 } onChange={ this.col1Chng }/>
                    <SketchPicker className="col-3" color={ this.state.col2 } onChange={ this.col2Chng }/>
                </div>
            </div>
            </div>
        </div>
        );
}
export default Modal;
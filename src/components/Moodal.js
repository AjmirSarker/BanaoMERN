import React from 'react';

const Moodal = () => {
    return (
        <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header position-relative">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                            <button style={{position:'absolute',right:'-5px',top:'-35px',background:'#ffffff',borderRadius:'50%',padding:'0 5px 10px 5px'}} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div class="modal-body">
                            Show a second modal and hide this one with the button below.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header position-relative">
                            <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                            <button style={{position:'absolute',right:'-5px',top:'-35px',background:'#ffffff',borderRadius:'50%',padding:'0 5px 10px 5px'}} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div class="modal-body">
                            Hide this modal and show the first with the button below.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moodal;
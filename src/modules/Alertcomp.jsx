import React from "react";

export default function Alertcomp(props){

    return(

      <div class="alert alert-success" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={props.handleClose}><span aria-hidden="true">&times;</span></button>
  <strong>{props.alert.sts}</strong> {props.alert.msg}
</div>
    
    )
}
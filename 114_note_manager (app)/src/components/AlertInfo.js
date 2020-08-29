import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, AlertContainer } from "react-bs-notifier";
class AlertInfo extends Component {
    handleDismiss = () => {  //tat thong bao
        this.props.alertOff();
    }
    render() {
        if (this.props.AlertShow === false) return null; //khong hien thi
        return (
           
            <AlertContainer position="bottom-right">
                <Alert type={this.props.AlertType} onDismiss={() => this.handleDismiss()} timeout={1000}>
                    {this.props.AlertContent}
                </Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent:state.AlertContent,
        AlertType:state.AlertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
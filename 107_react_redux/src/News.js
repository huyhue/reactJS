import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
    render() {
        return (
            <div>
                <h2>Đây là Component News </h2>
                <button onClick={() => this.props.useEditStatusInStore()}> Click đi nó sẽ đổi trạng thái</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {  //viết trong component con 
    return {
        useEditStatusInStore: () => { //gọi đến action trong store
            dispatch({ type: 'CHANGE_EDIT_STATUS' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)


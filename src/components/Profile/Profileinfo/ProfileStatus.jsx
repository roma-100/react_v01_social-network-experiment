import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  componentDidMount = () => {
    //window.bb1 = this.props
    //console.log('ProfileStatus componentDidMount')
  };

  componentDidUpdate = (prevProps, prevState) => {
    //Опасная штука. Возможно зацикливание, если использовать обновление State без условия.
    if (prevProps.status !== this.props.status) {
      console.log("prevProps.status !== this.props.status");
      this.setState({
        status: this.props.status,
      });
    }
    /* window.aa1 = prevProps
        window.aa2 = prevState */
    //console.log('ProfileStatus componentDidUpdate')
  };
  /*     activateEditMode = () => {
        this.state.editMode = true
        console.log("Hey" + this.state.editMode)
    } */
  activateEditMode = () => {
    // debugger
    //console.log('Hello 12')
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
    //window.bb1 = this
    //debugger
  };

  onStatusChange = (event) => {
    this.setState({ status: event.currentTarget.value });
  };

  render() {
    const Ticker = () => (
      <div
        className="profile-status__ticle"
        onDoubleClick={this.activateEditMode}
      >
        {this.props.status}
      </div>
    );

    const InputArea = () => (
      <div className="profile-status__input">
        <input
          onChange={this.onStatusChange}
          autoFocus={true}
          onBlur={this.deactivateEditMode}
          defaultValue={this.state.status}
        />
      </div>
    );

    return <>{this.state.editMode ? <InputArea /> : <Ticker />}</>;
  }
}

export default ProfileStatus;

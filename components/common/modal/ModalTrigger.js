import React from 'react'

import Modal from './Modal'
import ModalContent from './ModalContent'

class ModalTrigger extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.state = {
            isModalVisible: false,
        }
    }

    handleClick() {
        this.setState(prevState => ({
            isModalVisible: !prevState.isModalVisible,
        }))
    }

    render() {
        return (
            <div>

                <div onClick={this.handleClick}>
                    { this.props.children }
                </div>

                {this.state.isModalVisible &&
                    <Modal>
                        <ModalContent toggleModal={this.handleClick}>
                            {this.props.content}
                        </ModalContent>
                    </Modal>}

            </div>
        );
    }
}

export default ModalTrigger

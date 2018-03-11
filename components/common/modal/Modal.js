import React from 'react'
import ReactDOM from 'react-dom'

import ModalContent from './ModalContent'

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.modalContent = document.createElement('div')
        this.modalRoot = document.getElementById('modal-root')
    }

    componentDidMount() {
        this.modalRoot.appendChild(this.modalContent)
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.modalContent)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.modalContent,
        )
    }
}

export default Modal

import classnames from 'classnames'
import React from 'react'

import { gray2, gray4, gray6 } from '../../../constants/styles/variables'

class ModalContent extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)
        this.state = {
            isClosing: false,
        }
    }

    handleClose() {
        this.setState({ isClosing: true })

        // Allow for the animation to complete
        setTimeout(() => {
            this.props.toggleModal()
        }, 400)
    }

    render() {
        return (
            <div className={classnames('modal', {
                'modal-close': this.state.isClosing,
            })}>

                <div className='modal-header'>
                    <a
                        className='modal-header-button'
                        onClick={ this.handleClose }
                        role='button'
                    >
                        <span className='modal-header-button-text'>Close</span>
                    </a>
                </div>

                <div className='modal-content'>
                    { this.props.children }
                </div>

                <style jsx>{`
                    @keyframes animate-open {
                        from {
                            transform: translateY(100vh);
                        }
                        to {
                            transform: translateY(0);
                        }
                    }

                    .modal {
                        animation-delay: 0s;
                        animation-duration: 400ms;
                        animation-name: animate-open;
                        animation-iteration-count: 1;
                        animation-timing-function: ease-in;
                        background: #fff;
                        bottom: 0;
                        left: 0;
                        position: fixed;
                        right: 0;
                        top: 0;
                        transition: transform 0.4s ease-in-out;
                        z-index: 1000;
                    }

                    .modal-close {
                        transform: translateY(100vh);
                    }

                    .modal-header {
                        border-bottom: 1px solid ${gray6};
                        display: flex;
                        height: 2.5rem;
                        justify-content: flex-end;
                        overflow: hidden;
                    }

                    .modal-header-button {
                        color: transparent;
                        cursor: pointer;
                        display: block;
                        position: relative;
                        width: 2.5rem;
                    }

                    .modal-header-button::after {
                        background: ${gray4};
                        content: '';
                        height: 1.5rem;
                        left: 1.2rem;
                        position: absolute;
                        transform: rotate(45deg);
                        transition: all 0.3s ease;
                        top: 0.5rem;
                        width: 1px;
                    }

                    .modal-header-button::before {
                        background: ${gray4};
                        content: '';
                        height: 1.5rem;
                        left: 1.2rem;
                        position: absolute;
                        transform: rotate(-45deg);
                        transition: all 0.3s ease;
                        top: 0.5rem;
                        width: 1px;
                    }

                    .modal-header-button:hover {
                        color: transparent;
                    }

                    .modal-header-button:hover::after,
                    .modal-header-button:hover::before {
                        background: ${gray2};
                    }

                    .modal-header-button:hover::after {
                        height: .75rem;
                        left: 1.5rem;
                        top: 0.9rem
                    }

                    .modal-header-button:hover::before {
                        height: .75rem;
                        left: 1rem;
                        top: 0.9rem
                    }

                    .modal-header-button-text {
                        color: ${gray2};
                        font-size: 1.2em;
                        line-height: 2.5rem;
                        opacity: 0;
                        position: absolute;
                        right: 2.2rem;
                        top: 0;
                        transform: translateY(-.5rem);
                        transition: transform 0.3s linear, opacity 0.3s ease;
                    }

                    .modal-header-button:hover .modal-header-button-text {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .modal-content {
                        -webkit-overflow-scrolling: touch;
                        height: calc(100vh - 2.5rem);
                        overflow: auto;
                        padding: 1.5rem;
                    }
                `}</style>

            </div>
        )
    }

}

export default ModalContent

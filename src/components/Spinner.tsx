import React, { FunctionComponent } from 'react'

export interface SpinnerProps {
    color?: string
}

export const Spinner: FunctionComponent<SpinnerProps> = ({color}) => {
    return (
        <div className="d-flex justify-content-center">
            <div className={`spinner-border ${color}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

// @ts-ignore
import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const RoverSelect = () => (
    <Select options={options} />
)

export default RoverSelect
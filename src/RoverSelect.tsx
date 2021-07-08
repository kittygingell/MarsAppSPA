// @ts-ignore
import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'curiosity', label: 'Curiosity' },
    { value: 'opportunity', label: 'Opportunity' },
    { value: 'spirit', label: 'Spirit' }
]

const RoverSelect = () => (
    <Select options={options} />
)

export default RoverSelect
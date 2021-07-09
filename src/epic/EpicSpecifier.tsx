import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import {EpicSpecifierContext} from "./EpicPage";

export default function EpicSpecifier() {
    return (
        <EpicSpecifierContext.Consumer>
            {value => {
                function setDate(date: Date) {
                    value.updateDate(date)
                }

                return (
                    <>
                        <DatePicker
                            onChange={setDate}
                            value={value.date}
                        />
                    </>

                )
            }}

        </EpicSpecifierContext.Consumer>
    );
}
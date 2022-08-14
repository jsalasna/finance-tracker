import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function Inputs() {

    return(
        <div className="data-inputs">
            {this.getInputTextField({label: "Vendor"})}
            {this.getInputTextField({label: "Cost"})}
            {this.getList({label: "Category", value: this.state.category, func: this.handleCategory, arr: this.categories})}
            {this.getList({label: "Accounts", value: this.state.account, func: this.handleAccount, arr: this.accounts})}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date of Expense"
                    value={this.state.date}
                    onChange={(newDate) => {
                        this.setState({date: newDate});
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            {this.getInputTextField({label: "Details"})}
        </div>
    )
}